import { signal, WritableSignal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '../product.model';
import { ProductsService } from '../products.service';
import { DealsComponent } from './deals.component';

describe('DealsComponent', () => {
  let component: DealsComponent;
  let fixture: ComponentFixture<DealsComponent>;
  let products: WritableSignal<IProduct[]>;

  beforeEach(async () => {
    products = signal<IProduct[]>([]);

    await TestBed.configureTestingModule({
      imports: [DealsComponent],
      providers: [
        {
          provide: ProductsService,
          useFactory: () => ({
            getProducts: () => products.asReadonly()
          })
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DealsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows only products with a discount', () => {
    products.set([
      {
        id: 1,
        name: 'Discounted Robot',
        description: 'A discounted robot',
        imageName: 'discounted.png',
        category: 'Robots',
        price: 100,
        discount: 0.2
      },
      {
        id: 2,
        name: 'Full Price Robot',
        description: 'A full price robot',
        imageName: 'full-price.png',
        category: 'Robots',
        price: 50,
        discount: 0
      }
    ]);

    fixture.detectChanges();

    const content = fixture.nativeElement.textContent;
    expect(content).toContain('Discounted Robot');
    expect(content).toContain('Discounted price: $80.00');
    expect(content).not.toContain('Full Price Robot');
  });

  it('shows the deal-list empty state when no products have a discount', () => {
    products.set([
      {
        id: 1,
        name: 'Full Price Robot',
        description: 'A full price robot',
        imageName: 'full-price.png',
        category: 'Robots',
        price: 50,
        discount: 0
      }
    ]);

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No deals today');
  });
});
