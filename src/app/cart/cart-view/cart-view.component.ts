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
    if (res > 0) {
      for (let i = 0; i < res; i++) {
        this.cartService.addMeal(item.meal);
      }
    } else if (res < 0) {
      for (let i = 0; i < -res; i++) {
        this.cartService.removeMeal(item.meal);
      }
    }

    if (item.count === 0) {
      this.cartService.addMeal(item.meal);
    }
    return value;
  }
}
