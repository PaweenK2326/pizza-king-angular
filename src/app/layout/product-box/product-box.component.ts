import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../../data/schema/pizza';
import { CustomizationService } from '../../data/service/customization.service';
import { Customization } from '../../data/schema/customization';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() pizza: Pizza;
  public sizes: Customization[] = [];

  constructor(private customizationService: CustomizationService) { }

  ngOnInit(): void {
    this.getSize();
  }

  getSize(): void {
    this.customizationService.getCustomizationByType('Size').subscribe(c => this.sizes = c);
  }
}
