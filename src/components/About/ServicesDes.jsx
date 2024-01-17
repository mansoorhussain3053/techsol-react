import './servicesdes.css'
import { ImVideoCamera } from "react-icons/im";
import { SiXdadevelopers } from "react-icons/si";
import { SiMarketo } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";





const ServicesDes = () => {
  return (
    <div className='ServiceDes__Parent'>
     
        <div className='ServiceDes__Heading'>
            <h3>WHO WE ARE</h3>
            <h2>We are a new digital product <br />development agency</h2>
        </div>


        <div className='ServiceDes__Grid'>


        <article>
                <div className='ServiceDes__Icon_Parent'><SiXdadevelopers className='ServiceDes__ICON' /></div>

                <div className='ServiceDes__Inner'>
                    <h3>Web Developing</h3>
                    <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                    </div>
            </article>


            <article>
                <div className='ServiceDes__Icon_Parent'><SiMarketo className='ServiceDes__ICON' /></div>

                <div className='ServiceDes__Inner'>
                    <h3>Digital Marketing</h3>
                    <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                    </div>
            </article>

            <article>
                <div className='ServiceDes__Icon_Parent'><ImVideoCamera className='ServiceDes__ICON' /></div>

                <div className='ServiceDes__Inner'>
                    <h3>Digital Branding</h3>
                    <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                    </div>
            </article>

            <article>
                <div className='ServiceDes__Icon_Parent'><MdDeveloperMode className='ServiceDes__ICON' /></div>

                <div className='ServiceDes__Inner'>
                    <h3>Mobile App Development</h3>
                    <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
                    </div>
            </article>


        </div>





    </div>
  )
}

export default ServicesDes
