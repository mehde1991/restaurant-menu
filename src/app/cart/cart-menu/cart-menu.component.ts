import {Component, OnInit} from '@angular/core';

import {Cart} from '../shared/cart.model';
import {CartService} from '../shared/cart.service';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.scss']
})
export class CartMenuComponent {
  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }
}
