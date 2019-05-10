import {CREATE_CAMPUS, GET_CAMPUS} from '../actions/types';

const initialState = {}

export default function(state = initialState, action){
    switch(action.type){
        default:
            return{
                ...state
            }
    }
}