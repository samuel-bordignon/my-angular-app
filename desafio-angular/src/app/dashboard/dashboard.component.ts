import { Component } from '@angular/core';
import { SettingsComponent } from "../settings/settings.component";
import { UserProfileComponent } from "../user/user-profile.component";
import { NotificationComponent } from "../shared/notification.component";
import { ProductCardComponent } from "../products/product-card.component";
import { TaskListComponent } from "../tasks/tasks-list/task-list.component";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [SettingsComponent, UserProfileComponent, NotificationComponent, ProductCardComponent, TaskListComponent, CounterComponent]
})
export class DashboardComponent {
  title = 'Painel Angular';
  darkMode = false;
  progress = 45;
}
