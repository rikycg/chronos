import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChDayComponent } from './ch-day.component';

describe('ChDayComponent', () => {
  let component: ChDayComponent;
  let fixture: ComponentFixture<ChDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
