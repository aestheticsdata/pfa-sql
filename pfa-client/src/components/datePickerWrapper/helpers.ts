import {WeekRange, LocalesObject, LangKeys} from "./types";

import addDays from 'date-fns/addDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import subDays from 'date-fns/subDays';
import startOfMonth from 'date-fns/startOfMonth';
import isSameMonth from 'date-fns/isSameMonth';
import getDate from 'date-fns/getDate';
import getDay from 'date-fns/getDay';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';
import setHours from 'date-fns/setHours';
import format from "date-fns/format";
import fr from "date-fns/locale/fr";
import en from "date-fns/locale/en-US";
import Cookie from "js-cookie";



export const getWeekDays = (weekStart: Date, date: Date): Date[] => {
  const days: Date[] = [weekStart];

  if (!isSameMonth(startOfWeek(date), date) || !isSameMonth(endOfWeek(date), date)) {
    if (getDate(date) > 15) {
      for (let i = 1; i <= getDay(lastDayOfMonth(date)); i += 1) {
        days.push(addDays(weekStart, i));
      }
    } else {
      for (let i = 1; i <= (6-getDay(weekStart)); i += 1) {
        days.push(addDays(weekStart, i));
      }
    }
  } else {
    for (let i = 1; i < 7; i += 1) {
      days.push(addDays(weekStart, i));
    }
  }

  return days;
};

export const getWeekRange = (date: Date): WeekRange => {
  let dateRange: WeekRange;

  if (!isSameMonth(startOfWeek(date), date) || !isSameMonth(endOfWeek(date), date)) {
    if (getDate(date) > 15) {
      dateRange = {
        // setHours force the 'from" to be at midnight and not noon
        from: setHours(subDays(date, getDay(date)), 0),
        to: lastDayOfMonth(date),
      };
    } else {
      dateRange = {
        from: startOfMonth(date),
        to: endOfWeek(date),
      };
    }
  } else {
    dateRange = {
      from: startOfWeek(date),
      to: endOfWeek(date),
    };
  }

  return dateRange;
};


const locales: LocalesObject = {
  'fr': {
    fr,
    formatString: 'dd MMM yyyy',
  },
  'en': {
    en,
    formatString: 'MMM do y',
  },
};

export const getFormattedDate = (date: Date, lang: string): string => {
  return format(date, locales[lang].formatString, { locale: locales[lang][lang] });
};

export const getLang = ():LangKeys => {
  return Cookie.get('lang') as LangKeys ?? 'en';
}
