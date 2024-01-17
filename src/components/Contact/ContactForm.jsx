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
              onChange={handleFormData}
              value={formData.name}
            />
            <input
              type="text"
              name="number"
              placeholder="Number"
              onChange={handleFormData}
              value={formData.number}
            />
          </div>
          <div className="Aligning-Fields">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleFormData}
              value={formData.email}
            />
            <select name="services" id="cars" onChange={handleFormData}>
              <option value="Select">Select the Service</option>
              <option value="Web Development">Web Development</option>
              <option value="graphic design">Graphic Design</option>
              <option value="social media management">
                Social Media Management
              </option>
              <option value="app development">App Development</option>
            </select>
          </div>
          <input
            type="text"
            name="budget"
            placeholder="150$ - 1000$"
            onChange={handleFormData}
            value={formData.budget}
          />
          <input
            type="text"
            name="deadline"
            placeholder="Enter Your Deadline"
            onChange={handleFormData}
            value={formData.deadline}
          />
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
          <h4>Lets Talk.</h4>
          <p>info@techsolllc.net</p>
          <p>+817 678 2492​​</p>
          <h4>Visit Us.</h4>
          <p>2092 Idlewood Drive, Grapevine, TX 76051​</p>

          <ul className="Contact__Social">
            <li>
              <a href="">
                <FaFacebook className="Contact__Social__Icons" />
              </a>
            </li>
            <li>
              <a href="">
                <SiUpwork className="Contact__Social__Icons" />
              </a>
            </li>
            <li>
              <a href="">
                <IoLogoGithub className="Contact__Social__Icons" />
              </a>
            </li>
            <li>
              <a href="">
                <TbBrandFiverr className="Contact__Social__Icons" />
              </a>
            </li>
            <li>
              <a href="">
                <FaXTwitter className="Contact__Social__Icons" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
