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
        <h2>WE ARE MORE THAN JUST A DIGITAL AGENCY.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias quo in aliquid pariatur sequi quis tempore. Consequatur perferendis excepturi eos, magni molestiae facilis, ipsa officia necessitatibus quibusdam et pariatur, odio vel!</p>
        <div className='Progress__Small-divs'>

           <article><BsLightningCharge className='Small__Icons'/> <p>PIXEL <br />PERFECT</p></article>
            <article><SiAltiumdesigner className='Small__Icons'/> <p>CREATIVE<br /> DESIGN</p></article>
            <article><CgPerformance className='Small__Icons'/> <p>HEIGH<br /> PERFOMANCE</p></article>
         </div>
      </div>

      



    </div>
  )
}

export default Progress
