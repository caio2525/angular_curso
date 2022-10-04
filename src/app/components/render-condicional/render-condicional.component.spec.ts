import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCondicionalComponent } from './render-condicional.component';

describe('RenderCondicionalComponent', () => {
  let component: RenderCondicionalComponent;
  let fixture: ComponentFixture<RenderCondicionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderCondicionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderCondicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
