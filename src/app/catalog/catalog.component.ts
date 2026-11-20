import { Component, inject } from '@angular/core';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { ProductsService } from '../products.service';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  private productsService = inject(ProductsService);
  products = this.productsService.getProducts();
}
