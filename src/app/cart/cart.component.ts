import { Component, inject, Signal } from '@angular/core';
import { IProduct } from '../product.model';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../cart.service';

@Component({
  imports: [CartItemComponent],
  selector: 'bot-cart',
  styleUrl: './cart.component.css',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  // cartItems: IProduct[] = [allProducts[2], allProducts[4]];
  private cartService = inject(CartService);

  cartItems: Signal<IProduct[]> = this.cartService.cart;
  
}
