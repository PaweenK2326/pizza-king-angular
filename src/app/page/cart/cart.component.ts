import { Component, OnInit } from '@angular/core';
import { CartService } from '../../data/service/cart.service';
import { KeyValue } from '@angular/common';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '../../interface/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items: CartItem[] = this.cartService.getItems();
  public total: number = 0;
  public arrowDownIcon = faChevronDown;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.calculateTotal();
  }

  decreaseQty(i): void {
    if(this.items[i].quantity > 1){
      this.items[i].quantity -= 1;
      this.calculateTotal();
    }
  }
  increaseQty(i): void {
    this.items[i].quantity += 1;
    this.calculateTotal();
  }
  changeQty(event, i): void {
    let quantity = parseInt(event.target.value);
    if(!quantity){
      event.target.value = 1;
      quantity = 1;
    }
    this.items[i].quantity = quantity;
    this.calculateTotal();
  }
  deleteItem(i): void {
    if(confirm('Delete this item from cart?')){
      this.cartService.romoveItem(i);
      this.calculateTotal();
    }
  }

  calculateTotal(): void {
    this.total = 0;
    this.items.forEach((item) => {
      this.total += item.quantity * item.total;
    })
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
