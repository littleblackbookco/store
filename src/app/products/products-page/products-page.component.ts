import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
}
