import { Component, computed, inject } from '@angular/core';
import { DealListComponent } from '../deal-list/deal-list.component';
import { ProductsService } from '../products.service';

@Component({
  imports: [DealListComponent],
  selector: 'bot-deals',
  styleUrl: './deals.component.css',
  templateUrl: './deals.component.html',
})
export class DealsComponent {
  private productsService = inject(ProductsService);
  private products = this.productsService.getProducts();

  discountedProducts = computed(() =>
    this.products().filter(product => product.discount > 0)
  );
}
