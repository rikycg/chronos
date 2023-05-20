import { format } from "date-fns";

export class MonthCalendar {
  name = '';
  monthNumber = 0;
  yearNumber = 0;
  weeks: WeekCalendar[] = [];

  constructor(monthNumber: number = 1, yearNumber: number = new Date().getFullYear()) {
    this.name = format(new Date(yearNumber, monthNumber), 'MMMM');
    this.monthNumber = monthNumber;
    this.yearNumber = yearNumber;
  }
}

export class WeekCalendar {
  days: DayCalendar[] = [];

  constructor(days: DayCalendar[] = []) {
    this.days = days;
  }
}

export class DayCalendar {
  name = '';
  date = '';
  dayOfMonth = 0;
  events: EventCalendar[] = [];

  constructor(name: string, date: string, dayofMonth: number, events: EventCalendar[] = []) {
    this.name = name;
    this.date = date;
    this.events = events;
    this.dayOfMonth = dayofMonth;
  }
}

export class EventCalendar {
  datetime = '';
  name = '';
  color = '';

  constructor(datetime: string, name: string, color: string) {
    this.datetime = datetime;
    this.name = name;
    this.color = color;
  }
}