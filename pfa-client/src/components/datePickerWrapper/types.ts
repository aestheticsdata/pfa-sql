import {fr} from "date-fns/locale";

export interface WeekRange {
  from: Date;
  to: Date;
}

// any should be replaced by Locale which is a date-fns type, but for a mysterious reason
// it does not work, maybe a conflict with Locale type defined elsewhere
export interface LocaleObject {
  [k: string]: any;
  formatString: string;
};

export type LocalesObject = { [k: string]: LocaleObject };
