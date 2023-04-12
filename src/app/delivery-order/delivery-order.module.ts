import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/order/order.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RefuelingMarker } from '../classes/RefuelingMarker.class';
import { ColorizeBorderDirective } from '../directives/colorize-border.directive';
import { FormComponent } from './components/form/form.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

const routes: Routes = [
  {
      path: '',
      component: OrdersTableComponent
  },
  {
      path: 'form',
      component: FormComponent
  },
]

@NgModule({
  declarations: [
    OrdersComponent,
    OrderComponent,
    AddOrderComponent,
    OrdersTableComponent,
    ColorizeBorderDirective,
    FormComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeliveryOrderModule { }

const refuelingMarker = new RefuelingMarker('red', 45);
refuelingMarker.printing('asdasdasd') // 9
console.log(refuelingMarker.inkQuantity);
refuelingMarker.refueling(35);
console.log(refuelingMarker.inkQuantity);
