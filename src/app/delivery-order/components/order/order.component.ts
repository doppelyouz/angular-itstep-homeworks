import { Component, Input } from '@angular/core';
import { OrderInterface } from '../../types/Order.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @Input() order!: OrderInterface;

  isItWeekDay() {
    return this.order.date.getDay() === 0 || this.order.date.getDay() === 6
  }
}
