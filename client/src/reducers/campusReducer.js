import {CREATE_CAMPUS, GET_CAMPUS, VIEW_CAMPUS} from '../actions/types';

const initialState = {
    campuses:[],
    campus:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_CAMPUS:
            return{
                ...state,
                campuses:[action.payload, ...state.campuses]
            }
        case GET_CAMPUS:
            return{
                ...state,
                campuses:action.payload
            }
        case VIEW_CAMPUS:
            return{
                ...state,
                campus:action.payload
            }
        default:
            return{
                ...state
            }
    }
}