import "./header.css";
import Logo from "../../assets/techlogo.png";
import { RiArrowDropDownLine } from "react-icons/ri";


const Header = () => {
  return (
    <div className="Header__main">
    <div className="Container__Header">
      <div className="header-icon">
        <img src={Logo} />
      </div>
      
      <div className="Header__nav">
        <ul className="Header__nav-lists">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services<RiArrowDropDownLine className="dropdown__icon"/></a>
            <ul className="Drop__Down-lists">
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Web Developing</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Mobile App Developing</a></li>
              <li><a href="#">Social Media Management</a></li>
              </ul>
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
      <div className="Header__button">
        <button>Get Started</button>
      </div>
    </div>
    </div>
  );
};

export default Header;
