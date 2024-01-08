import "./whoweare.css";
import IMAGE from "../../assets/Digitalconsulting.jpg";
import ANUAL from "../../assets/annualicon.png";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <div className="Container__Parent">
      <div className="Container__Digital">
        <h3>DIGITAL CONSULTING</h3>
        <h2>
          Unique Business Consulting <br />
          <span className="Digital__Span"> Agency</span> corporate.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. dolor sit
          amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
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
        <img src={IMAGE} className="Annual__Background" />

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
