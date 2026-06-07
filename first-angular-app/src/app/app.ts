import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { UserComponent } from "./components/user/user";
import { DUMMY_USERS } from '../data/dummy-users';
import { TasksComponent } from './components/tasks/tasks';
import { NewUserComponent } from './components/user/new-user/new-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NewUserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('first-angular-app');
  users = DUMMY_USERS
  selectedUserId: string = ''
  isOpenNewUser: Boolean = false

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)
  }
  onSelectUser(id: string) {
    this.selectedUserId = id
  }
  onOpenNewUser() {
    this.isOpenNewUser = true
  }
  onCloseNewUser() {
    this.isOpenNewUser = false
  }
}
