import "./Footer.css";
import { Link } from "react-router-dom";


import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
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
              <a href="#">
              <FaFacebook />{" "}
              </a>
            </li>
            <li>
            <a href="#">
              <BsTwitterX />{" "}
              </a>
            </li>
            <li>
              <a href="#">
              <TbBrandFiverr />{" "}
              
              </a>
            </li>
            <li><a href="">
            <FaLinkedin />{" "}
              </a>
            </li>
           
          </ul>
        </article>

        <article className="Recent__Footer">
    <h3>Services</h3>
          <ul>

           <Link to="/"><li>UI/UX design</li></Link>
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
