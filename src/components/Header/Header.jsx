import "./header.css";
import Logo from "../../assets/techlogo.png";

const Header = () => {
  return (
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
      <div className="Header__button">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
