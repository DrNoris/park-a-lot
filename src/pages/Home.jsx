import React from 'react'
import Header from '../Header'
import HeroVideo from '../HeroVideo'
import CardSwitcher from '../CardSwitcher'
import HowItWorks from '../HowItWorks'
import SearchSection from '../SearchSection'

function Home({isAuthenticated}) {
  return (
    <div>
        <Header isAuthenticated={isAuthenticated}/> 
        <HeroVideo /> 
        <HowItWorks/>
        <SearchSection/>
        <CardSwitcher />
    </div>
  )
}

export default Home
