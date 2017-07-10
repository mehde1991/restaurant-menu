import {Injectable} from '@angular/core';

import {Cart, CartItem} from './cart.model'
import {Meal} from '../../meal/shared/meal.model'

@Injectable()
export class CartService {
  cart: Cart = new Cart();

  addMeal(meal: Meal): CartItem {
    let item: CartItem = this.findCartItem(meal.id);
    if (item) {
      item.count++;
      item.amount += meal.price;
    } else {
      item = {
        meal: meal,
        count: 1,
        amount: meal.price
      };
      this.cart.items.push(item);
    }
    this.cart.count++;
    this.cart.amount += meal.price;
    return item;
  }

  removeMeal(meal: Meal): CartItem {
    let item: CartItem = this.findCartItem(meal.id);
    if (item) {
      item.count--;
      item.amount -= meal.price;
      if (!item.count) {
        this.removeCartItem(item);
        item = null;
      }
      this.cart.count--;
      this.cart.amount -= meal.price;
    }
    return item;
  }

  findCartItem(id: number): CartItem {
    for (let i = 0; i < this.cart.items.length; i++) {
      if (this.cart.items[i].meal.id === id) {
        return this.cart.items[i];
      }
    }
    return null;
  }

  clearCart() {
    this.cart.items = [];
    this.cart.amount = 0;
    this.cart.count = 0;
  }

  updateCartItems(item: CartItem) {
    this.removeCartItem(item);
    this.cart.count -= item.count;
    this.cart.amount -= item.amount;
  }

  removeCartItem(item: CartItem) {
    let index: number = this.cart.items.indexOf(item);
    if (index !== -1) {
      this.cart.items.splice(index, 1);
    }
  }
}
