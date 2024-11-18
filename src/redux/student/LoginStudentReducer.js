import {LOGIN_STUDENT_REQUEST,LOGIN_STUDENT_SUCCESS,LOGIN_STUDENT_ERROR} from "./LoginStudentTypes";

const initialState = {
    loading:false,
    data:{username:"",password:""},
    error:""
}

const LoginStudentReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_STUDENT_REQUEST:
            return {...state,loading:true}
        case LOGIN_STUDENT_SUCCESS:
            return {...state,loading:false,data:action.payload,error:""}
        case LOGIN_STUDENT_ERROR:
            return {...state,loading:false,data:[],error:action.payload}
        default:
            return state
    }
}

export default LoginStudentReducer