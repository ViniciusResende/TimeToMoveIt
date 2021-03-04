import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel);


  return(
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
      {/* style={{ width: `${percentToNextLevel}%` }} */}
        <div style={{transform: `scale(${percentToNextLevel/100}, 1)`}}>          
        </div>
        {/* style={{ left: `${percentToNextLevel}%` }} */}
        <span className={styles.currentExperience} style={{ transform: `translateX(${percentToNextLevel - 2}%)` }}> 
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}