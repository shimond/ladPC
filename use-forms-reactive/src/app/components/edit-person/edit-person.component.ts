import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
;

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit, OnChanges {

  @Input() editablePerson: Person;
  personFormGroup: FormGroup;
  @Output() editingFinished = new EventEmitter<Person>();
  constructor(private formBuilder: FormBuilder) { }

  endsWithGmail(control: AbstractControl) {
    const email: string = control.value;
    if (email.endsWith('gmail.com')) {
      return null;
    }
    return {
      endsWithGmail: {
        rule: 'ends with gmail.com',
        currentValue: email
      }
    }
  }

  isFormValid(form: FormGroup) {
    const currentValue: Person = form.value;
    if (currentValue.fullName.startsWith('a') && currentValue.email.startsWith('a')) {
      return null;
    }
    return {
      fullNameAndemailStartWithA: true
    };
  }

  ngOnChanges() {
    if (this.editablePerson) {
      this.personFormGroup = this.formBuilder.group({
        id: [this.editablePerson.id],
        fullName: [this.editablePerson.fullName, Validators.required],
        email: [this.editablePerson.email, Validators.compose([Validators.email, Validators.required, this.endsWithGmail])],
        isActive: [this.editablePerson.isActive, Validators.requiredTrue]
      }, { updateOn: 'change', validators: [this.isFormValid] });
    }

  }
  ngOnInit() {
    this.personFormGroup = this.formBuilder.group({
      id: [],
      fullName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required, this.endsWithGmail])],
      isActive: [false, Validators.requiredTrue]
    }, { updateOn: 'change', validators: [this.isFormValid] });
  }

  getErrors(field: string) {
    return this.personFormGroup.controls[field].errors;

  }
  save() {
    if (this.personFormGroup.valid) {
      // this.editablePerson = this.personFormGroup.value;
      this.editingFinished.emit(this.personFormGroup.value);
    }
  }

}
