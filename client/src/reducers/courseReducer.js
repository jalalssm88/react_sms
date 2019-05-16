import {CREATE_COURSE, GET_COURSE} from '../actions/types';

const initialState = {
    courses:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_COURSE:
            return{
                ...state,
                courses:[action.payload, ...state.courses]
            }
        case GET_COURSE:
            return{
                ...state,
                courses:action.payload
            }
        default:
            return{
                ...state
            }
    }
}