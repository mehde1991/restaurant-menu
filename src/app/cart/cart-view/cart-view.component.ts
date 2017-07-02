import {Component, OnInit} from '@angular/core';

import {Cart, CartItem} from '../shared/cart.model';
import {CartService} from '../shared/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }

  ngOnInit() {
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeCartItem(item: CartItem) {
    this.cartService.updateCartItems(item);
  }

}
