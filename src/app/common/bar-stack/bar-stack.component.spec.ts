import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStackComponent } from './bar-stack.component';

describe('BarStackComponent', () => {
  let component: BarStackComponent;
  let fixture: ComponentFixture<BarStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
