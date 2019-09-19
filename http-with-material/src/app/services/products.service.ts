import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsChanged$ = new BehaviorSubject<Product[]>([]);

  initProducts() {
    const url = environment.serverUrl + '/products';
    this.httpClient.get<Product[]>(url)
      .pipe(tap(result => {
        this.productsChanged$.next(result);
      })).toPromise();
  }

  addNewProduct(p: Product): Promise<Product> {
    const url = environment.serverUrl + '/products';
    return this.httpClient.post<Product>(url, p)
      .pipe(tap(x => this.initProducts()))
      .toPromise();
  }

  updateProduct(p: Product): Promise<Product> {
    const url = environment.serverUrl + '/products/' + p.id;
    return this.httpClient.put<Product>(url, p)
      .pipe(tap(x => this.initProducts()))
      .toPromise();
  }

  deleteProduct(id: number): Promise<void> {
    const url = environment.serverUrl + '/products/' + id;
    return this.httpClient.delete<void>(url)
      .pipe(tap(x => this.initProducts()))
      .toPromise();
  }


  constructor(private httpClient: HttpClient) { }
}
