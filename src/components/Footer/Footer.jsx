import "./Footer.css";
import { CiLocationOn } from "react-icons/ci";

import { BsEnvelope } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


import { SiUpwork } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
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
           
          </ul>
        </article>

        <article className="Recent__Footer">
    <h3>Services</h3>
          <ul>

           <Link to="/"> <li>UI/UX design</li></Link>
            <Link to="/services"><li>Web development</li></Link>
            <Link to="/portfolio"><li>Digital marketing</li></Link>
            <Link to="/about"><li>App development</li></Link>
          </ul>
        </article>

        <article className="Recent__Footer">
<h3>Contact Us</h3>
          <ul>
           <li>817 678 2492</li>
            <li>info@techsolllc.net</li>
            <li>2092 Idlewood Drive, <br />Grapevine TX
</li>
            
          </ul>
        </article>

        <article className="Contact__Footer">
        <h3>Subscribe</h3>

        <div>
          <form>
          <input type="email" name="subscribe" id="" placeholder="example@gmail.com" />
          <button type="submit">Send</button>
          <p>Subscribe to get weekly updates and amazing offers on our services!</p>
          </form>
        </div>
          
        </article>



      </div>
      <p className="Copy__Para">Copyright © 2024 Techsol LLC. All rights reserved.</p>
    </div>
  );
};

export default Footer;
