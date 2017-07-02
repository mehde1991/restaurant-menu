import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {CartMenuComponent} from './cart-menu/cart-menu.component'

import {CartService} from './shared/cart.service';
import { CartViewComponent } from './cart-view/cart-view.component';

@NgModule({
  declarations: [
    CartMenuComponent,
    CartViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule],
  exports: [
    CartMenuComponent
  ],
  providers: [CartService]
})
export class CartModule {
}
