import { createSlice } from "@reduxjs/toolkit";

const initialState = { lang: "en" };

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    switchLang: (state) => {
      if (state.lang === "en") state.lang = "ar";
      else state.lang = "en";
    },
  },
});

export const { switchLang } = langSlice.actions;

export default langSlice.reducer;
