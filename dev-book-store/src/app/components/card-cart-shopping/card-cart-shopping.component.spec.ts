import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCartShoppingComponent } from './card-cart-shopping.component';

describe('CardCartShoppingComponent', () => {
  let component: CardCartShoppingComponent;
  let fixture: ComponentFixture<CardCartShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCartShoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCartShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
