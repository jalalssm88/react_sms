import {CREATE_SESSION, GET_SESSION} from '../actions/types';

const initialState = {
    sessions:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_SESSION:
            return{
                ...state,
                sessions:[action.payload, ...state.sessions]
            }
        case GET_SESSION:
            return{
                ...state,
                sessions:action.payload
            }
        default:
            return{
                ...state
            }
    }
}