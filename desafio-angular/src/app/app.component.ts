import { Component } from '@angular/core';
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  template: `<app-dashboard></app-dashboard>`,
  imports: [DashboardComponent]
})
export class AppComponent {}
