import React from 'react'
import LoginForm from '../components/LoginForm'
import styles from "./styles/LoginPages.module.css"
const LoginPages = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default LoginPages
