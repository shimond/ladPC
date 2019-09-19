import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  getAllProducts() {
    const url = environment.serverUrl + '/products';
    return this.httpClient.get<Product[]>(url)
      .pipe(tap(products => console.log('res', products)));
  }

  addNewProduct(p: Product): Promise<Product> {
    const url = environment.serverUrl + '/products';
    return this.httpClient.post<Product>(url, p)
      .toPromise();
  }

  updateProduct(p: Product): Promise<Product> {
    const url = environment.serverUrl + '/products/' + p.id;
    return this.httpClient.put<Product>(url, p).toPromise();
  }

  deleteProduct(id: number): Promise<void> {
    const url = environment.serverUrl + '/products/' + id;
    return this.httpClient.delete<void>(url)
      .toPromise();
  }


  constructor(private httpClient: HttpClient) { }
}
