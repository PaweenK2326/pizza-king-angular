import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './layout/content/content.component';
import { ProductBoxComponent } from './layout/product-box/product-box.component';
import { BoldFirstPipe } from './pipe/bold-first.pipe';
import { AddPlusPipe } from './pipe/add-plus.pipe';
import { ProductComponent } from './page/product/product.component';
import { SearchPizzaPipe } from './pipe/search-pizza.pipe';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { ToppingSelectionComponent } from './layout/topping-selection/topping-selection.component';
import { TotalSelectionComponent } from './layout/total-selection/total-selection.component';
import { CustomSelectionComponent } from './layout/custom-selection/custom-selection.component';
import { CartComponent } from './page/cart/cart.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { ThankyouComponent } from './page/thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContentComponent,
    ProductBoxComponent,
    BoldFirstPipe,
    AddPlusPipe,
    ProductComponent,
    SearchPizzaPipe,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    ToppingSelectionComponent,
    TotalSelectionComponent,
    CustomSelectionComponent,
    CartComponent,
    CheckoutComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIcons(faEnvelope, faKey);
  }
}
