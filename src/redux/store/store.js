import { configureStore } from "@reduxjs/toolkit";
import costumerSlice from "../slices/costumer";
import accountSlice from "../slices/account";

export const store = configureStore({
  reducer: {
    customer: costumerSlice,
    account: accountSlice,
  },
});
