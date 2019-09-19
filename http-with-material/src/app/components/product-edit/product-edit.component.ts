import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnChanges {
  @Input() product: Product;
  @Output() productEditingFinished = new EventEmitter<Product>();
  productForm: FormGroup;

  ngOnInit() {
    if (!this.product) {
      this.productForm = this.fb.group({
        name: [null, Validators.required],
        price: [null, Validators.required],
        imageUrl: [null, Validators.required],
        expireDate: [new Date().valueOf()]
      });
    }
  }
  ngOnChanges() {
    if (this.product) {
      this.productForm = this.fb.group({
        id: [this.product.id],
        name: [this.product.name, Validators.required],
        price: [this.product.price, Validators.required],
        imageUrl: [this.product.imageUrl, Validators.compose([Validators.required])],
        expireDate: [new Date(this.product.expireDate)]
      });
    }

  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.productForm.valid) {
      this.productEditingFinished.emit(this.productForm.value);
    }
  }
}
