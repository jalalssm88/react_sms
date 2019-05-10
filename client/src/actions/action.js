import {CREATE_CAMPUS, GET_CAMPUS} from './types';
import axios from 'axios';

export const createCampus = (campusData)=> dispatch =>{
    axios.post('/campus/create',campusData).then(res => dispatch({
        type:CREATE_CAMPUS,
        payload:res.data
    }))
}
export const getCampus = ()=> dispatch =>{
    axios.post('/campus/create').then(res => dispatch({
        type:GET_CAMPUS,
        payload:res.data
    }))
}
