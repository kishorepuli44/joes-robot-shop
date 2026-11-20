import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DealsComponent } from './deals/deals.component';

export const routes: Routes = [
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'catalog', component: CatalogComponent },
    { path: 'deals', component: DealsComponent },
    { path: 'cart', component: CartComponent }
];
