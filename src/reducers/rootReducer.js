import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import newsReducer from './newsReducer';
export default combineReducers({
 simpleReducer,
 newsReducer
});