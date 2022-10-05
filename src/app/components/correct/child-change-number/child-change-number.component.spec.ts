import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildChangeNumberComponent } from './child-change-number.component';

describe('ChildChangeNumberComponent', () => {
  let component: ChildChangeNumberComponent;
  let fixture: ComponentFixture<ChildChangeNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildChangeNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildChangeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
