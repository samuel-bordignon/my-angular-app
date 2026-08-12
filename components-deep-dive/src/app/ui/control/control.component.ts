import { Component, ElementRef, Host, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  //                               ↑↑↑↑
  // torna o estilo do componente global, o problema de vazamento de estilo será resolvido no .css

  host:{ //<-- manipula propriedades e eventos do elemento host 
    class:'control', // <-- adiciona classe entre outros atributos par o componente, sem a necessidade de adicionar manualmente
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control' <-- decorator antigo do angular que faz a mesma coisa do que o de cima
  // @HostListener('click') onClick() { <-- mesma coisa do de cima, funciona como alternativa para eventos
  //   console.log('clicou')
  // }
  label = input.required<string>()
  private el = inject(ElementRef) // um jeito de acessar o compoennte host diretamente caso precise de alguma manipulação

 onClick() {
    console.log('clicou')
    console.log(this.el)
  } 
}
