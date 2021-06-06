import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pizza } from '../schema/pizza';
import { PIZZA } from '../mock-pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPromotionPizza(): Observable<Pizza[]>{
    const pizzas = PIZZA.filter(p => p.isPromotion === true) as Pizza[];
    return of(pizzas);
  }

  getAllPizza(): Observable<Pizza[]>{
    const pizzas = PIZZA.filter(p => p.isActive === true) as Pizza[];
    return of(pizzas);
  }

  getPizza(id: number): Observable<Pizza>{
    const pizza = PIZZA.find(p => p.id === id) as Pizza;
    return of(pizza);
  }
}
