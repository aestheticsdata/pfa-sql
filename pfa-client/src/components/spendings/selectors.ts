import { createSelector } from 'reselect';
import { RootState } from "../../store";
import {SpendingsType} from "./types";
import { User } from "../../commonTypes";


export const userSelector = (state: RootState): User => state.loginReducer.user;

export const spendingsSelector = (state: RootState): SpendingsType => state.spendingsReducer.spendings as SpendingsType;
export const recurringsSelector = (state: RootState) => state.spendingsReducer.recurrings;
export const isLoadingSelector = (state: RootState): boolean => state.spendingsReducer.isLoading;

export const dateRangeSelector = (state: RootState) => state.dateRangeReducer.dateRange;
