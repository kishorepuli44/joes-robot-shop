import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'bot-deal-list',
  imports: [CurrencyPipe],
  templateUrl: './deal-list.component.html',
  styleUrl: './deal-list.component.css'
})
export class DealListComponent {
  products = input.required<readonly IProduct[]>();
}
