import { LangKeys } from "./helpers/types";

export interface User {
  baseCurrency: string;
  email: string;
  id: string;
  language: LangKeys;
  name: string;
}
