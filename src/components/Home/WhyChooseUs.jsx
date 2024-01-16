import './whychooseus.css'
import { RxDividerHorizontal } from "react-icons/rx";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoFlashOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { TbLocationDiscount } from "react-icons/tb";
import { TbChartInfographic } from "react-icons/tb";
import { Link } from "react-router-dom";






const WhyChooseUs = () => {
  return (
    <div className='Know__Parent'>

      <div className='Heading__Parent'>

    <div className='Inner__Know__Heading'>
        <h3><RxDividerHorizontal className='Know_Divider'/>KNOW US BETTER</h3>
        <h2>WHEN HELP TO CREATE STRATEGIES, DESIGN AND DEVELOPMENT.</h2>
      </div>

      <div className='Inner__Para__Heading'>
        <p>We never underestimate any parts of each project as they're all essential to meeting the ultimate goal. you'll be engaged in with our positive and enthusiastic attitude.</p>

        <Link to="/about"><button>
          Know More
          <FaRegArrowAltCircleRight />
        </button></Link>
      </div>
      </div>


      <div className='Know__Grid'>
        <article>
        <IoFlashOutline className='Know__Grid__Icons'/>
        <h3>Digital <br />Marketing</h3>
        </article>

        <article>
        <CiMobile3 className='Know__Grid__Icons'/>
        <h3>Web & App <br />Development</h3>
        </article>

        <article>
        <TbLocationDiscount className='Know__Grid__Icons'/>
        <h3>Mobile & Web <br />Trending</h3>
        </article>


        <article>
        <TbChartInfographic className='Know__Grid__Icons'/>
        <h3>Graphic  <br />Design</h3>
        </article>
      </div>

    </div>
  )
}

export default WhyChooseUs
