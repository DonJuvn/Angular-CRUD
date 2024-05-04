import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent, // Add OrderListComponent here
  ],
  imports: [BrowserModule, FormsModule, MatTableModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
