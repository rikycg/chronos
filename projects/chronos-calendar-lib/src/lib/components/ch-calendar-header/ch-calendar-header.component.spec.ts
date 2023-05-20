import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChCalendarHeaderComponent } from './ch-calendar-header.component';

describe('ChCalendarHeaderComponent', () => {
  let component: ChCalendarHeaderComponent;
  let fixture: ComponentFixture<ChCalendarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChCalendarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChCalendarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
