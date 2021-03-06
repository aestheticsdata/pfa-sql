import { RootState } from "@src/store";
import { SpendingsType, ReccuringType } from "./types";
import { User } from "@src/commonTypes";
import { useSelector } from "react-redux";


interface spendingsSelectorHelperType {
  user: User;
  spendings: SpendingsType;
  recurrings: ReccuringType;
  isLoading: boolean;
  dateRange: any;
}

const useSpendingsSelectorHelper: () => spendingsSelectorHelperType = () => {
  const userSelector = (state: RootState): User => state.loginReducer.user;

  const spendingsSelector = (state: RootState): SpendingsType => state.spendingsReducer.spendings as SpendingsType;
  const recurringsSelector = (state: RootState) => state.spendingsReducer.recurrings;
  const isLoadingSelector = (state: RootState): boolean => state.spendingsReducer.isLoading;

  const dateRangeSelector = (state: RootState) => state.dateRangeReducer.dateRange;

  const user: User = useSelector(userSelector);
  const spendings: SpendingsType = useSelector(spendingsSelector);
  const recurrings: any = useSelector(recurringsSelector);
  const isLoading: boolean = useSelector(isLoadingSelector);
  const dateRange: any = useSelector(dateRangeSelector);

  return {
    user,
    spendings,
    recurrings,
    isLoading,
    dateRange,
  };
}

export default useSpendingsSelectorHelper;
