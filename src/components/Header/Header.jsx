import "./header.css";
import Logo from "../../assets/techlogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";




const Header = () => {

  return (
    <div className="Container__Header">
      <div className="Header__Main">
        <div className="Header__Logo">
          <img src={Logo} alt="" />
        </div>
        <div className="Parent__Nav">
          <div className="Header__Nav">
            <ul className="Nav__Lists">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="Header__Button">
            <button className="Main__Button">Get Started</button>
          </div>

          <div className="Header__Socials">
            <ul className="Social__Lists">
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoLogoTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
