import { useState } from "react";
import "./contactform.css";
import { SiUpwork } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });
console.log(formData);
  const handleFormData = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div path="ContainerFrom" className="Container__Contact__Form">
      <div className="contact_Form">
        <h3>Get In Touch.</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name" 
            onChange={handleFormData}
          />
          <input type="text"
           name="subject"
            placeholder="Subject"
            onChange={handleFormData}
             />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleFormData}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={handleFormData}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="Contact__Info">
        <div className="Contact__Content">
          <h3>Contact Info.</h3>
          <h4>Lets Talk.</h4>
          <p>info@techsolllc.net</p>
          <p>+817 678 2492​​</p>
          <h4>Visit Us.</h4>
          <p>2092 Idlewood Drive, Grapevine, TX 76051​</p>

          <ul className="Contact__Social">
            <li><a href=""><FaFacebook className="Contact__Social__Icons"/></a></li>
            <li><a href=""><SiUpwork className="Contact__Social__Icons"/></a></li>
            <li><a href=""><IoLogoGithub className="Contact__Social__Icons"/></a></li>
            <li><a href=""><TbBrandFiverr className="Contact__Social__Icons"/></a></li>
            <li><a href=""><FaXTwitter className="Contact__Social__Icons"/></a></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
