import {CREATE_PROGRAM, GET_PROGRAM, GET_PROGRAMS} from '../actions/types';

const initialState = {
    programs:[],
    all_program:[]
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
        case GET_PROGRAMS:
        console.log('all program', action.payload)
            return{
                ...state,
                all_program:action.payload
            }
        default:
            return{
                ...state,
            }
    }
}