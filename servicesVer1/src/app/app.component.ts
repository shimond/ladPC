import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  ngOnInit() {
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  async deleteProduct(id: number) {
    await this.productsService.deleteProduct(id);
    const productToDeleteIndex = this.products.findIndex(x => x.id == id);
    if (productToDeleteIndex !== -1) {
      this.products.splice(productToDeleteIndex, 1);
    }

  }

  async add() {
    const newProduct: Product = {
      name: 'Corny',
      price: 10,
      imageUrl: 'https://superpharmstorage.blob.core.windows.net/hybris/products/mobile/medium/4011800628512.jpg'
    };
    try {
      const newProdctWithId = await this.productsService.addNewProduct(newProduct);
      this.products.push(newProdctWithId);
    } catch (error) {
      alert('BASA:' + error);
    }

  }
  constructor(private productsService: ProductsService) {

  }

}
