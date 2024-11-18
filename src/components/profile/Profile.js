import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.wrapAll}>
        <div className={styles.photoProfile}></div>
        <h1 className={styles.welcome}>Welcome to LMS</h1>
      </div>
      
    </div>
  );
};

export default Profile;
