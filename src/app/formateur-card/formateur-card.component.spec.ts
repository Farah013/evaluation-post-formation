import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurCardComponent } from './formateur-card.component';

describe('FormateurCardComponent', () => {
  let component: FormateurCardComponent;
  let fixture: ComponentFixture<FormateurCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateurCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
