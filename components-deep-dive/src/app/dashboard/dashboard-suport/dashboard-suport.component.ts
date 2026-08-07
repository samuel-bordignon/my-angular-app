import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-dashboard-suport',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './dashboard-suport.component.html',
  styleUrl: './dashboard-suport.component.css'
})
export class DashboardSuportComponent {

}
