import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengeContext'

function MyApp({ Component, pageProps }) {
  return (    
    <Component {...pageProps} />
  )
}

export default MyApp
