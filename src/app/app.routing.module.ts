import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'add-order', component: OrderFormComponent },
  { path: 'view-orders', component: OrderListComponent },
  { path: '', redirectTo: '/view-orders', pathMatch: 'full' }, // Redirect root path to view-orders
  { path: '**', redirectTo: '/view-orders' }, // Redirect invalid routes to view-orders
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
