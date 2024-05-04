import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [
    { id: 1, name: 'Product A', quantity: 10, unitPrice: 15.99 },
    { id: 2, name: 'Product B', quantity: 5, unitPrice: 10.49 },
    { id: 3, name: 'Product C', quantity: 3, unitPrice: 20.75 },
    { id: 4, name: 'Product D', quantity: 8, unitPrice: 5.99 },
    { id: 5, name: 'Product E', quantity: 2, unitPrice: 30.25 },
  ];

  constructor() {}

  getOrders(): Order[] {
    return this.orders;
  }

  addOrder(order: Order): void {
    this.orders.push(order);
  }

  deleteOrder(id: number): void {
    this.orders = this.orders.filter((order) => order.id !== id);
  }
}
