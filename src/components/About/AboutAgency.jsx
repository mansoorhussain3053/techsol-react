import './aboutagency.css'
import { PiNumberCircleOneThin } from "react-icons/pi";
import { PiNumberCircleTwoThin } from "react-icons/pi";
import { PiNumberCircleThreeThin } from "react-icons/pi";




const AboutAgency = () => {
  return (
    <div className='Agency__Parent'>
      
        <div className='Agency__Image'>

        </div>


        <div className='Agency__About'>
            <h2>About Us</h2>
            <p>Our creative Digital agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players. With a team of highly skilled professionals, we strive to deliver innovative solutions that drive growth and success for our clients. Our extensive experience in the industry allows us to understand the unique challenges and opportunities that businesses face, enabling us to tailor our strategies and campaigns accordingly. </p>

            <article>
                <div>
                <PiNumberCircleOneThin className='Agency__About-Icons'/>
                    </div> 
                    <div className='About__Inner'>
                        <h3>Our Mission</h3>
                        <p>Our mission is to assist you in your digital success through our 15+ years of experienced IT solution team, who are dedicated to providing innovative and customized solutions for your specific business needs. With our extensive knowledge and expertise, we aim to optimize your digital presence and help you achieve your goals in the ever-evolving technological landscape.</p>
                    </div>


            </article>

            <article>
                <div>
                <PiNumberCircleTwoThin className='Agency__About-Icons'/>
                    </div> 
                    <div className='About__Inner'>
                        <h3>Our Goals</h3>
                        <p>Our goal is to get your business thriving and dominating over its competitors through our tailored web development skills and marketing strategies.</p>
                    </div>


            </article>

            <article>
                <div>
                <PiNumberCircleThreeThin className='Agency__About-Icons'/>
                    </div> 
                    <div className='About__Inner'>
                        <h3>Why Us?</h3>
                        <p>We adopt modern practices, maintain professional relations, and offer result-oriented services. Our dedicated team stays ahead, providing innovative solutions tailored to client's needs for efficient goal achievement.</p>
                    </div>


            </article>


        </div>

    </div>
  )
}

export default AboutAgency
