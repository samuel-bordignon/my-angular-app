import { Component, Input } from '@angular/core';
import { AnnualData } from '../calculator/calculator.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input({required:true}) AnnualData: AnnualData = []
}
