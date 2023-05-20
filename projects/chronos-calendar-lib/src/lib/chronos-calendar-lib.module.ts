import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChCalendarComponent } from './components/ch-calendar/ch-calendar.component';
import { ChMonthComponent } from './components/ch-month/ch-month.component';
import { ChDayComponent } from './components/ch-day/ch-day.component';
import { ChCalendarHeaderComponent } from './components/ch-calendar-header/ch-calendar-header.component';
import { FormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

const CH_COMPONENTS = [
  ChCalendarHeaderComponent,
  ChCalendarComponent,
  ChMonthComponent,
  ChDayComponent,
]

@NgModule({
  declarations: [
    ...CH_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    ...CH_COMPONENTS
  ]
})
export class ChronosCalendarLibModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
    library.addIconPacks(fas);
    library.addIconPacks(far);
  }
}
