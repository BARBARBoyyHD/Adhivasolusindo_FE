import {FETCH_MATERI_REQUEST ,FETCH_MATERI_SUCCESS, FETCH_MATERI_ERROR} from './AllMateriType'

const initialState = {
    loading:false,
    data:[],
    error:""
}

const AllMateriReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_MATERI_REQUEST:
            return {...state,loading:true}
        case FETCH_MATERI_SUCCESS:
            return {...state,loading:false,data:action.payload,error:""}
        case FETCH_MATERI_ERROR:
            return {...state,loading:false,data:[],error:action.payload}
        default:
            return state
    }
}

export default AllMateriReducer