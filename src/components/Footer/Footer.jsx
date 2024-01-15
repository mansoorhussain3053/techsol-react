import "./Footer.css";
import { CiLocationOn } from "react-icons/ci";

import { BsEnvelope } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


import { SiUpwork } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterLogo from "../../assets/techlogo.webp";

const Footer = () => {
  return (
    <div className="Footer__Parent">
      <div className="Footer__Container">
        <div className="Logo__Footer">
          <img src={FooterLogo} />
          <p>
            At Techsol, our values distinguish us. Passionate about digital
            marketing and web development, we help clients achieve goals.
          </p>
          <ul>
            <li>
              <FaFacebook />{" "}
            </li>
            <li>
              <SiUpwork />{" "}
            </li>
            <li>
              <IoLogoGithub />{" "}
            </li>
            <li>
              <TbBrandFiverr />{" "}
            </li>
            <li>
              <FaXTwitter />{" "}
            </li>
          </ul>
        </div>

        <div className="Recent__Footer">

          <ul>
           <Link to="/"> <li>Home</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/portfolio"><li>Portfolio</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
          </ul>
        </div>

        <div className="Contact__Footer">

          <article>
            <div>
              {" "}
              <CiLocationOn className="Footer__ICONS" />
            </div>
            <div>
              <h3>Official Address</h3>
              <p>504 White St . Dawsonville, GA 30534, <br /> New York</p>
            </div>
          </article>

          <article>
            <div>
              {" "}
              <BsEnvelope className="Footer__ICONS"/>
            </div>
            <div>
              <h3>Email Us</h3>
              <p>info@techsolllc.net</p>
            </div>
          </article>

          <article>
            <div>
              {" "}
              <IoCallOutline className="Footer__ICONS"/>
            </div>
            <div>
              <h3>Call us</h3>
              <p>+817 678 2492​​</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Footer;
