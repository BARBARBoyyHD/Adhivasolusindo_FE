import {
    REGISTER_PEMATERI_REQUEST,
    REGISTER_PEMATERI_SUCCESS,
    REGISTER_PEMATERI_ERROR,
  } from "./RegisterPemateriType";

const initialState = {
    loading:false,
    data:{
        username:"",
        password:"",
        pemateriName:""
    },
    error:null
}

const RegisterPemateriReducer = (state=initialState,action)=>{
    switch(action.type){
        case REGISTER_PEMATERI_REQUEST:
            return {...state,loading:true}
        case REGISTER_PEMATERI_SUCCESS:
            return {...state,loading:false,data:action.payload,error:""}
        case REGISTER_PEMATERI_ERROR:
            return {...state,loading:false,data:[],error:action.payload}
        default:
            return state
    }
}

export default RegisterPemateriReducer