import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<MatTableDataSource<Order>> {
    return this.http.get<Order[]>('url_to_your_api').pipe(
      map(data => new MatTableDataSource<Order>(data))
    );
  }

  deleteOrder(id: number): void {
    // Delete order logic here
  }
}
