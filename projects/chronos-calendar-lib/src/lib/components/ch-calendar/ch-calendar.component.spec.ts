import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChCalendarComponent } from './ch-calendar.component';

describe('ChCalendarComponent', () => {
  let component: ChCalendarComponent;
  let fixture: ComponentFixture<ChCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
