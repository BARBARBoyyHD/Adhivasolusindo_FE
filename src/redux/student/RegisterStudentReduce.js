import {REGISTER_STUDENT_REQUEST,REGISTER_STUDENT_SUCCESS,REGISTER_STUDENT_ERROR} from './RegisterStudentType'

const initalState={
    loading:false,
    error:"",
    data:{
        username:"",
        password:"",
        studentName:""
    }
}

const registerStudentReducer = (state=initalState,action)=>{
    switch(action.type){
        case REGISTER_STUDENT_REQUEST:
            return {...state,loading:true}
        case REGISTER_STUDENT_SUCCESS:
            return {...state,loading:false,data:action.payload,error:""}
        case REGISTER_STUDENT_ERROR:
            return {...state,loading:false,data:[],error:action.payload}
        default:
            return state
    }
}
export default registerStudentReducer;