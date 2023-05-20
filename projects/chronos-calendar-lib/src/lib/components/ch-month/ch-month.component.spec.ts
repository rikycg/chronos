import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChMonthComponent } from './ch-month.component';

describe('ChMonthComponent', () => {
  let component: ChMonthComponent;
  let fixture: ComponentFixture<ChMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
