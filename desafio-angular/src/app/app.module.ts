import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CounterComponent } from './counter/counter.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskItemComponent } from './tasks/task-item.component';
import { UserProfileComponent } from './user/user-profile.component';
import { NotificationComponent } from './shared/notification.component';
import { ProductCardComponent } from './products/product-card.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  // PROBLEMA: os componentes não estão de acordo com a nova versão do angular
  declarations: [
    AppComponent,
    DashboardComponent,
    CounterComponent,
    TaskListComponent,
    TaskItemComponent,
    UserProfileComponent,
    NotificationComponent,
    ProductCardComponent,
    SettingsComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
