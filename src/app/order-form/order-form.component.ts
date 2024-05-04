import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent {
  constructor(private orderService: OrderService) {}

  submitForm(form: NgForm): void {
    if (form.valid) {
      const order: Order = {
        id: this.orderService.getOrders().length + 1,
        name: form.value.name,
        quantity: form.value.quantity,
        unitPrice: form.value.unitPrice,
      };
      this.orderService.addOrder(order);
      form.resetForm();
    }
  }
}
