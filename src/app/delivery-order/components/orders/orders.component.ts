import { Component, Input } from '@angular/core';
import { OrderInterface } from '../../types/Order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input() orders: OrderInterface[] = [];
}
