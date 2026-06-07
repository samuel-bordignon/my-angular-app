import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { UserComponent } from "./components/user/user";
import { DUMMY_USERS } from '../data/dummy-users';
import { TasksComponent } from './components/tasks/tasks';
import { NewUserComponent } from './components/user/new-user/new-user';
import { UserService } from './components/user/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NewUserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  selectedUserId: string = ''
  isOpenNewUser: Boolean = false

  private userService = inject(UserService)

  get selectedUser() {
    return this.userService.selectUser(this.selectedUserId)
  }
  get users() {
    return this.userService.getUsers()
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
