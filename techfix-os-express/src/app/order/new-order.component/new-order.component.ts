import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../order.service';
import { CreateOrderPayload } from '../order.model';

@Component({
  imports: [FormsModule],
  selector: 'app-new-order',
  styleUrl: './new-order.component.css',
  templateUrl: './new-order.component.html',
})
export class NewOrderComponent {
  private orderService = inject(OrderService)

  data: CreateOrderPayload = {
    clientName: "",
    device:"",
    issueDescription:"",
    price: 0,
    priority:"Baixa"
  }

  onSubmit(): void {
    this.orderService.addOrder({
      ...this.data,
      id: crypto.randomUUID(),
      status: 'Recebido',
      createdAt: new Date().toISOString()
    }
    )
  }
}
