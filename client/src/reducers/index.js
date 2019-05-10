import {combineReducers} from 'redux';
import campusReducer from './campusReducer';

export default combineReducers({
    campus: campusReducer
})