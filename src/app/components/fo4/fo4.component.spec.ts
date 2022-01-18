import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FO4Component } from './fo4.component';

describe('FO4Component', () => {
  let component: FO4Component;
  let fixture: ComponentFixture<FO4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FO4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FO4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
