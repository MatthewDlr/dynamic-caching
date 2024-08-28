import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGradientComponent } from './dynamic-gradient.component';

describe('DynamicGradientComponent', () => {
  let component: DynamicGradientComponent;
  let fixture: ComponentFixture<DynamicGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicGradientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
