import { useState } from "react";
import "./contactform.css";
import { FaFacebookF } from "react-icons/fa";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    <div className="Container__Contact__Form">
      <div className="contact_Form">
        <h3>Get In Touch.</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name" 
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
            <li><a href=""><FaFacebookF className="Contact__Social__Icons"/></a></li>
            <li><a href=""><FaFacebookF className="Contact__Social__Icons"/></a></li>
            <li><a href=""><FaFacebookF className="Contact__Social__Icons"/></a></li>
            <li><a href=""><FaFacebookF className="Contact__Social__Icons"/></a></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
