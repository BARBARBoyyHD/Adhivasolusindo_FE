import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerStudent } from "../redux";  // Make sure to import the action creator
import styles from "./RegisterStudentForm.module.css"; // CSS Module for styling
import { useNavigate } from "react-router-dom";

const RegisterStudentForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    studentName: "", // Ensure this matches your state key
  });

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.registStudent); // Use the correct reducer state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation to make sure all fields are filled
    if (!formData.username || !formData.password || !formData.studentName) {
      alert("Please fill all the fields");
      return;
    }
    else{
        navigate("/")
    }
    dispatch(registerStudent(formData)); // Dispatch the action
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Register Student</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="studentName">Full Name</label>
            <input
              type="text"
              id="studentName"
              name="studentName" // Update name to match the state key
              value={formData.studentName} // Update value to match the state key
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {error && <p className={styles.error}>Error: {error}</p>}

        {/* Success message */}
        {data && !error && <p className={styles.success}>Registration successful!</p>}
      </div>
    </div>
  );
};

export default RegisterStudentForm;
