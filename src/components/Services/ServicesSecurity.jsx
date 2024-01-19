import './servicesecurity.css'
import { ImVideoCamera } from "react-icons/im";
import { SiXdadevelopers } from "react-icons/si";
import { SiMarketo } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import Testimonials from "../Home/Testimonials"
import ContactForm from "../Contact/ContactForm"
import NeedMoreHelp from "../Home/NeedMoreHelp"

const ServicesSecurity = () => {
  return (
    <>
    <div className='ServiceSec__Parent'>
     
        <div className='ServiceSec__Heading'>
            <h3>WHY CHOOSE US</h3>
            <h2>Digital marketing is the key to lead <br /> generation, online visibility, and conversion</h2>
        </div>


        <div className='ServiceSec__Grid'>


        <article>
                <div className='ServiceSec__Icon_Parent'><SiXdadevelopers className='ServiceSec__ICON' /></div>

                <div className='ServiceSec__Inner'>
                    <h3>Enterprise-level security</h3>
                    <p>Massa a egestas sodales porta iaculis maecenas dapibus penatibus lacus ante fames.</p>
                    </div>
            </article>


            <article>
                <div className='ServiceSec__Icon_Parent'><SiMarketo className='ServiceSec__ICON' /></div>

                <div className='ServiceSec__Inner'>
                    <h3>Global scalability</h3>
                    <p>Massa a egestas sodales porta iaculis maecenas dapibus penatibus lacus ante fames.</p>
                    </div>
            </article>

            <article>
                <div className='ServiceSec__Icon_Parent'><ImVideoCamera className='ServiceSec__ICON' /></div>

                <div className='ServiceSec__Inner'>
                    <h3>
Easy Payment Gateway</h3>
                    <p>Massa a egestas sodales porta iaculis maecenas dapibus penatibus lacus ante fames.</p>
                    </div>
            </article>

            <article>
                <div className='ServiceSec__Icon_Parent'><MdDeveloperMode className='ServiceSec__ICON' /></div>

                <div className='ServiceSec__Inner'>
                    <h3>
Customer onboarding team</h3>
                    <p>Massa a egestas sodales porta iaculis maecenas dapibus penatibus lacus ante fames.</p>
                    </div>
            </article>


        </div>





    </div>
    <Testimonials/>
    <ContactForm/>
    <NeedMoreHelp/>
    </>
  )
}

export default ServicesSecurity
