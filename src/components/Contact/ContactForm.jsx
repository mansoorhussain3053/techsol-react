import { useState } from "react";
import "./contactform.css";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    services: "",
    budget: "", 
    deadline: "",
    subject: "contact us",
  });
  const data = new FormData();
  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("message", formData.message);
  data.append("phone", formData.number);
  data.append("services", formData.services);
  data.append("budget", formData.budget);
  data.append("deadline", formData.deadline);
  data.append("subject", formData.subject);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    fetch("https://techsolllc.net/api/", {
      // headers: {
      //   "Content-Type": "application/json",
      // },
      method: "POST",
      body: data,
    })
      .then((res) => {
        if (!res.ok) {
          console.log("ERROR");
        }
        return res.json();
      })
      .then((res) => {
        setFormData({
          name: "",
          budget: "",
          deadline: "",
          email: "",
          message: "",
          subject: "",
          number: "",
          services: "",
        });
      });
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value) => {
    value = value.replace(/[^\d]/g, ""); // Remove non-numeric characters

    if (value.length >= 3) {
      // Format the first three characters within small brackets
      value = `(${value.substring(0, 3)})${value.substring(3)}`;
    }

    return value;
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };
 
  return (
    <div path="ContainerFrom" className="Container__Contact__Form">
      <div className="contact_Form">
        <h3>Get In Touch.</h3>
        <form onSubmit={handleSubmitForm}>
          <div className="Aligning-Fields">
            <input
              type="text"
              name="name"
              placeholder="Name"
              minlength={5}
              maxLength={20}
              onChange={handleFormData}
              value={formData.name}
               required/>

            <input
              type="text"
              id="phoneNumber"
              name="number"
              required
              placeholder="Number"
              value={phoneNumber}
              onChange={handleInputChange}
              maxLength="13"
            />
          </div>
          <div className="Aligning-Fields">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleFormData}
              value={formData.email}
            />
            <select name="services" id="cars" onChange={handleFormData} required>
              <option value="Select">Select the Service</option>
              <option value="Web Development">Web Development</option>
              <option value="graphic design">Graphic Design</option>
              <option value="social media management">
                Social Media Management
              </option>
              <option value="app development">App Development</option>
            </select>
          </div>

          <select
            name="budget"
            id="budgets"
            onChange={handleFormData}
            value={formData.budget}
             required>
            <option value="Select">My Budget is ----</option>
            <option value="minimum">$500 - $1,000</option>
            <option value="medium">$1,001 - $1,500</option>
            <option value="maximum">$1,501 - $2,000</option>
            <option value="morethan">More than $2,000</option>
          </select>

          <select
            name="deadline"
            id="deadlines"
            onChange={handleFormData}
            value={formData.deadline}
             required>
            <option value="deadlinetime">I need it done in</option>
            <option value="onemonth">Less than a Month</option>
            <option value="threemonths">1-2 Months</option>
            <option value="fourmonths">3-4 Months</option>
            <option value="fivemonths">More than 5 Months</option>
          </select>

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={handleFormData}
            value={formData.message}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="Contact__Info">
        <div className="Contact__Content">

          <h3>Contact Info.</h3>

<article>
          <h4>Lets Talk.</h4>
          <p>info@techsolllc.net</p>
          <p>+817 678 2492​​</p>
          </article>


          <article>
          
          <h4>Visit Us.</h4>
          <p>2092 Idlewood Drive, Grapevine, TX 76051​</p>
          </article>

          <ul className="Contact__Social">
            <li>
              <a href="">
                <FaFacebook className="Contact__Social__Icons" />
              </a>
            </li>
            <li>
              <a href="">
                <BsTwitterX className="Contact__Social__Icons" />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin className="Contact__Social__Icons" />
              </a>
            </li>
            <li>
              <a href="">
                <TbBrandFiverr className="Contact__Social__Icons" />
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
