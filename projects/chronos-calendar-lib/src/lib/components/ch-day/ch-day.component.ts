import { Component, Input } from '@angular/core';

import { DayCalendar } from '../../models/calendar.models';

@Component({
  selector: 'ch-day',
  templateUrl: './ch-day.component.html',
  styleUrls: ['./ch-day.component.scss'],
})
export class ChDayComponent {
  @Input() day!: DayCalendar;
}
