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
            <h2>We create sales, leads, and new business<br /> opportunities for our clients </h2>
        </div>


        <div className='ServiceDes__Grid'>


        <article>
                <div className='ServiceDes__Icon_Parent'><SiXdadevelopers className='ServiceDes__ICON' /></div>

                <div className='ServiceDes__Inner'>
                    <h3>Web Developing</h3>
                    <p>We begin with a well-defined idea, building a safe, easy-to-use website customised to your objectives and guaranteeing continued assistance for success.</p>
                    </div>
            </article>


            <article>
                <div className='ServiceDes__Icon_Parent'><SiMarketo className='ServiceDes__ICON' /></div>

                <div className='ServiceDes__Inner'>
                    <h3>Digital Branding</h3>
                    <p>We prioritise visual appeal in web design, ensuring positive experiences, seamless navigation, and responsive functionality, as well as rebranding.</p>
                    </div>
            </article>

            <article>
                <div className='ServiceDes__Icon_Parent'><ImVideoCamera className='ServiceDes__ICON' /></div>

                <div className='ServiceDes__Inner'>
                    <h3>Mobile App Development</h3>
                    <p>We excel at mobile app development, with expertise in UI/UX design, secure coding, optimisation, launch, and ongoing success support.</p>
                    </div>
            </article>

            <article>
                <div className='ServiceDes__Icon_Parent'><MdDeveloperMode className='ServiceDes__ICON' /></div>

                <div className='ServiceDes__Inner'>
                    <h3>Application Development</h3>
                    <p>By using cutting-edge technology, we create tailored solutions with seamless functionality, making your unique vision a digital reality.</p>
                    </div>
            </article>


        </div>





    </div>
  )
}

export default ServicesDes
