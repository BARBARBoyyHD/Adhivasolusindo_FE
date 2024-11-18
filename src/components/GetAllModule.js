import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { fetchMateri } from '../redux';
import styles from "./GetAllModule.module.css"

const GetAllModule = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize navigate
    const { loading, error, data } = useSelector((state) => state.getAllMateri);

    useEffect(() => {
        // Dispatch fetchMateri with navigate as an argument
        dispatch(fetchMateri(navigate));
    }, [dispatch, navigate]);

    return (
        <div className={styles.listOfModul}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className={styles.wrapAllModul}>
                {data && data.length > 0 ? (
                    data.map((materi) => (
                        <div className={styles.modul} key={materi.materi_id}>
                            <p> {materi.title}</p>
                            <p> {materi.content}</p>
                            <p>{materi.description}</p>
                            <p> {materi.createdAt}</p>
                        </div>
                    ))
                ) : (
                    !loading && <p>No Modules Found.</p>
                )}
            </div>
        </div>
    );
};

export default GetAllModule;