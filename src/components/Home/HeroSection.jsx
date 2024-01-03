import "./herosection.css";
import Logo1 from "../../assets/logo1.webp";
import Logo2 from "../../assets/logo2.webp";
import Logo3 from "../../assets/logo3.webp";
import Logo4 from "../../assets/logo4.webp";
import Logo5 from "../../assets/logo5.webp";
import Logo6 from "../../assets/logo6.webp";
import Logo7 from "../../assets/logo7.webp";
import Logo8 from "../../assets/logo8.webp";
import Logo9 from "../../assets/logo9.webp";
import Logo10 from "../../assets/logo10.webp";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="Container__Hero">
        <div className="Hero__Headings">
          <h1>Trusted by the world’s most established brands.</h1>
          <h2>
            Magnis vehicula at parturient ullamcorper velit lobortis viverra
            justo felis metus aliquam
          </h2>
        </div>
        <div className="Hero__Buttons">
          <div>
            <button className="Button1-2 Buttons-btn1">Learn More</button>
          </div>
          <div>
            <button className="Button1-2 Buttons-btn2">Learn More</button>
          </div>
        </div>
      </div>
      <div className="Container__Customers">
        <div>
          <h2>
            Join our 14,000+ happy customers
          </h2>
        </div>
        <div className="Customers__Logos">
          <div>
            <img src={Logo1} />
          </div>
          <div>
            <img src={Logo2} />
          </div>
          <div>
            <img src={Logo3} />
          </div>
          <div>
            <img src={Logo4} />
          </div>
          <div>
            <img src={Logo5} />
          </div>
          <div>
            <img src={Logo6} />
          </div>
          <div>
            <img src={Logo7} />
          </div>
          <div>
            <img src={Logo8} />
          </div>
          <div>
            <img src={Logo9} />
          </div>
          <div>
            <img src={Logo10} />
          </div>
        </div>
      </div>
      <div className="Container__Color"></div>
    </div>
  );
};

export default HeroSection;
