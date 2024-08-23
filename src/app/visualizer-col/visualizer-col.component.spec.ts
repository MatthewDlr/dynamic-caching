import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizerColComponent } from './visualizer-col.component';

describe('VisualizerColComponent', () => {
  let component: VisualizerColComponent;
  let fixture: ComponentFixture<VisualizerColComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizerColComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizerColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
