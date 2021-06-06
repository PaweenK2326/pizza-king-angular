import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customization } from '../schema/customization';
import { CUSTOMIZATION } from '../mock-customization';
import { Topping } from '../schema/topping';
import { TOPPINGS } from '../mock-topping';

@Injectable({
  providedIn: 'root'
})
export class CustomizationService {

  constructor() { }

  getCustomizationByType(type: string): Observable<Customization[]>{
    const customizations = CUSTOMIZATION.filter(c => c.type === type) as Customization[];
    return of(customizations);
  }
  
  getToppingsByPrice(price: number): Observable<Topping[]> {
    const toppings = TOPPINGS.filter(t => t.price === price) as Topping[];
    return of(toppings);
  }
}
