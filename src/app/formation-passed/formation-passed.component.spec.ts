import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPassedComponent } from './formation-passed.component';

describe('FormationPassedComponent', () => {
  let component: FormationPassedComponent;
  let fixture: ComponentFixture<FormationPassedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationPassedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationPassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
