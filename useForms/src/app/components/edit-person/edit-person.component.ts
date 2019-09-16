import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  @Input() editablePerson: Person;
  personFormGroup: FormGroup;
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

  ngOnInit() {
    this.personFormGroup = this.formBuilder.group({
      fullName: [this.editablePerson.fullName, Validators.required],
      email: [this.editablePerson.email, Validators.compose([Validators.email, Validators.required, this.endsWithGmail])],
      isActive: [this.editablePerson.isActive, Validators.requiredTrue]
    }, { updateOn: 'change', validators: [this.isFormValid] });

    // Auto save : 
    // this.personFormGroup.valueChanges.subscribe(() => this.save());
  }

  getErrors(field: string) {
    return this.personFormGroup.controls[field].errors;

  }
  save() {
    if (this.personFormGroup.valid) {
      this.editablePerson = this.personFormGroup.value;
    }
  }

}
