import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { LoginContext } from '../contexts/LoginContext';
import Switch from 'react-switch';

import styles from '../styles/components/Profile.module.css';

export function Profile({ setChildData }){
  const { level, theme, themeHandler } = useContext(ChallengesContext);
  const { loginData } = useContext(LoginContext);

  // const sun = require('../../public/icons/sun.svg');
  const themeSwitch = () => {
    themeHandler();
    setChildData(theme);
  }
  return(
    <div className={styles.pofileContent}>
    <div className={styles.profileContainer}>
      <img src={loginData.picture} alt={loginData.name}/>
      <div className={styles.information}>
        <strong>{loginData.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
    <Switch 
    className={styles.switch}
    onChange={themeSwitch}
    checked={theme === 'dark'}
    checkedIcon={false}
    uncheckedIcon={false}
    uncheckedHandleIcon={<svg height="30" viewBox="0 0 128 128" width="30" xmlns="http://www.w3.org/2000/svg"><g><circle cx="64" cy="63.997" fill="#fedb41" r="39.247"/><g fill="#fea832"><path d="m95.247 65.747a1.749 1.749 0 0 1 -1.747-1.747 29.53 29.53 0 0 0 -29.5-29.5 1.75 1.75 0 0 1 0-3.5 33.035 33.035 0 0 1 33 33 1.749 1.749 0 0 1 -1.753 1.747z"/><g><path d="m64 16.75a47.252 47.252 0 0 1 8.5.781c.038-.545.063-1.1.063-1.658-.001-7.801-8.563-14.126-8.563-14.126s-8.563 6.325-8.563 14.126c0 .562.026 1.113.064 1.658a47.243 47.243 0 0 1 8.499-.781z"/><path d="m64 111.244a47.343 47.343 0 0 0 8.5-.78c.038.544.063 1.095.063 1.657 0 7.8-8.562 14.126-8.562 14.126s-8.563-6.324-8.563-14.126c0-.562.026-1.113.064-1.657a47.335 47.335 0 0 0 8.498.78z"/><path d="m97.409 30.588a47.349 47.349 0 0 1 5.457 6.562c.413-.358.82-.73 1.217-1.127 5.517-5.517 3.934-16.043 3.934-16.043s-10.526-1.58-16.043 3.934c-.4.4-.769.8-1.127 1.217a47.349 47.349 0 0 1 6.562 5.457z"/><path d="m30.591 97.406a47.232 47.232 0 0 0 6.562 5.457c-.358.413-.73.82-1.127 1.217-5.517 5.517-16.043 3.934-16.043 3.934s-1.583-10.526 3.934-16.043c.4-.4.8-.769 1.217-1.127a47.291 47.291 0 0 0 5.457 6.562z"/><path d="m111.247 64a47.335 47.335 0 0 1 -.78 8.5c.544.038 1.095.064 1.657.064 7.8 0 14.126-8.563 14.126-8.563s-6.325-8.562-14.126-8.562c-.562 0-1.113.025-1.657.063a47.343 47.343 0 0 1 .78 8.498z"/><path d="m16.753 64a47.335 47.335 0 0 0 .78 8.5c-.544.038-1.1.064-1.657.064-7.801-.004-14.126-8.564-14.126-8.564s6.325-8.562 14.126-8.562c.562 0 1.113.025 1.657.063a47.343 47.343 0 0 0 -.78 8.499z"/><path d="m97.409 97.406a47.349 47.349 0 0 1 -6.562 5.457c.358.413.73.82 1.127 1.217 5.517 5.517 16.043 3.934 16.043 3.934s1.583-10.526-3.934-16.043c-.4-.4-.8-.769-1.217-1.127a47.291 47.291 0 0 1 -5.457 6.562z"/><path d="m30.591 30.588a47.349 47.349 0 0 0 -5.457 6.562c-.413-.358-.82-.73-1.217-1.127-5.517-5.517-3.934-16.043-3.934-16.043s10.526-1.58 16.043 3.934c.4.4.769.8 1.127 1.217a47.291 47.291 0 0 0 -6.562 5.457z"/></g></g></g></svg>}
    checkedHandleIcon={<img src="icons/moon.svg" alt="moon"/>}
    offColor="#fff"
    onColor="#27536B"
    />
  </div>
  );
}