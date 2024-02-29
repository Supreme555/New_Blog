import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  futureData: [],
  loading: false,
  hasError: false,
};

export const getDataAsync = (cityName) => async (dispatch) => {
  dispatch(getData());
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=dee90916742f4874966125649220706&q=${cityName}`
    );
    dispatch(getDataSuccess(response.data));
  } catch (error) {
    dispatch(getDataFailure(error));
  }
};

export const getFutureDataAsync = (cityName) => async (dispatch) => {
  dispatch(getData());
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=dee90916742f4874966125649220706&q=${cityName}`
    );
    dispatch(getDataSuccess(response.data));
  } catch (error) {
    dispatch(getDataFailure(error));
  }
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,

  reducers: {
    getData: (state) => {
      state.loading = true;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getDataFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getData, getDataSuccess, getDataFailure } = weatherSlice.actions;
export const selectCount = (state) => state.weather;

export default weatherSlice.reducer;
