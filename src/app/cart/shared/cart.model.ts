import {Meal} from '../../meal/shared/meal.model'

export interface CartItem {
  meal: Meal;
  count: number;
  amount: number;
}

export class Cart {
  count: number = 0;
  amount: number = 0;
  items: CartItem[] = [];
}
