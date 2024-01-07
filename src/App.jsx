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
import AnimatedCursor from "react-animated-cursor"



function App() {
  return (
    <>

    <Header/>
    <HeroSection/>
    <AnimatedCursor
      innerSize={24}
      outerSize={20}
      z-index={99}

      color='69,242,252'
      outerAlpha={0.2}
      innerScale={0.7}
      innerStyle={{
        background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
      }}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 15,
            outerSize: 15,
            color: '131,58,180',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />

    
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
