import React from 'react'
import LoginPemateri from '../components/LoginPemateri'
import styles from "./styles/LoginPages.module.css"
const LoginPages = () => {
  return (
    <div className={styles.container}>
      <LoginPemateri/>
    </div>
  )
}

export default LoginPages
