import {combineReducers} from 'redux';
import campusReducer from './campusReducer';
import programRducer from './programReducer';
import sectionReducer from './sectionReducer';
import sessionReducer from './sessionReducer';
import courserReducer from './courseReducer';

export default combineReducers({
    campus: campusReducer,
    program: programRducer,
    section: sectionReducer,
    session: sessionReducer,
    course: courserReducer
})