import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from './ticket/ticket.component';
import { TicketsComponent } from './tickets/tickets.component';

@Component({
  selector: 'app-dashboard-suport',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent, TicketsComponent],
  templateUrl: './dashboard-suport.component.html',
  styleUrl: './dashboard-suport.component.css'
})
export class DashboardSuportComponent {

}
