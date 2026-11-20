import { Service, signal } from '@angular/core';
import { IProduct } from './product.model';

@Service()
export class CartService {
    cart = signal<IProduct[]>([]);
    
    addToCart(product: IProduct) {
        this.cart.update(cart => [...cart, product]);
    }

    removeFromCart(product: IProduct) {
        this.cart.update(cart => cart.filter(p => p.id !== product.id));
    }
}
