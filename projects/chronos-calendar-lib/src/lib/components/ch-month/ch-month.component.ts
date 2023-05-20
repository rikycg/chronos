import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { MonthCalendar } from '../../models/calendar.models';
import { createMonth } from '../../utils/calendar.utils';

@Component({
  selector: 'ch-month',
  templateUrl: './ch-month.component.html',
  styleUrls: ['./ch-month.component.scss'],
})
export class ChMonthComponent implements OnInit, OnChanges {
  @Input() month: number = 1;
  @Input() year: number = 1;

  monthCalendar: MonthCalendar = new MonthCalendar();

  constructor() { }

  ngOnInit(): void {
    this.setMonth(this.month, this.year);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['month'] || changes['year']) {
      this.setMonth(this.month, this.year);
    }
  }

  setMonth(month: number, year: number): void {
    this.monthCalendar = createMonth(month, year);
  }
}