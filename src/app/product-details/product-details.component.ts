import { Component, signal, input, inject } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  private cartService = inject(CartService);
  product = input.required<IProduct>();
  availableInventory = signal(3);

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  addToCart(event: MouseEvent) {
    setTimeout(() => this.availableInventory.update((p) => p - 1), 100);
    // console.log(event);
    this.cartService.addToCart(this.product());
  }
  getPriceClass() {
    return { 'strikethrough': this.product().discount > 0 };
  }
}
