import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pizza } from '../../data/schema/pizza';
import { PizzaService } from '../../data/service/pizza.service';
import { CartService } from '../../data/service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public pizza: Pizza;
  public pizzaPrice: number[];
  public allPizza: Pizza[];
  public total: number = 0;
  public maximunTopping: number = 10;
  public selectedCustom: object = {
    Size: {name: '', price: 0}, 
    Crust: {name: '', price: 0},
    Sauce: {name: '', price: 0}
  };
  public selectedTopping: object = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pizzaService: PizzaService,
    private cartService: CartService
  ) {

  }

  ngOnInit(): void {
    this.getPizza();
  }

  getPizza(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.pizzaService.getPizza(id).subscribe((p) => {
        this.pizza = p;
        this.pizzaPrice = [p.priceS, p.priceM, p.priceL]        
      });
      this.pizzaService.getAllPizza().subscribe(p => this.allPizza = p.filter(p => p.id !== id));
    });
  }

  toggleHide(): void{
    const customDiv = document.querySelector('#custom-div') as HTMLDivElement;
    if(customDiv.classList.contains('d-none')){
      customDiv.classList.remove('d-none');
    } else {
      customDiv.classList.add('d-none');
    }
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

  addToCart(pizza: Pizza) {
    this.cartService.addToCart(this.selectedCustom, this.selectedTopping, this.total, pizza);
    window.alert('Your pizza has been added to the cart!');
    this.router.navigate(['/products']);
  }
}
