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
            <h2>Choose us for a website that doesn't just function, it thrives. Experience the difference, pixel by perfect pixel.</h2>
        </div>


        <div className='ServiceSec__Grid'>


        <article>
                <div className='ServiceSec__Icon_Parent'><SiXdadevelopers className='ServiceSec__ICON' /></div>

                <div className='ServiceSec__Inner'>
                    <h3>Enterprise-Level Security</h3>
                    <p>Your site's security is our responsibility. We always prioritize risk-proofing your enterprise with comprehensive solutions.</p>
                    </div>
            </article>


            <article>
                <div className='ServiceSec__Icon_Parent'><SiMarketo className='ServiceSec__ICON' /></div>

                <div className='ServiceSec__Inner'>
                    <h3>Global Scalability</h3>
                    <p>We always focus on creating scalable assets because your reach knows no limits, and neither should your platform.</p>
                    </div>
            </article>

            <article>
                <div className='ServiceSec__Icon_Parent'><ImVideoCamera className='ServiceSec__ICON' /></div>

                <div className='ServiceSec__Inner'>
                    <h3>
                    Easy Payment Gateway</h3>
                    <p>No cart abandonment here; we simplify payments with an easy gateway. Our user-friendly gateway keeps shoppers moving, leading to happy conversions.</p>
                    </div>
            </article>

            <article>
                <div className='ServiceSec__Icon_Parent'><MdDeveloperMode className='ServiceSec__ICON' /></div>

                <div className='ServiceSec__Inner'>
                    <h3>
                    Customer Onboarding Team</h3>
                    <p>Hit the ground running, not stumbling. Our expert onboarding team paves the way for your digital success, guiding you with a smile.</p>
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
