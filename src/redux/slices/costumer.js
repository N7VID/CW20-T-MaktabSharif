import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  userId: "",
};

const costumerSlice = createSlice({
  name: "costumer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.fullName = action.payload.fullName;
      state.userId = action.payload.userId;
    },
  },
});

export const { addCustomer } = costumerSlice.actions;
export default costumerSlice.reducer;
