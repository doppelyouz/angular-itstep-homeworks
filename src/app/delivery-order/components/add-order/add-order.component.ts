import { Component, EventEmitter, Output } from '@angular/core';
import { OrderInterface } from '../../types/Order.interface';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent {
  @Output() newOrder = new EventEmitter<OrderInterface>();

  title: string = ''

  addOrder(): void {
    if(this.title.trim()) {

      const newOrder:OrderInterface = {
        title: this.title,
        date: new Date()
      }

      this.newOrder.emit(newOrder);
      this.title = '';
    }
  }
}
