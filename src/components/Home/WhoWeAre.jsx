import "./whoweare.css";
import ANUAL from "../../assets/annualicon.webp";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <div className="Container__Parent">
      <div className="Container__Digital">
        <h3>Digital IT Consultations</h3>
        <h2>
        Reach Your Peak Business Potential Through Our <space></space>  
           <span className="Digital__Span">Agency</span> Corporate.
        </h2>
        <p>
        Our mission is to help businesses enhance their growth potential online. We achieve this by providing tailored digital marketing strategies and solutions that effectively target their desired audience. Our team of experts stays up-to-date with the latest industry trends and utilizes innovative techniques to maximize online visibility and drive customer engagement. 
        </p>
        <ul>
          <li>
            <IoIosArrowDropright className="Lists__Icon" />
            Branding the latest marketing agency.
          </li>
          <li>
            <IoIosArrowDropright className="Lists__Icon" />
            Connect to more online customers.
          </li>
          <li>
            <IoIosArrowDropright className="Lists__Icon" />
            Grow up your digital business.
          </li>
        </ul>
        <button className="Digital__Button">
          Discover More <FaRegArrowAltCircleRight />
        </button>
      </div>

      <div className="Container__Annual"> 
       

        <div className="Main__Icon">
          <div className="Annual__Icon">
            <img src={ANUAL} className="Icon__IMG" />
          </div>

          <div className="Annual__Content">
            <h3>ANNUAL</h3>
            <p>87%</p>
            <article className="Progress__Bar">
              <progress value={0.9} label={45} />
            </article>
            <h4>Business Growth</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
