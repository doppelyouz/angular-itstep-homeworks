import { Component, Input } from '@angular/core';
import { OrderInterface } from '../../types/Order.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @Input() order!: OrderInterface;

  getWeekDay() {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[this.order.date.getDay()] === "ВС" || days[this.order.date.getDay()] === "СБ"
  }
}
