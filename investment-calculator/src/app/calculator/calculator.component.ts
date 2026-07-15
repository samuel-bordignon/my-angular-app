import { Component, EventEmitter, inject, Output } from '@angular/core';
import { InputComponent } from '../ui/input/input.component';
import type { AnnualData, Payload } from './calculator.model';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  payload: Payload = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  }
  @Output() submitAnnualData = new EventEmitter<AnnualData>()
  private calculatorService = inject(CalculatorService)

  submit() {
    const result = this.calculatorService.calculateInvestmentResults(this.payload)
    this.submitAnnualData.emit(result)
  }
}
