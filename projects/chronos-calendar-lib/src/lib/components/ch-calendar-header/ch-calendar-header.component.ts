import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, computed, signal } from '@angular/core';

import { createMonthList } from '../../utils/calendar.utils';
import { MonthCalendar } from '../../models/calendar.models';

@Component({
  selector: 'ch-calendar-header',
  templateUrl: './ch-calendar-header.component.html',
  styleUrls: ['./ch-calendar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChCalendarHeaderComponent implements OnInit {
  @Input({ alias: 'ini-month' }) initMonth: number = new Date().getMonth();
  @Input({ alias: 'ini-year' }) initYear: number = new Date().getFullYear();

  @Output() onMonthChanged = new EventEmitter<any>();
  @Output() onYearChanged = new EventEmitter<number>();

  indexMonthSelected = signal(0);
  months: MonthCalendar[] = createMonthList();
  yearSelected: number = new Date().getFullYear();
  yearOptions: number[] = [2021, 2022, 2023, 2024, 2025];
  monthSelected = computed(() => this.months[this.indexMonthSelected()]);
  isFirstMonth = computed(() => this.indexMonthSelected() === 0);
  isLastMonth = computed(() => this.indexMonthSelected() === this.months.length - 1);

  constructor() { }

  ngOnInit(): void {
    this.setDefaultValues();
  }

  setDefaultValues() {
    this.indexMonthSelected.set(this.months.findIndex(m => m.monthNumber === this.initMonth));
    this.yearSelected = this.initYear;
  }

  nextMonth() {
    if (this.isLastMonth()) {
      return;
    }

    this.indexMonthSelected.set(this.indexMonthSelected() + 1);
    this.onMonthChanged.emit(this.monthSelected());
  }

  prevMonth() {
    if (this.isFirstMonth()) {
      return;
    }

    this.indexMonthSelected.set(this.indexMonthSelected() - 1);
    this.onMonthChanged.emit(this.monthSelected());
  }

  onYearSelectorChanged() {
    this.onYearChanged.emit(Number(this.yearSelected));
  }
}
