import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  value = 0;

  increment() {
    this.value++;
  }

  decrement() {
    // PROBLEMA: incrementa em vez de decrementar
    if(this.value >= 1){
      this.value--;
    }
  }
}
