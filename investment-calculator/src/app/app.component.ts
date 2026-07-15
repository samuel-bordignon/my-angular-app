import { Component } from '@angular/core';

import { TableComponent } from './table/table.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './header/header.component';

import type { AnnualData } from './calculator/calculator.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TableComponent, CalculatorComponent, HeaderComponent]
})
export class AppComponent {
  investmentResults?: AnnualData;

  onCalculate(results: AnnualData) {
    this.investmentResults = results;
  }
}
