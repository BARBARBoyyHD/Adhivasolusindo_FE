import React from 'react'
import styles from "./Navbar.module.css"
const NavbarLandingPage = () => {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <a href="#home" className={styles.navLink}>
          Home
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="#about" className={styles.navLink}>
          About
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="#getting-started" className={styles.navLink}>
          Getting Started
        </a>
      </li>
    </ul>
  </nav>
  )
}

export default NavbarLandingPage
