import { useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { LoginContext } from '../contexts/LoginContext';

import styles from '../styles/pages/Login.module.css'

export default function GoogleButton() {
  const { responseGoogle, responseGoogleFail } = useContext(LoginContext);

  return(   
    <GoogleLogin
      clientId="572202114679-f4mgktqbeddm189rfldo0sfoel2gjqdu.apps.googleusercontent.com"
      render={renderProps => (
        <button className={styles.googleButton} onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <svg viewBox="0 0 128 128">
            <g id="original"><path fill="#fff" d="M44.59,4.21a63.28,63.28,0,0,0,4.33,120.9,67.6,67.6,0,0,0,32.36.35A57.13,57.13,0,0,0,107.18,112a57.44,57.44,0,0,0,16-26.26,74.33,74.33,0,0,0,1.61-33.58H65.27c0,8.23,0,16.46,0,24.69H99.74A29.72,29.72,0,0,1,87.08,96.37a36.16,36.16,0,0,1-13.93,5.5,41.29,41.29,0,0,1-15.1,0A37.16,37.16,0,0,1,44,95.74a39.3,39.3,0,0,1-14.5-19.42,38.31,38.31,0,0,1,0-24.63,39.25,39.25,0,0,1,9.18-14.91A37.17,37.17,0,0,1,76.13,27a34.28,34.28,0,0,1,13.64,8q5.83-5.8,11.64-11.63c2-2.09,4.18-4.08,6.15-6.22A61.22,61.22,0,0,0,87.2,4.59,64,64,0,0,0,44.59,4.21Z"></path><path fill="#e33629" d="M44.59,4.21a64,64,0,0,1,42.61.37A61.22,61.22,0,0,1,107.55,17.2c-2,2.14-4.11,4.14-6.15,6.22Q95.58,29.23,89.77,35a34.28,34.28,0,0,0-13.64-8,37.17,37.17,0,0,0-37.46,9.74,39.25,39.25,0,0,0-9.18,14.91L8.76,35.6A63.53,63.53,0,0,1,44.59,4.21Z"></path><path fill="#f8bd00" d="M3.26,51.5a62.93,62.93,0,0,1,5.5-15.9L29.49,51.69a38.31,38.31,0,0,0,0,24.63q-10.36,8-20.73,16.08A63.33,63.33,0,0,1,3.26,51.5Z"></path><path fill="#587dbd" d="M65.27,52.15h59.52a74.33,74.33,0,0,1-1.61,33.58,57.44,57.44,0,0,1-16,26.26c-6.69-5.22-13.41-10.4-20.1-15.62A29.72,29.72,0,0,0,99.74,76.83H65.27C65.26,68.61,65.27,60.38,65.27,52.15Z"></path><path fill="#319f43" d="M8.75,92.4q10.37-8,20.73-16.08A39.3,39.3,0,0,0,44,95.74a37.16,37.16,0,0,0,14.08,6.08,41.29,41.29,0,0,0,15.1,0,36.16,36.16,0,0,0,13.93-5.5c6.69,5.22,13.41,10.4,20.1,15.62a57.13,57.13,0,0,1-25.9,13.47,67.6,67.6,0,0,1-32.36-.35,63,63,0,0,1-23-11.59A63.73,63.73,0,0,1,8.75,92.4Z"></path></g>
          </svg>
          Conta Google
        </button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogleFail}   
      cookiePolicy={'single_host_origin'}         
    />
  );
}