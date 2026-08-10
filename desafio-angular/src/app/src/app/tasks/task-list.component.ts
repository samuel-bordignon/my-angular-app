import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  search = '';
  newTask = '';

  tasks = [
    { id: 1, title: 'Estudar @Input', done: false },
    { id: 2, title: 'Praticar ngModel', done: true },
    { id: 3, title: 'Revisar event binding', done: false }
  ];

  addTask() {
    if (!this.newTask) return;

    this.tasks.push({
      id: Date.now(),
      title: this.newTask,
      done: false
    });

    this.newTask = '';
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.done = !task.done;
  }
}
