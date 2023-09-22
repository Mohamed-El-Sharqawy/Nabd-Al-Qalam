import { createSlice } from "@reduxjs/toolkit";

const initialState = { lang: localStorage.getItem("lang") };

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    switchLang: (state) => {
      if (state.lang === "en") {
        state.lang = "ar";
        localStorage.setItem("lang", "ar");
      } else {
        state.lang = "en";
        localStorage.setItem("lang", "en");
      }
    },
  },
});

export const { switchLang } = langSlice.actions;

export default langSlice.reducer;
