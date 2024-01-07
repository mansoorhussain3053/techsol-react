import './whoweare.css'
import IMAGE from '../../assets/Digitalconsulting.jpg'
import ANUAL from '../../assets/annualicon.png'

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
        <img src={IMAGE} className='Annual__Background' />

<div className='Main__Icon'>

        <div className='Annual__Icon'>
          <i><img src={ANUAL} className='Icon__IMG' /></i>
        </div>
        
        <div className='Annual__Content'>
          <article className='Progress__Bar'></article>
          <h4>Business Growth</h4>
        </div>

        </div>


        
      </div>

      

    </div>
  )
}

export default WhoWeAre
