import todoReducer from './todos/reducer';
import filterReducer from './filter/reducer';
import { combineReducers } from 'redux';

const rootReducer  = combineReducers({
    todos : todoReducer,
    filters: filterReducer
});

export default rootReducer;