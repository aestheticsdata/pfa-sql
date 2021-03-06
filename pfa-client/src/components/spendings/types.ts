import { User } from "@src/commonTypes";

export type Month =
  | { start: Date; end: Date; }
  | null;


export type ReccuringType = {
  amount: number;
  createdAt: string;
  createdBy: string;
  currency: string;
  dateFrom: string;
  dateTo: string;
  itemType: string;
  label: string;
  updatedAt: string;
  __v: number;
  _id?: number;
};

export type SpendingType = {
  amount: number;
  catID: number;
  category: string;
  createdAt: string;
  createdBy: string;
  currency: string;
  date: string;
  itemType: string;
  label: string;
  updatedAt: string;
  __v: number;
  _id?: number;
};

export type SpendingCompoundType = [SpendingType] & {
  _id: string;
  date: number;
  total : number
};

export type SpendingsType = Array<SpendingCompoundType> & { weekTotal?: number };

interface SpendingsPartial {
  spendingsByDay: SpendingCompoundType;
  deleteSpending: (itemID: string, itemType: string) => void;
  isLoading: boolean;
}

export interface SpendingDayItemType extends SpendingsPartial {
  user: User;
  month?: string | null;
  date?: number | Date;
  recurringType?: boolean;
  total?: number;
}

export interface SpendingsListContainerType extends SpendingsPartial {
  toggleAddSpending: () => void;
  editSpending: (spending: SpendingCompoundType) => void;
}

