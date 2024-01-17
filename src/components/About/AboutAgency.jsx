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
            <h2>About us.</h2>
            <p>Our creative Ad agency is ranked among the finest in the US. We cultivate smart ideas for start-ups and seasoned players.</p>

            <article>
                <div>
                <PiNumberCircleOneThin className='Agency__About-Icons'/>
                    </div> 
                    <div className='About__Inner'>
                        <h3> Our Mission</h3>
                        <p>luctus massa ipsum at tempus eleifend congue lectus bibendum</p>
                    </div>


            </article>

            <article>
                <div>
                <PiNumberCircleTwoThin className='Agency__About-Icons'/>
                    </div> 
                    <div className='About__Inner'>
                        <h3> Our Goals</h3>
                        <p>luctus massa ipsum at tempus eleifend congue lectus bibendum</p>
                    </div>


            </article>

            <article>
                <div>
                <PiNumberCircleThreeThin className='Agency__About-Icons'/>
                    </div> 
                    <div className='About__Inner'>
                        <h3> Why Us?</h3>
                        <p>luctus massa ipsum at tempus eleifend congue lectus bibendum</p>
                    </div>


            </article>


        </div>

    </div>
  )
}

export default AboutAgency
