import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IProduct } from '../product.model';
import { DealListComponent } from './deal-list.component';

describe('DealListComponent', () => {
  let component: DealListComponent;
  let fixture: ComponentFixture<DealListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DealListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('products', []);

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('shows an empty state when there are no deals', () => {
    fixture.componentRef.setInput('products', []);

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No deals today');
  });

  it('shows product names and both prices', () => {
    const product: IProduct = {
      id: 1,
      name: 'Robot Arm',
      description: 'A useful arm',
      imageName: 'arm.png',
      category: 'Arms',
      price: 100,
      discount: 0.2
    };
    fixture.componentRef.setInput('products', [product]);

    fixture.detectChanges();

    const content = fixture.nativeElement.textContent;
    expect(content).toContain('Robot Arm');
    expect(content).toContain('Original price: $100.00');
    expect(content).toContain('Discounted price: $80.00');
  });
});
