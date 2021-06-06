import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../data/service/cart.service';
import { CartItem } from '../../interface/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public total: number = 0;
  public items: CartItem[] = this.cartService.getItems();

  checkoutForm = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
    detail: new FormControl(''),
    province: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    sub_district: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    payment: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.calculateCart();
  }

  get phone() { return this.checkoutForm.get('phone') };
  get province() { return this.checkoutForm.get('province') };
  get district() { return this.checkoutForm.get('district') };
  get sub_district() { return this.checkoutForm.get('sub_district') };
  get zipcode() { return this.checkoutForm.get('zipcode') };
  get payment() { return this.checkoutForm.get('zipcode') };

  calculateCart(): void {
    this.items.length === 0 ? this.router.navigate(['/home']) :
    this.items.forEach((item) => {
      this.total += item.quantity * item.total;
    });
  }

  onSubmit(): void {
    console.log(this.checkoutForm.value);
  }
}
