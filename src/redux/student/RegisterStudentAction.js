import {REGISTER_STUDENT_REQUEST,REGISTER_STUDENT_SUCCESS,REGISTER_STUDENT_ERROR} from './RegisterStudentType'
import axios from 'axios'

const fetchRegisterStudent = ()=>{
    return{
        type:REGISTER_STUDENT_REQUEST
    }
}
const fetchRegisterStudentSuccess = (data)=>{
    return{
        type:REGISTER_STUDENT_SUCCESS,
        payload:data
    }
}
const fetchRegisterStudentError = (error)=>{
    return{
        type:REGISTER_STUDENT_ERROR,
        payload:error
    }
}

export const registerStudent = (data)=>{
    return(dispatch)=>{
        dispatch(fetchRegisterStudent())
        axios.post('http://localhost:8000/api/register/student',data)
        .then((response)=>{
            dispatch(fetchRegisterStudentSuccess(response.data))
        })
        .catch((error)=>{
            dispatch(fetchRegisterStudentError(error.message))
        })
    }
}