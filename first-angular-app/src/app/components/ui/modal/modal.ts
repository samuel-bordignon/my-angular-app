import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class ModalComponent {
  @Input({ required: true }) title: string = ""
  @Input({ required: true }) submit!: (() => void)
  @Input({ required: true }) cancel!: (() => void)
}
