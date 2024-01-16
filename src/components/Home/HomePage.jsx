
import ExpressEver from "./ExpressEver";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import NeedMoreHelp from "./NeedMoreHelp";
import Progress from "./Progress";
import Testimonials from "./Testimonials";
import WhatWEOffer from "./WhatWEOffer";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = () => {
  return (
    <>
    <HeroSection />
      <WhoWeAre />
      <Progress />
      <WhatWEOffer />
      <Testimonials />
      <ExpressEver />
      <HowItWorks />
      <WhyChooseUs />
      <NeedMoreHelp />
    </>
  )
}

export default HomePage;
