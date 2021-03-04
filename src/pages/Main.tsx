import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { SideBarMenu } from "../components/SideBarMenu";

import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallengeContext';
import { LoginProvider } from '../contexts/LoginContext';
import { useEffect, useState } from 'react';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  name: string;
  picture: string;
}

export default function Home(props: HomeProps) {
  
  const [childData, setChildData] = useState("dark");
  const [menuTransformPercent, setMenuTranformPercent] = useState('');

  useEffect(() =>{
    window.innerWidth > 1175 ? setMenuTranformPercent('0%') : setMenuTranformPercent('-100%');
  }, [])

  const menuDisplayOn = () => {
    setMenuTranformPercent('0%')
  }
  
  const menuDisplayOff = () => {
    window.innerWidth < 1175 && setMenuTranformPercent('-100%');
  }
  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
      { childData === 'dark'? (
        <div className={styles.light}>
          <SideBarMenu menuTransformPercent={menuTransformPercent} menuDisplayOn={menuDisplayOn}/>
          <div className={styles.container} onClick={menuDisplayOff}>   
            <Head>
              <title>Início | HealthyMind.com</title>
            </Head>
            
            <ExperienceBar />        
            <CountdownProvider>
              <section>
                <div>
                  <LoginProvider 
                    name={props.name}
                    picture={props.picture}
                  >
                  <Profile setChildData={setChildData}/>
                  </LoginProvider>
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>   
          </div>
        </div>
      ):(
        <div className={styles.dark}>
          <SideBarMenu menuTransformPercent={menuTransformPercent} menuDisplayOn={menuDisplayOn}/>
          <div className={styles.container} onClick={menuDisplayOff}>   
            <Head>
              <title>Início | HealthyMind.com</title>
            </Head>
            
            <ExperienceBar />        
            <CountdownProvider>
              <section>
                <div>
                  <LoginProvider 
                    name={props.name}
                    picture={props.picture}
                  >
                    <Profile setChildData={setChildData}/>
                  </LoginProvider>
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>   
          </div>
        </div>
      )}
      
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { level, currentExperience, challengesCompleted, name, picture } = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      name: name,
      picture: picture,
    }
  }
}