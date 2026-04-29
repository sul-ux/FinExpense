import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthelyReport } from './monthely-report';

describe('MonthelyReport', () => {
  let component: MonthelyReport;
  let fixture: ComponentFixture<MonthelyReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthelyReport],
    }).compileComponents();

    fixture = TestBed.createComponent(MonthelyReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
