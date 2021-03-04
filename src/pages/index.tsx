import Head from 'next/head';
import { LoginProvider } from '../contexts/LoginContext'
import FacebookButton from '../components/FacebookButton';
import GoogleButton from '../components/GoogleButton'

import styles from '../styles/pages/Login.module.css'


export default function Login() {
  return (
    <LoginProvider name="" picture="">
      <div className={styles.container}>   
        <Head>
          <title> Login | HealthyMind.com</title>
        </Head>

        <div className={styles.content}>
          <div className={styles.loginSection}>
            <h1>Opções de LogIn</h1>
            <hr/>
            <GoogleButton />
            <FacebookButton />
            <hr/>
          </div>
          <div className={styles.logo}>
            <img src="/logo-full-white.svg" alt=""/>
          </div>
        </div>
        <div className={styles.circle}></div>
      </div>
    </LoginProvider>
  );
}