import { Component } from '@angular/core';
import { OrderInterface } from '../../types/Order.interface';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent {
  orders: OrderInterface[] = []

  newOrder(order: OrderInterface) {
    this.orders.unshift(order);
  }
}
