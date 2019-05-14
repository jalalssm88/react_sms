import {CREATE_PROGRAM, GET_PROGRAM} from '../actions/types';

const initialState = {
    programs:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_PROGRAM:
            return{
                ...state,
                programs:[action.payload, ...state.programs]
            }
        case GET_PROGRAM:
            return{
                ...state,
                programs:action.payload
            }
        default:
            return{
                ...state
            }
    }
}