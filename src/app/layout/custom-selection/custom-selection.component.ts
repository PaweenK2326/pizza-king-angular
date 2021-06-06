import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { KeyValue } from '@angular/common';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

import { CustomizationService } from '../../data/service/customization.service';
import { Customization } from '../../data/schema/customization';

@Component({
  selector: 'app-custom-selection',
  templateUrl: './custom-selection.component.html',
  styleUrls: ['./custom-selection.component.css']
})
export class CustomSelectionComponent implements OnInit {
  public customizations: object;
  public selectedCustomObject: object = {
    Size: {name: '', price: 0}, 
    Crust: {name: '', price: 0},
    Sauce: {name: '', price: 0}
  };
  @Output() selectedCustom = new EventEmitter<object>();
  public size: string = '';
  @Input() sizePrice?: number[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customizationService: CustomizationService
  ) {
    this.router.events.subscribe((event: Event) =>{
      if (event instanceof NavigationEnd) {
        setTimeout(()=>{
          if(this.size){
            const sizeInput = document.querySelectorAll('input[name=Size]');
            sizeInput.forEach((inp: HTMLInputElement)=>{
              if(inp.value.charAt(0).toLowerCase() === this.size){
                inp.checked = true;
                inp.dispatchEvent(new Event('change'));
              }
            });
          } else {
            const sizeInput = document.querySelectorAll('input[name=Size]')[0] as HTMLInputElement;
            if(sizeInput){
              sizeInput.checked = true;
              sizeInput.dispatchEvent(new Event('change'));              
            }
          }
          const crustInput = document.querySelectorAll('input[name=Crust]')[0] as HTMLInputElement;
          const sauceInput = document.querySelectorAll('input[name=Sauce]')[0] as HTMLInputElement;
          if(crustInput && sauceInput){
            crustInput.checked = true;
            crustInput.dispatchEvent(new Event('change'));
            sauceInput.checked = true;
            sauceInput.dispatchEvent(new Event('change'));
          }
        }, 0)      
      }
    });
  }

  ngOnInit(): void {
    this.getCustomize();
    this.route.queryParams.subscribe(param => this.size = param['size']);
  }

  getValue(event, value: Customization, i: number): void {
    if(this.sizePrice && value.type === 'Size'){
      this.selectedCustomObject[event.target.name] = {name: value.name, price: this.sizePrice[i]};
    } else {
      this.selectedCustomObject[event.target.name] = {name: value.name, price: value.price};
    }
    this.selectedCustom.emit(this.selectedCustomObject);
  }

  getCustomize(): void {
    let customSize: Customization[] = [];
    let customCrust: Customization[] = [];
    let customSauce: Customization[] = [];
    this.customizationService.getCustomizationByType('Size').subscribe(custom => customSize = custom);
    this.customizationService.getCustomizationByType('Crust').subscribe(custom => customCrust = custom);
    this.customizationService.getCustomizationByType('Sauce').subscribe(custom => customSauce = custom);
    this.customizations = {Size: customSize, Crust: customCrust, Sauce: customSauce};
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
}
