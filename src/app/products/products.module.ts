import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductComponent } from './product/product.component';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
