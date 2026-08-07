import { Component, Host, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  //                               ↑↑↑↑
  // torna o estilo do componente global, o problema de vazamento de estilo será resolvido no .css

  // host:{
  //   class:'control' <-- adiciona classe entre outros atributos par o componente, sem a necessidade de adicionar manualmente
  // }
})
export class ControlComponent { 
  label = input.required<string>()
}
