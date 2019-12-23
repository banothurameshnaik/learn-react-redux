import { combineReducers } from 'redux';

// Import all reducers here
import { counterReducer } from "./counter";
import { authReducer } from './auth';

const allReducers = combineReducers({
    visitCount: counterReducer,
    isLogged: authReducer,
});

export default allReducers;