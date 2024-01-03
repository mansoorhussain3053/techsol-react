import './whoweare.css'
import { FaPlay } from "react-icons/fa";


const WhoWeAre = () => {
  return (
    <div className='Container__Who'>
      <div className="Branding__color"></div>
      <div className="Container__Branding">
        <h3>WHO WE ARE</h3>
        <h2>Branding, SEO, PPC, Content Marketing. We provide everything.</h2>
        <p>Erat taciti natoque et sodales nam potenti magna blandit. Montes curae scelerisque porttitor mauris velit arcu. Maecenas condimentum sapien congue sagittis senectus porta.</p>
        <button>LEARN MORE</button>
      </div>
      <div className="Container__Video">
        <div className='Icon__Div'><h1>15+</h1><p>Years of Experience</p></div>
        <div className='Icon-1'><i><FaPlay className='Icon-1-icon'/></i></div>
        <h3>Together, we’ll grow your business</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
    </div>
  )
}

export default WhoWeAre
