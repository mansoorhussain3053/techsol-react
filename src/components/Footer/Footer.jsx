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
        <article className="Logo__Footer">
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
        </article>

        <article className="Recent__Footer">
    <h3>Services</h3>
          <ul>

           <Link to="/"> <li>Home</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/portfolio"><li>Portfolio</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
          </ul>
        </article>

        <article className="Recent__Footer">
<h3>Contact Us</h3>
          <ul>
           <Link to="/"> <li>Home</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/portfolio"><li>Portfolio</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact Us</li></Link>
          </ul>
        </article>

        <article className="Contact__Footer">
        <h3>Subscribe</h3>

        <div>
          <form>
          <input type="email" name="subscribe" id="" placeholder="example@gmail.com" />
          <button type="submit">Send</button>
          </form>
        </div>
          
        </article>



      </div>
    </div>
  );
};

export default Footer;
