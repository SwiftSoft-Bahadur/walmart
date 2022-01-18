import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDepartmentsComponent } from './popular-departments.component';

describe('PopularDepartmentsComponent', () => {
  let component: PopularDepartmentsComponent;
  let fixture: ComponentFixture<PopularDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDepartmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
