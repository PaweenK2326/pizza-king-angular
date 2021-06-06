import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../data/service/cart.service';
import { Pizza } from '../../data/schema/pizza';

@Component({
  selector: 'app-total-selection',
  templateUrl: './total-selection.component.html',
  styleUrls: ['./total-selection.component.css']
})
export class TotalSelectionComponent implements OnInit {
  @Input() selectedCustom: object;
  @Input() selectedTopping: object;
  @Input() total: number;
  @Input() pizza?: Pizza;

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addToCart() {
    if(this.pizza){
      this.cartService.addToCart(this.selectedCustom, this.selectedTopping, this.total, this.pizza);
    } else {
      this.cartService.addToCart(this.selectedCustom, this.selectedTopping, this.total, null);
    }
    window.alert('Your pizza has been added to the cart!');
    this.router.navigate(['/products']);
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
