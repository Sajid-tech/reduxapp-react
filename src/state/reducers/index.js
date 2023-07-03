//if we have one reducer and more than reducer than we use this import make an index.js file and write this syntx

import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount: amountReducer
    // if you have more than one reducer fuction just add commas in last fuction and add as much you have the reducers
})

export default reducers;