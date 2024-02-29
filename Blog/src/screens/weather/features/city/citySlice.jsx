import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: "",
  listCity: [],
};

export const getAutoComplName = (char) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/search.json?key=dee90916742f4874966125649220706&q=${char}`
    );
    dispatch(getAutoName(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getCityName: (state, action) => {
      state.name = action.payload;
    },

    getAutoName: (state, action) => {
      state.listCity = action.payload;
    },
  },
});

export const { getCityName, getAutoName } = citySlice.actions;
export const selectCount = (state) => state.city.value;

export default citySlice.reducer;
