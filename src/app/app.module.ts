import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { products } from './product';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAlertsComponent,
    CartComponent,
    NavComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, ReactiveFormsModule,  RouterModule.forRoot([
      {
        path:'',
        component:ProductListComponent
      },
      {
        path:'products/:productsId',
        component: ProductDetailsComponent
      },
      {
        path:'cart',
        component: CartComponent,
      },
      {
        path:'shipping',
        component:ShippingComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
