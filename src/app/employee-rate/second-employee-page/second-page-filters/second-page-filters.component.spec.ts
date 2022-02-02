import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageFiltersComponent } from './second-page-filters.component';

describe('SecondPageFiltersComponent', () => {
  let component: SecondPageFiltersComponent;
  let fixture: ComponentFixture<SecondPageFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPageFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
