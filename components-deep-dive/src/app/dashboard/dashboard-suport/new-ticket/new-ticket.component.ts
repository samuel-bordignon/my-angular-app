import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../ui/button/button.component";
import { ControlComponent } from "../../../ui/control/control.component";
import { FormsModule } from '@angular/forms';
import { TicketPayload } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form')

  enteredTitle = ''
  enteredDescription = ''

  add = output<TicketPayload>()

  ngOnInit(): void {
    console.log("ON INIT")
    console.log(this.form?.nativeElement)
  }
  ngAfterViewInit(): void {
    console.log("VIEW INIT")
    console.log(this.form?.nativeElement)
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredDescription })
    this.form?.nativeElement.reset()
  }
}
