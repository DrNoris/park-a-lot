import React from 'react'
import Header from '../Header'
import HeroVideo from '../HeroVideo'
import CardSwitcher from '../CardSwitcher'
import HowItWorks from '../HowItWorks'
import SearchSection from '../SearchSection'
import FAQ from '../FAQ'
import Statistics from '../Statistics'
import Footer from '../Footer'

function Home({isAuthenticated}) {
  return (
    <div>
        <Header isAuthenticated={isAuthenticated}/> 
        <HeroVideo /> 
        <Statistics />
        <HowItWorks />
        <SearchSection />
        <CardSwitcher />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Home
