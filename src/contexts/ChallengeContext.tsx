import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  homeIsActive: boolean;
  awardIsActive: boolean;
  theme: string;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  homeHandler: () => void;
  awardHandler: () => void;
  themeHandler: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;  
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({ 
  children, 
  ...rest
}: ChallengesProviderProps) {

  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  const [homeIsActive, setHomeIsActive] = useState(true);
  const [awardIsActive, setAwardIsActive] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const [theme, setTheme] = useState('light');

  useEffect(() =>{
    Notification.requestPermission();
  }, [])

  useEffect(() =>{
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted])
  
  function levelUp() {
    setLevel(level + 1);
    setIsLevelModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelModalOpen(false);
  }

  function homeHandler() {
    setHomeIsActive(true);
    setAwardIsActive(false);
  }

  function awardHandler() {
    setHomeIsActive(false);
    setAwardIsActive(true);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted'){
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();      
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  } 

  const themeHandler = () =>{
    if(theme === 'light'){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ChallengesContext.Provider 
    value={{ 
      level, 
      currentExperience, 
      challengesCompleted, 
      activeChallenge,
      experienceToNextLevel,
      homeIsActive,
      awardIsActive,
      theme,
      levelUp, 
      startNewChallenge,
      resetChallenge,
      completeChallenge,
      closeLevelUpModal,
      homeHandler,
      awardHandler,
      themeHandler,
      }}>
      {children}

      {isLevelModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}