import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryOrderModule } from './delivery-order/delivery-order.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeliveryOrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
