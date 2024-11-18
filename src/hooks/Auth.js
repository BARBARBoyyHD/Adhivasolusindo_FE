import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const [user, setUser ] = useState("");

    const getAuthUser  = () => {
        axios.get('http://localhost:8000/api/auth/user', { withCredentials: true })
            .then((response) => {
                // Check for successful response
                if (response.status !== 200) {
                    navigate("/");
                }
                if (response.status === 200) {
                    // Assuming your backend sends the user's name in response.data.name
                    setUser (response.data.message); // Adjust based on your backend response
                    navigate("/learning-management-system");
                }
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
                navigate("/"); // Redirect to home on error
            });
    };

    useEffect(() => {
        getAuthUser ();
    }, []);

    return (
        <div>
            <h1>Welcome to LMS </h1>
        </div>
    );
};

export default Auth;