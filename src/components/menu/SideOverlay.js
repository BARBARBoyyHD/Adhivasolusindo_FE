import React, { useState } from "react";
import styles from "./SideOverlay.module.css"; // Import CSS Modules styles

function SideOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`${styles.sidenav} ${isOpen ? styles.open : ""}`}
      >
        <button className={styles.closebtn} onClick={closeNav}>
          &times;
        </button>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <span
        style={{ fontSize: "30px", cursor: "pointer" }}
        onClick={openNav}
      >
        &#9776; 
      </span>
    </div>
  );
}

export default SideOverlay;
