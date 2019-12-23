import { combineReducers } from 'redux';

// Import all reducers here
import { counterReducer } from "./counter";

const allReducers = combineReducers({
    visitCount: counterReducer,
});

export default allReducers;