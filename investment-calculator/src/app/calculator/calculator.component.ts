import { Component } from '@angular/core';
import { InputComponent } from '../ui/input/input.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  payload = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  }
}
