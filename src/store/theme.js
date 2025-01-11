import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light",
  reducers: {
    toggleTheme: (state) => (state = state === "light" ? "dark" : "light"),
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
