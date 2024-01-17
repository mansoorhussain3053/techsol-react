import './progress.css'
import { BsLightningCharge } from "react-icons/bs";
import { SiAltiumdesigner } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";



const Progress = () => {
  return (
    <div className='Progress__Parent'>
      <div className='Progress__Image'>
       
      </div>


      <div className='Progress__Container'>
        <h3>ABOUT US</h3>
        <h2>We’re More Than Just A Digital Agency.</h2>
        <p>We're not just a digital agency but we prioritize making professional relations. Techsol delivers digital success with transparent SEO, user-centric web design, mobile app expertise, and strategic social media management. As your trusted partners, we prioritize impactful results, ensuring growth through innovative solutions and tailored strategies.</p>
        <div className='Progress__Small-divs'>

           <article><BsLightningCharge className='Small__Icons'/> <p>Pixel  <br />Perfect</p></article>
            <article><SiAltiumdesigner className='Small__Icons'/> <p>Creative <br />Design</p></article>
            <article><CgPerformance className='Small__Icons'/> <p>High <br /> Performance</p></article>
         </div>
      </div>

      



    </div>
  )
}

export default Progress
