import {combineReducers} from 'redux';
import campusReducer from './campusReducer';
import programRducer from './programReducer';

export default combineReducers({
    campus: campusReducer,
    program: programRducer
})