import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task";
import { NewTaskComponent } from "./new-task/new-task.component";
import { UiModule } from "../ui/card/ui.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TaskComponent, TasksComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [UiModule, FormsModule, CommonModule]
})
export class TasksModule { }
