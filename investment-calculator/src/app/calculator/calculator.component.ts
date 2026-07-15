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

}
