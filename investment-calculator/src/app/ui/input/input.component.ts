import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input({ required: true }) label: string = ""
  @Input({ required: true }) id: string = ""
  @Input({ required: true }) value: number = 0

  @Output() valueChange = new EventEmitter<number>()
}
