import React from "react";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.get("http://localhost:8000/api/logout/student", { withCredentials: true })
      .then((response) => {
        console.log(response);
        navigate("/"); // Redirect to home after logout
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.sidebar}>
      {/* line1 */}
      <div className={styles.sidebarList}>
        <div className={styles.sidebarListItem}>
          <Link to="/dashboard" className={styles.link}>Dashboard</Link>
        </div>
        <div className={styles.sidebarListItem}>
          <Link to="/modul" className={styles.link}>Modul</Link>
        </div>
        <div className={styles.sidebarListItem}>
          <Link to="/peserta" className={styles.link}>Peserta</Link>
        </div>
        <div className={styles.sidebarListItem}>
          <Link to="/group-chat" className={styles.link}>Group Chat</Link>
        </div>
        <div className={styles.line}></div>
        {/* line2 */}
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "20px",
              color: "white"
            }}
          >
            Profile
          </h1>
        </div>
        <div className={styles.sidebarListItem}>
          <Link to="/settings" className={styles.link}>Settings</Link>
        </div>
        <div className={styles.sidebarListItem}>
          <Link to="/kalender" className={styles.link}>Kalender</Link>
        </div>
        <div className={styles.line}></div>
        <div className={styles.sidebarListItem}>
          <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;