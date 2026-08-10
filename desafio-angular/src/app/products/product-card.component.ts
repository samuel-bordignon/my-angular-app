import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html'
})
export class ProductCardComponent {
  name = 'Curso Angular';
  price = 199.9;
  discount = 20;
}
