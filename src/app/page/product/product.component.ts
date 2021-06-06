import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../data/schema/pizza';
import { PizzaService } from '../../data/service/pizza.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public pizzas: Pizza[] = [];
  public search: string = '';
  public sortNameBy: string = 'name';
  public sortPriceBy: string = 'priceS';

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.getPizzas();
  }

  getPizzas(): void {
    this.pizzaService.getAllPizza().subscribe(p => this.pizzas = p);
  }

  searched(): void{
    const nameSelect = document.querySelector('#sort-name') as HTMLSelectElement;
    const priceSelect = document.querySelector('#sort-price') as HTMLSelectElement;
    nameSelect.options[0].selected = true;
    priceSelect.options[0].selected = true;
  }

  sort(event): void{
    this.search = '';
    const direction = event.target.value;
    const type = event.target.name;
    if(type === this.sortNameBy){
      event.target.nextSibling.children[0].selected = true;
    } else {
      event.target.previousSibling.children[0].selected = true;
    }
    if(direction === 'ascending'){
      this.pizzas.sort(this.compare(type));
    } else {
      this.pizzas.sort(this.compare(type)).reverse();
    }
  }
  compare = (type: string) => 
    (a: Pizza, b: Pizza) => a[type] > b[type] ? 1 : a[type] < b[type] ? -1 : 0;
}
