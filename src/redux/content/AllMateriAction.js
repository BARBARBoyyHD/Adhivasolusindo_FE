import axios from 'axios';
import { FETCH_MATERI_ERROR, FETCH_MATERI_REQUEST, FETCH_MATERI_SUCCESS } from './AllMateriType';

const fetchMateriRequest = () => {
    return {
        type: FETCH_MATERI_REQUEST,
    };
};

const fetchMateriSuccess = (data) => {
    return {
        type: FETCH_MATERI_SUCCESS,
        payload: data,
    };
};

const fetchMateriError = (error) => {
    return {
        type: FETCH_MATERI_ERROR,
        payload: error,
    };
};

// Modify the fetchMateri function to accept navigate as an argument
export const fetchMateri = (navigate) => {
    return (dispatch) => {
        dispatch(fetchMateriRequest());
        axios.get("http://localhost:8000/api/allMateri", { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    console.log('Fetched materi:', response.data);
                    dispatch(fetchMateriSuccess(response.data));
                    navigate("/learning-management-system");
                } else {
                    // If the response is not ok, redirect to home
                    navigate("/");
                }
            })
            .catch(error => {
                console.error('Fetch materi error:', error.response ? error.response.data : error.message);
                dispatch(fetchMateriError(error.message));
                // Redirect to home on error
                navigate("/");
            });
    };
};