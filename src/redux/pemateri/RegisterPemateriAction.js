import { REGISTER_PEMATERI_REQUEST, REGISTER_PEMATERI_SUCCESS, REGISTER_PEMATERI_ERROR } from "./RegisterPemateriType";
import axios from "axios";

const registerPemateriRequest = () => {
    return {
        type: REGISTER_PEMATERI_REQUEST,
    };
};

const registerPemateriSuccess = (data) => {
    return {
        type: REGISTER_PEMATERI_SUCCESS,
        payload: data,
    };
};

const registerPemateriError = (error) => {
    return {
        type: REGISTER_PEMATERI_ERROR,
        payload: error,
    };
};

export const registerPemateri = (data) => {
    return async (dispatch) => {
       dispatch(registerPemateriRequest());
 
       // Log the data to ensure it's correct
       console.log("Sending data:", data);
 
       try {
          const response = await axios.post("http://localhost:8000/api/register/pemateri", data);
          dispatch(registerPemateriSuccess(response.data));
          console.log(response);
       } catch (error) {
          if (error.response) {
             console.error("Error data:", error.response.data);
             console.error("Error status:", error.response.status);
             dispatch(registerPemateriError(error.response.data.message || "An error occurred"));
          } else if (error.request) {
             console.error("No response received:", error.request);
             dispatch(registerPemateriError("No response received from server"));
          } else {
             console.error("Error message:", error.message);
             dispatch(registerPemateriError("An error occurred while making the request"));
          }
       }
    };
 };