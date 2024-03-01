// redux toolkit
import { configureStore } from '@reduxjs/toolkit';
// redux
import { createStore, combineReducers } from 'redux';
// import { otherReducer } from './reducers/otherReducer';

import counterReducer from '../screens/counter/counterSlice';
import calculatorReducer from "../screens/calculator/features/calculator/calculatorSlice";
import weatherReducer from "../screens/weather/features/weather/WeatherSlice";
import cityReducer from "../screens/weather/features/city/citySlice";
import ArticlesReducer from './Articles';

const traditionalStore = createStore(
    combineReducers({
        articles: ArticlesReducer,
    }),
);

const reduxToolkitStore = configureStore({
    reducer: {
        counter: counterReducer,
        calculator: calculatorReducer,
        city: cityReducer,
        weather: weatherReducer,
    },
});

export { traditionalStore, reduxToolkitStore };
export default traditionalStore;
// export default reduxToolkitStore;