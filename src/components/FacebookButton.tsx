import { useContext, useState } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { LoginContext } from '../contexts/LoginContext';

import styles from '../styles/pages/Login.module.css'

export default function FacebookButton() {
  const { responseFacebook } = useContext(LoginContext);

  return(
    

    <FacebookLogin
      appId="3527364490718886"
      size="medium"
      callback={responseFacebook}
      fields="name,picture.height(1024)"
      render={renderProps => (
        <button className={styles.facebookButton} onClick={renderProps.onClick}>
          <svg viewBox="0 0 128 128">              
            <g id="original"><rect style={{transition: `all 0.4s ease`}} id="Blue" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path style={{transition: `all 0.3s ease`}} id="f" d="M86.48,123.17V77.34h15.38l2.3-17.86H86.48V48.08c0-5.17,1.44-8.7,8.85-8.7h9.46v-16A126.56,126.56,0,0,0,91,22.7C77.38,22.7,68,31,68,46.31V59.48H52.62V77.34H68v45.83Z"></path></g>
          </svg>
          Conta Facebook
        </button>
      )}            
    />
  );
}