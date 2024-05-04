import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [OrderListComponent],
  templateUrl: './order-list/order-list.html',
  styleUrl: './order-list/order-list.css',
})

export class AppComponent {
  title = 'order-management-system';
}
