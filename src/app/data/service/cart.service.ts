import { Injectable } from '@angular/core';
import { Pizza } from '../schema/pizza';
import { CartItem } from '../../interface/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  constructor() { }

  addToCart(custom: object, topping: object, total: number, pizza?: Pizza): void {
    const item: CartItem = {
      pizza: pizza,
      custom: custom,
      topping: topping,
      quantity: 1,
      total: total
    };
    this.items.push(item);
  }

  getItems(): CartItem[] {
    return this.items;
  }

  romoveItem(index: number): void {
    this.items.splice(index, 1);
  }

  clearCart(): void {
    this.items = [];
  }
}
