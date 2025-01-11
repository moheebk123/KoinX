import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme";
import alertSlice from "./alert";
import userDataSlice from "./userData";
import { themeActions } from "./theme";
import { alertActions } from "./alert";
import { userDataActions } from "./userData";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    showAlert: alertSlice.reducer,
    userData: userDataSlice.reducer,
  },
});

export { themeActions, alertActions, userDataActions };
