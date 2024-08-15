import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPerpuse: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += Number(action.payload);
    },
  },
});

export const { deposit } = accountSlice.actions;
export default accountSlice.reducer;
