import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topping } from '../../data/schema/topping';
import { CustomizationService } from '../../data/service/customization.service';

@Component({
  selector: 'app-topping-selection',
  templateUrl: './topping-selection.component.html',
  styleUrls: ['./topping-selection.component.css']
})
export class ToppingSelectionComponent implements OnInit {
  public toppings: object = {};

  @Input() maximunTopping: number;
  private totalTopping: number = 0;
  @Output() selectedTopping = new EventEmitter<object>();
  public selectedToppingObject: object = {};

  constructor(private customizationService: CustomizationService) { }

  ngOnInit(): void {
    this.getTopping();
  }

  getTopping(): void {
    let topping19: Topping[] = [];
    let topping29: Topping[] = [];
    let topping39: Topping[] = [];
    this.customizationService.getToppingsByPrice(19).subscribe(toppings => topping19 = toppings);
    this.customizationService.getToppingsByPrice(29).subscribe(toppings => topping29 = toppings);
    this.customizationService.getToppingsByPrice(39).subscribe(toppings => topping39 = toppings);
    this.toppings = {19: topping19, 29: topping29, 39: topping39};
  }

  increaseValue(event, topping: Topping): void {
    if(this.totalTopping >= this.maximunTopping){
      alert(`maximum of ${this.maximunTopping} toppings can be added`);
    } else {  
      let quantity = parseInt(event.target.previousSibling.value);
      event.target.previousSibling.value = quantity + 1;
      event.target.parentElement.firstChild.classList.remove('btn-secondary');
      event.target.parentElement.firstChild.classList.add('btn-danger');
      this.manageTopping(parseInt(event.target.previousSibling.value), topping);
    }
  }

  decreaseValue(event, topping: Topping): void {
    let quantity = parseInt(event.target.nextSibling.value);
    if(quantity){
      event.target.nextSibling.value = quantity - 1;
    }
    if(parseInt(event.target.nextSibling.value) === 0){
      event.target.classList.remove('btn-danger');
      event.target.classList.add('btn-secondary');
    }
    this.manageTopping(parseInt(event.target.nextSibling.value), topping);
  }

  changeQty(event, topping: Topping): void {
    let quantity = parseInt(event.target.value);
    const quantity_length = quantity.toString().length;
    let quantity2 = 0;
    let previousValue = 0;
    // keyup event problem when there is more than 1 digit
    if(quantity_length > 1){
      previousValue = parseInt(quantity.toString().slice(0, quantity_length - 1))
      quantity2 = quantity - previousValue;
    }
    let checkQuantity = quantity;
    if(quantity2 !== 0){
      checkQuantity = quantity2;
    }
    if(quantity > this.maximunTopping || this.totalTopping + checkQuantity > this.maximunTopping){
      const toppingLeft = this.maximunTopping - (this.totalTopping - previousValue);
      event.target.value = toppingLeft;
      quantity = toppingLeft;
    } else {
      event.target.value = quantity ? quantity : 0;
    }
    // if quantity is > 0 or not a NaN, change - button color to like an available button
    if(quantity){
      event.target.parentElement.firstChild.classList.remove('btn-secondary');
      event.target.parentElement.firstChild.classList.add('btn-danger');
    } else {
      event.target.parentElement.firstChild.classList.remove('btn-danger');
      event.target.parentElement.firstChild.classList.add('btn-secondary');
    }
    this.manageTopping(quantity, topping);
  }

  manageTopping(quantity: number, topping: Topping): void {
    if(quantity){
      this.selectedToppingObject[topping.name] = {quantity: quantity, price: topping.price};
    } else {
      delete this.selectedToppingObject[topping.name];
    }
    this.selectedTopping.emit(this.selectedToppingObject);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalTopping = 0;
    for(const each of Object.values(this.selectedToppingObject)){
      this.totalTopping += each.quantity;
    }
  }
}
