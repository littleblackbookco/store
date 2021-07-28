import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = this.generateProducts();

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  private generateProducts(): Product[] {
    return Array(20)
      .fill(0)
      .map((v, i) => ({ id: i, title: `Product: ${i}` }));
  }
}
