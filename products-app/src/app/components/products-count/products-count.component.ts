import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-count',
  templateUrl: './products-count.component.html',
  styleUrls: ['./products-count.component.scss']
})
export class ProductsCountComponent implements OnInit {

  count = 0;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.productsChanged$.subscribe(products=> this.count = products.length);
  }

}
