import {CREATE_CAMPUS, GET_CAMPUS, VIEW_CAMPUS, CREATE_PROGRAM, GET_PROGRAM} from './types';
import axios from 'axios';

export const createCampus = (campusData, history)=> dispatch =>{
    axios.post('/campus/create',campusData).then(res => dispatch({
        type:CREATE_CAMPUS,
        payload:res.data
    })).then(res => history.push('/campuses/list'));
}
export const getCampus = ()=> dispatch =>{
    axios.get('/campus/list').then(res => dispatch({
        type:GET_CAMPUS,
        payload:res.data
    }))
}
export const campusView = (campus_id)=> dispatch =>{
    axios.get(`/campus/list/${campus_id}`).then(res => dispatch({
        type:VIEW_CAMPUS,
        payload:res.data
    }))
}

export const createProgram = (programData, history, progs_id)=> dispatch =>{
    axios.post('/program/create',programData).then(res => dispatch({
        type:CREATE_PROGRAM,
        payload:res.data
    }))
}

export const getProgram = (prog_id)=> dispatch =>{
    axios.get('/program/list'+prog_id).then(res => dispatch({
        type:GET_PROGRAM,
        payload:res.data
    }))
}
