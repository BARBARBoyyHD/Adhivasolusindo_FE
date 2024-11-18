import { LOGIN_STUDENT_REQUEST, LOGIN_STUDENT_SUCCESS, LOGIN_STUDENT_ERROR } from "./LoginStudentTypes";
import axios from "axios";
const fetchLoginStudentRequest = () => {
    return {
        type: LOGIN_STUDENT_REQUEST,
    };
};

const fetchLoginStudentSuccess = (data) => {
    return {
        type: LOGIN_STUDENT_SUCCESS,
        payload: data,
    };
};

const fetchLoginStudentError = (error) => {
    return {
        type: LOGIN_STUDENT_ERROR,
        payload: error,
    };
};



export const fetchLoginStudent = (data) => {
    
    return (dispatch) => {
        dispatch(fetchLoginStudentRequest());
        axios.post("http://localhost:8000/api/login/student", data, { withCredentials: true }) // Include withCredentials
            .then((response) => {
                dispatch(fetchLoginStudentSuccess(response.data));
                console.log(response);
            })
            .catch((error) => {
                const errorMessage = error.response ? error.response.data.message : error.message; // Extract error message
                dispatch(fetchLoginStudentError(errorMessage));
                console.log(error);
            });
    };
};