import {GET_STUDENT,GET_STUDENT_SUCCESS,GET_STUDENT_ERROR} from './StudentType'
import axios from 'axios'

const fetchStudent = ()=>{
    return{
        type:GET_STUDENT
    }
}

const fetchStudentSuccess = (data)=>{
    return{
        type:GET_STUDENT_SUCCESS,
        payload:data
    }
}

const fetchStudentError = (error)=>{
    return{
        type:GET_STUDENT_ERROR,
        payload:error
    }
}

export const fetchAllstudent = ()=>{
    return (dispatch)=>{
        dispatch(fetchStudent())
        axios.get("http://localhost:8000/api/allStudent")
        .then(response=>{
            dispatch(fetchStudentSuccess(response.data))
            console.log(response);
        })
        .catch(error =>{
            dispatch(fetchStudentError(error))
        })
    }
}