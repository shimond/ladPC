import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCountComponent } from './products-count.component';

describe('ProductsCountComponent', () => {
  let component: ProductsCountComponent;
  let fixture: ComponentFixture<ProductsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
