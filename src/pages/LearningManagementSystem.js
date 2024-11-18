import React, { useEffect, useState } from "react";
// import SideMenu from '../components/menu/SideMenu';
import Content from "../components/Content";
import SideBar from "../components/menu/SideBar";
import SideOverlay from "../components/menu/SideOverlay";
import Navbar from "../components/navbar/Navbar";
import styles from "./styles/lms.module.css";
import Profile from "../components/profile/Profile";

const LearningManagementSystem = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    checkScreenSize();   

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className={styles.body}>
        <div className={styles.sidebar}>{isMobile ? <SideOverlay /> : <SideBar />}</div>
        <div className={styles.content}><Content/></div>
        <div className={styles.profile}><Profile/></div>
      </div>

      <main>{/* Main content goes here */}</main>
    </div>
  );
};

export default LearningManagementSystem;
