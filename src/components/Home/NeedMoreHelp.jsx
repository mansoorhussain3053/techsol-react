import "./needmorehelp.css";
import { Link } from "react-router-dom";
const NeedMoreHelp = () => {
  return (
    <div className="Need__Parent">

      <div className="Need__Heading">
        <h3>LETS TALK </h3>
        <h2><span>ABOUT YOUR</span> NEXT PROJECT</h2>
      </div>

      <div className="Need__Button">
      <Link to="/contact"><button>Get in touch</button></Link>
        </div>
    </div>
  );
};

export default NeedMoreHelp;
