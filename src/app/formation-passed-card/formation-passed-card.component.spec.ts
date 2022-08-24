import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPassedCardComponent } from './formation-passed-card.component';

describe('FormationPassedCardComponent', () => {
  let component: FormationPassedCardComponent;
  let fixture: ComponentFixture<FormationPassedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationPassedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationPassedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
