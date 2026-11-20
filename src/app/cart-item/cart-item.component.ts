import { Component, signal, input, inject } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../cart.service';
  
@Component({
  selector: 'bot-cart-item',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  private cartService = inject(CartService);
  product = input.required<IProduct>();
  availableInventory = signal(3);

  getImageUrl(product: IProduct) {
    return '/images/robot-parts/' + product.imageName;
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product());
  }

  getPriceClass() {
    return { 'strikethrough': this.product().discount > 0 };
  }
}
