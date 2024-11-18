import React, { useState, useEffect } from "react";
// import SideMenu from '../components/menu/SideMenu';
import Navbar from "../components/navbar/Navbar";
import SideOverlay from "../components/menu/SideOverlay";
import SideBar from "../components/menu/SideBar";
import styles from "./styles/lms.module.css";
import Content from "../components/Content";
import GetAllModule from "../components/GetAllModule";
import Auth from "../hooks/Auth";

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
        <div className={styles.profile}></div>
      </div>

      <main>{/* Main content goes here */}</main>
    </div>
  );
};

export default LearningManagementSystem;
