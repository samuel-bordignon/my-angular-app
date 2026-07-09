import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { CardComponent } from "./components/ui/card/card.component";
import { TaskComponent } from "./components/tasks/task/task";
import { NewTaskComponent } from "./components/tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { UiModule } from "./components/ui/card/ui.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RouterOutlet, FormsModule, UiModule]
})
export class AppModule {

}
