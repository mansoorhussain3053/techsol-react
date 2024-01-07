import './whoweare.css'
import IMAGE from '../../assets/Digitalconsulting.jpg'

const WhoWeAre = () => {
  return (
    <div className='Container__Parent'>
      
      <div className='Container__Digital'>
          <h3>DIGITAL CONSULTING</h3>
          <h2>Unique Business Consulting Agency corporate.</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        <ul>
          <li>Branding the latest marketing agency.</li>
          <li>Branding the latest marketing agency.</li>
          <li>Branding the latest marketing agency.</li>
          </ul>
          <button>Discover More</button>
      </div>


      <div className='Container__Annual'>
        <img src={IMAGE} />
        <div className='Background__Annual'>
          
          <div className='Main__Annual'></div>
        </div>
      </div>

    </div>
  )
}

export default WhoWeAre
