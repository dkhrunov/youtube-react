import { combineReducers } from 'redux';
import apiReducer from './api';

export default combineReducers({
    api: apiReducer,
})