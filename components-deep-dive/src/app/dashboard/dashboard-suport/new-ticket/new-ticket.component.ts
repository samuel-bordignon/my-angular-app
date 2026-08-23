import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../ui/button/button.component";
import { ControlComponent } from "../../../ui/control/control.component";
import { FormsModule } from '@angular/forms';

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

  add = output<{ title: string, text: string }>()

  ngOnInit(): void {
    console.log("ON INIT")
    console.log(this.form?.nativeElement)
  }
  ngAfterViewInit(): void {
    console.log("VIEW INIT")
    console.log(this.form?.nativeElement)
  }

  onSubmit(title: string, description: string) {
    console.log(title)
    console.log(description)
    this.form?.nativeElement.reset()
  }
}
