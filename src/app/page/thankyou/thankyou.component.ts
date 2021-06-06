import { Component, OnInit } from '@angular/core';
import { CartService } from '../../data/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  public second: number = 5;
  private interval;

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.redirectHome();
  }

  redirectHome(): void {
    this.interval = setInterval(() => {
      if(this.second > 0){
        this.second -= 1;
      } else {
        this.cartService.clearCart();
        clearInterval(this.interval)
        this.router.navigate(['/home']);
      }
    }, 1000);
  }
}
