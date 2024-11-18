import {GET_STUDENT,GET_STUDENT_SUCCESS,GET_STUDENT_ERROR} from './StudentType'

const initalState = {
    loading:false,
    error:"",
    data:[]
}

const StudentReducer = (state=initalState,action)=>{
    switch(action.type){
        case GET_STUDENT:
            return {...state,loading:true};
        case GET_STUDENT_SUCCESS:
            return{...state,loading:false,data:action.payload};
        case GET_STUDENT_ERROR:
            return {...state,loading:false, data:[],error:action.payload}
        default:
            return state
    }
} 

export default StudentReducer

