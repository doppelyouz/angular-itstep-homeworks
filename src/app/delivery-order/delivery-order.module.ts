import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/order/order.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { RefuelingMarker } from '../classes/RefuelingMarker.class';

const routes: Routes = [
  {
      path: 'orders',
      component: OrdersTableComponent
  }
]

@NgModule({
  declarations: [
    OrdersComponent,
    OrderComponent,
    AddOrderComponent,
    OrdersTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class DeliveryOrderModule { }


const refuelingMarker = new RefuelingMarker('red', 45);
refuelingMarker.refueling(35);
console.log(refuelingMarker.inkQuantity);
