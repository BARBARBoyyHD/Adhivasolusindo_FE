import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginStudent } from "../redux";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, data, error } = useSelector((state) => state.loginStudent);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both username and password are entered
    if (!formData.username || !formData.password) {
      alert("Please fill all the fields");
      return;  // Stop further execution of the function
    }

    // Proceed with login if both fields are filled
    dispatch(fetchLoginStudent(formData)); // Dispatch the login action with formData

    // Optionally, check for success/failure from the redux state after the dispatch, if required
    // You can conditionally navigate only if login is successful
    if (data) {
      navigate("/learning-management-system"); // Redirect if login is successful
    } else if (error) {
      alert("Login failed. Please try again.");
    }
};

  // Effect to handle navigation based on login success or error


  return (
    <div className={styles.container}>
      <div className={styles.glassBox}>
        <h2 className={styles.title}>Login as Student</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username" // Ensure the name attribute is correct
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password" // Ensure the name attribute is correct
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className={styles.error}>Error: {error}</p>}
          <div className={styles.links}>
            <Link to="/login-pemateri" className={styles.Link}>
              Login as Pemateri
            </Link>
            <Link to="/register-student" className={styles.Link}>
              Register Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
