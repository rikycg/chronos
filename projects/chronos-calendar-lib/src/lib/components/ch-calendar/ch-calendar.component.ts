import { Component, Input, OnInit } from '@angular/core';

import { MonthCalendar } from '../../models/calendar.models';

@Component({
  selector: 'ch-calendar',
  templateUrl: './ch-calendar.component.html',
  styleUrls: ['./ch-calendar.component.scss']
})
export class ChCalendarComponent implements OnInit {
  @Input({ alias: 'init-date' }) initDate: string = '';

  currentDate = new Date();
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    this.setDefaultDateSelected();
  }

  setDefaultDateSelected() {
    if (this.initDate) {
      this.currentMonth = new Date(this.initDate).getMonth();
    }
  }

  onMonthChanged(month: MonthCalendar) {
    this.currentMonth = month.monthNumber;
  }

  onYearChanged(year: number) {
    this.currentYear = year;
  }
}
