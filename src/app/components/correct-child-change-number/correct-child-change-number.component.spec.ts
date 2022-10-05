import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectChildChangeNumberComponent } from './correct-child-change-number.component';

describe('CorrectChildChangeNumberComponent', () => {
  let component: CorrectChildChangeNumberComponent;
  let fixture: ComponentFixture<CorrectChildChangeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectChildChangeNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrectChildChangeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
