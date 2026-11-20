import { computed, Service } from '@angular/core';
import { IProduct } from './product.model';
import { httpResource, HttpResourceRef } from '@angular/common/http';

@Service()
export class ProductsService {
  private resource: HttpResourceRef<IProduct[] | undefined> = httpResource(() => '/api/products');

  getProducts() {
    return computed(() => this.resource.value() ?? []);
  }
}
