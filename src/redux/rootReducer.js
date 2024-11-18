import { combineReducers } from "redux";
import StudentReducer from "./student/StudentReducer";
import AllMateriReducer from "./content/AllMateriReducer";
import RegisterPemateriReducer from "./pemateri/RegisterPemateriReducer";
import registerStudentReducer from "./student/RegisterStudentReduce";
import LoginStudentReducer from "./student/LoginStudentReducer";
const rootReducer = combineReducers({
    getStudent : StudentReducer,
    getAllMateri : AllMateriReducer,
    registPemateri :RegisterPemateriReducer,
    registStudent : registerStudentReducer,
    loginStudent: LoginStudentReducer
})

export default rootReducer