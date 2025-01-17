import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
  },
  reducers: {
    updateUser: (state, action) =>
      (state = action.payload ? action.payload : {}),
  },
});

export const userDataActions = userDataSlice.actions;
export default userDataSlice;
