export type Month =
  | { start: Date; end: Date; }
  | null;


export type Spending = [{
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
  _id: string;
}?] & {
  date: number;
  total: number
};

export type SpendingsType = Array<Spending> & { weekTotal?: number };
