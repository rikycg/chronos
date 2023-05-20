import { endOfMonth, startOfMonth, eachDayOfInterval, format } from 'date-fns';

import { MonthCalendar, WeekCalendar, DayCalendar } from '../models/calendar.models';

export const createMonth = (monthNumber: number, yearNumber: number): MonthCalendar => {
  const date = new Date(yearNumber, monthNumber);
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const daysOfMonth = eachDayOfInterval({ start, end });
  const month = new MonthCalendar(monthNumber, yearNumber);

  month.name = format(date, 'MMMM');

  let week = new WeekCalendar();

  for (let day of daysOfMonth) {
    const dayName = format(day, 'EEEE');
    const dayDate = format(day, 'yyyy-MM-dd');
    const dayCalendar = new DayCalendar(dayName, dayDate, day.getDate(), []);

    week.days[day.getDay()] = dayCalendar;

    const isEndOfMonth = day.getDate() === end.getDate();
    const isEndOfWeek = day.getDay() === 6;
    
    if (isEndOfWeek || isEndOfMonth) {
      month.weeks.push(week);

      week = new WeekCalendar();
      week.days = new Array(7).fill(null);
    }
  }

  return month;
}

export const createMonthList = (): MonthCalendar[] => {
  const months: MonthCalendar[] = [];

  for (let i = 0; i < 12; i++) {
    const month = new MonthCalendar(i);

    months.push(month);
  }

  return months;
}