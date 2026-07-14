import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[TableComponent, CalculatorComponent, HeaderComponent]
})
export class AppComponent {}
