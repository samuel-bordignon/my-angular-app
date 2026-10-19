import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>()
  isOpenTicket = signal(false)
  detailsVisible = signal(false)
  add = output<string>()

  isClosedeTicket = true

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible)
  }

  submitTask(id: string) {
    this.add.emit(id)
  }


}
