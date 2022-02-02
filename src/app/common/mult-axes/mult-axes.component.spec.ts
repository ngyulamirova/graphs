import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultAxesComponent } from './mult-axes.component';

describe('MultAxesComponent', () => {
  let component: MultAxesComponent;
  let fixture: ComponentFixture<MultAxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultAxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
