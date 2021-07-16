import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Route[] = [
  { path: '', component: ProductsPageComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
