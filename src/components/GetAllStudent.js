import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllstudent } from '../redux'; // Adjust path

const GetAllStudent = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.getStudent);

  useEffect(() => {
    dispatch(fetchAllstudent());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {data &&
          data.map((user) => (
            <div key={user.user_id}>
              <p>Name: {user.student_name}</p>
              <p>Created At : {user.createdAt}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GetAllStudent;
