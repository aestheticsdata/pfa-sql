import localesDates from '../../i18n/locales-dates';

export interface WeekRange {
  from: Date;
  to: Date;
}

// any should be replaced by Locale which is a date-fns type, but for a mysterious reason
// it does not work, maybe a conflict with Locale type defined elsewhere
export interface LocaleObject {
  [k: string]: any;
  formatString: string;
}

export type LocalesObject = { [k: string]: LocaleObject };

export type HoverRange =
  | {
    from: Date;
    to: Date;
  }
  | null;

export type Days = Date[];

export type LangKeys = keyof typeof localesDates;
