import { createContext } from "react";

export const globalContext = {
  displayDatePicker: true,
};

const GlobalContext = createContext();

export default GlobalContext;
