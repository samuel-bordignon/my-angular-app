import { Component } from '@angular/core';
import { Ticket, TicketPayload } from '../ticket/ticket.model';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = []

  onAdd(ticket: TicketPayload) {
    const req: Ticket = {
      title:ticket.title,
      request:ticket.text,
      id: Math.random().toString(),
      status:'open'
    }
    this.tickets.push(req)
  }
  completeTicket(id:string){
    const index = this.tickets.findIndex(ticket => ticket.id === id)

    this.tickets[index].status = 'closed'
  }
}
