import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ExpressEver from './components/Home/ExpressEver'
import GrowBusiness from './components/Home/GrowBusiness'
import HeroSection from './components/Home/HeroSection'
import HowItWorks from './components/Home/HowItWorks'
import NeedMoreHelp from './components/Home/NeedMoreHelp'
import Progress from './components/Home/Progress'
import Testimonials from './components/Home/Testimonials'
import WhatWEOffer from './components/Home/WhatWEOffer'
import WhoWeAre from './components/Home/WhoWeAre'
import WhyChooseUs from './components/Home/WhyChooseUs'


function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <WhoWeAre/>
    <Progress/>
    <WhatWEOffer/>
    <Testimonials/>
    <ExpressEver/>
    <HowItWorks/>
    <WhyChooseUs/>
    <NeedMoreHelp/>
    <GrowBusiness/>
    <Footer/>

    </>
  )
}

export default App
