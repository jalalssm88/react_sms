import {CREATE_SECTION, GET_SECTION} from '../actions/types';

const initialState = {
    sections:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_SECTION:
            return{
                ...state,
                sections:[action.payload, ...state.sections]
            }
        case GET_SECTION:
            return{
                ...state,
                sections:action.payload
            }
        default:
            return{
                ...state
            }
    }
}