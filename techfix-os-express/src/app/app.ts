import { Component, signal } from '@angular/core';
import { Order } from './order/order.component';
import { NewOrderComponent } from './order/new-order.component/new-order.component';

@Component({
  selector: 'app-root',
  imports: [Order, NewOrderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('techfix-os-express');
}
