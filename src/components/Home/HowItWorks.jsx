import './howitworks.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import portfolioimage1 from '../../assets/portfolioimages/mindpeaceenglish.webp'



const HowItWorks = () => {
  return (
    <div className='Home__Portfolio__Parent'>
      <div className='Home_Portfolio_heading'>
        <h3>PORTFOLIO</h3>
        <h2>Our Recent Web Design & <br />Some Past Projects.</h2>
      </div>

        <div className='Portfolio__Home'>


        <article>
          <div className='Portfolio__Home__Image' >
            <img src={portfolioimage1} alt="" />
          </div>
          <h3>Development, UI UX</h3>
          <h2>Mind Peace Psychology</h2>
          <p>Dr. Luo, a Counseling Psychology Ph.D. graduate, offers evidence-based psychological assessment, diagnosis, and psychotherapy for adults with various issues</p>
          <button>See Project<FaLongArrowAltRight className='Portfolio__Project-Icon' /></button>
        </article>


        <article>
          <div className='Portfolio__Home__Image' >
            <img src={portfolioimage1} alt="" />
          </div>
          <h3>Development, UI UX</h3>
          <h2>Mind Peace Psychology</h2>
          <p>Dr. Luo, a Counseling Psychology Ph.D. graduate, offers evidence-based psychological assessment, diagnosis, and psychotherapy for adults with various issues</p>
          <button>See Project<FaLongArrowAltRight className='Portfolio__Project-Icon' /></button>
        </article>

        <article>
          <div className='Portfolio__Home__Image' >
            <img src={portfolioimage1} alt="" />
          </div>
          <h3>Development, UI UX</h3>
          <h2>Mind Peace Psychology</h2>
          <p>Dr. Luo, a Counseling Psychology Ph.D. graduate, offers evidence-based psychological assessment, diagnosis, and psychotherapy for adults with various issues</p>
          <button>See Project<FaLongArrowAltRight className='Portfolio__Project-Icon' /></button>
        </article>

        
        </div>
        <div>
        <button className='Home__Portfolio__Banner'>See More<FaRegArrowAltCircleRight/></button>
        </div>


    </div>
  )
}

export default HowItWorks
