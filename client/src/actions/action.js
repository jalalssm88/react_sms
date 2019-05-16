import {CREATE_CAMPUS, GET_CAMPUS, CREATE_PROGRAM, GET_PROGRAM, CREATE_SECTION,
 GET_SECTION, CREATE_SESSION, GET_SESSION, CREATE_COURSE, GET_COURSE, GET_PROGRAMS,
 } from './types';
import axios from 'axios';

//campus actions
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

//program actions
export const createProgram = (programData, history, progs_id)=> dispatch =>{
    axios.post('/program/create',programData).then(res => dispatch({
        type:CREATE_PROGRAM,
        payload:res.data
    })).then(res => history.push('/programs/campus/'+progs_id));
}
export const getProgram = (prog_id)=> dispatch =>{
    axios.get('/program/list/'+prog_id).then(res => dispatch({
        type:GET_PROGRAM,
        payload:res.data
    }))
}

export const getPrograms = ()=> dispatch =>{
    axios.get('/program/lists/').then(res => dispatch({
        type:GET_PROGRAMS,
        payload:res.data
    }))
}


//section actions
export const createSection = (sectionData)=> dispatch =>{
    axios.post('/section/create',sectionData).then(res => dispatch({
        type:CREATE_SECTION,
        payload:res.data
    }))
}
export const getSection = (sect_id)=> dispatch =>{
    axios.get('/section/list/'+sect_id).then(res => dispatch({
        type:GET_SECTION,
        payload:res.data
    }))
}


//session actions
export const createSession = (sessionData)=> dispatch =>{
    axios.post('/session/create',sessionData).then(res => dispatch({
        type:CREATE_SESSION,
        payload:res.data
    }))
}
export const getSession = ()=> dispatch =>{
    axios.get('/session/list').then(res => dispatch({
        type:GET_SESSION,
        payload:res.data
    }))
}


//course actions
export const createCourse = (courseData, history)=> dispatch =>{
    axios.post('/course/create',courseData).then(res => dispatch({
        type:CREATE_COURSE,
        payload:res.data
    })).then(res => history.push('/courses/list'));
}

export const getCourse = ()=> dispatch =>{
    axios.get('/course/list').then(res => dispatch({
        type:GET_COURSE,
        payload:res.data
    }))
}



