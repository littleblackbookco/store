import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Product } from '../product.model';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<Product | undefined> {
  constructor(private productsService: ProductsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product | undefined> {
    console.log(route.params.id);
    return this.productsService.getProducts().pipe(
      tap((products) => console.log(products)),
      map((products) =>
        products.find((product) => product.id === Number(route.params.id))
      ),
      tap((product) => console.log(product))
    );
  }
}
