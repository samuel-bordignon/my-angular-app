import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";
import { UiModule } from "./components/ui/card/ui.module";
import { TasksModule } from "./components/tasks/tasks.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RouterOutlet, UiModule, TasksModule]
})
export class AppModule {

}
