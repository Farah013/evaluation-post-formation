import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTechComponent } from './evaluation-tech.component';

describe('EvaluationTechComponent', () => {
  let component: EvaluationTechComponent;
  let fixture: ComponentFixture<EvaluationTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
