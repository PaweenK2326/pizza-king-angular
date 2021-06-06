import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../data/schema/pizza';
import { PizzaService } from '../../data/service/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pizzas: Pizza[] = [];
  public customizations: object;
  public selectedCustom: object = {
    Size: {name: '', price: 0}, 
    Crust: {name: '', price: 0},
    Sauce: {name: '', price: 0}
  };
  public maximunTopping: number = 20;
  public selectedTopping: object = {};
  public total: number = 0;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas(): void {
    this.pizzaService.getPromotionPizza().subscribe(pizzas => this.pizzas = pizzas);
  }

  changeCustom(e): void {
    this.selectedCustom = e;
    this.calculateTotal();
  }

  changeTopping(e): void{
    this.selectedTopping = e;
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = 0;
    for(const each of Object.values(this.selectedCustom)){
      this.total += each.price;
    }
    for(const each of Object.values(this.selectedTopping)){
      this.total += each.price * each.quantity;
    }
  }

}
