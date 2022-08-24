import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCompComponent } from './evaluation-comp.component';

describe('EvaluationCompComponent', () => {
  let component: EvaluationCompComponent;
  let fixture: ComponentFixture<EvaluationCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
