import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
    const navigate = useNavigate()
    const onSubmit = ()=>{
        navigate("/learning-management-system");
    }
  return (
    <div className={styles.container}>
      <div className={styles.glassBox}>
        <h2 className={styles.title}>Login as Pemateri</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="username">username</label>
            <input type="text" id="username" placeholder="Enter your username" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button onClick = {onSubmit} type="submit" className={styles.submitButton}>
            Login
          </button>
          <div className={styles.links}>
            <Link to={"/login"} className={styles.Link}>Login as Student</Link>
            <Link to={"/register-pemateri"} className={styles.Link}>Register Here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
