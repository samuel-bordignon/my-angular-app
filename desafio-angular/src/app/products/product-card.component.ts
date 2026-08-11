import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  imports:[CommonModule]
})
export class ProductCardComponent {
  name = 'Curso Angular';
  price = 199.9;
  discount = 0.2;
}
