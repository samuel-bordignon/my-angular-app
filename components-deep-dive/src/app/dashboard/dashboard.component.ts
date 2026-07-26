import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponet {
  title = input.required<string>()
  image_url = input.required<string>()
  image_alt = input.required<string>()
}
