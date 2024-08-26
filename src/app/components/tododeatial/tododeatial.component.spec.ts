import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododeatialComponent } from './tododeatial.component';

describe('TododeatialComponent', () => {
  let component: TododeatialComponent;
  let fixture: ComponentFixture<TododeatialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TododeatialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododeatialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
