import {Component} from '@angular/core';

import {Cart, CartItem} from '../shared/cart.model';
import {CartService} from '../shared/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})

export class CartViewComponent {

  cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.cart;
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeCartItem(item: CartItem) {
    this.cartService.updateCartItems(item);
  }

  update(value, item: CartItem) {
    let res = value - item.count;
    if (value >= 1 && res > 0) {
      for (let i = 0; i < res; i++) {
        this.cartService.addMeal(item.meal);
      }
    } else if (value >= 1 && res < 0) {
      for (let i = 0; i < -res; i++) {
        this.cartService.removeMeal(item.meal);
      }
    } else if (value < 1) {
      for (let i = 0; i < -res - 1; i++) {
        this.cartService.removeMeal(item.meal);
      }
      value = 1;
    }
    return value;
  }
}
