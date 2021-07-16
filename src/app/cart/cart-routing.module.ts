import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {CartPageComponent} from "./cart-page/cart-page.component";

const routes: Route[] = [
  {path: '', component: CartPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule { }
