import React, { useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/techlogo.webp";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { LuAlignCenter } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";


import { Link } from "react-router-dom";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <header className={scrolling ? "scrolling" : ""}>
        <nav>
          <div className="Container__Header">
            <div className="Header__Main">
              <div className="Header__Logo">
                <img src={Logo} alt="" />
              </div>

              <div className="Parent__Nav">
                <div className="Header__Nav">
                  <ul
                    className={`Nav__Lists ${
                      mobileMenuVisible ? "mobile-menu-visible" : ""
                    }`}
                  >
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>

                <div className="Header__Button">
                  <Link to="/contact">
                    <button className="btn Main">Get Started</button>
                  </Link>
                </div>

                <div className="Header__Socials">
                  <ul className="Social__Lists">
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <TbBrandFiverr />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="Header__Toggle" onClick={toggleMobileMenu}>
                <LuAlignCenter className="Toggle__Button" />
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`humBarger ${mobileMenuVisible ? "show" : "hide"}`}
        > 
        

        <div className="Inner__Burger">
            <article className="Hide__Hamburger" onClick={toggleMobileMenu}>
                  <IoMdClose className="Hide-Button"/>
            </article>
       
         <ul className="Ham__Lists">

<li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
          </ul>  
          <article className="HamBut__Button">
                  <Link to="/contact">
                    <button className="btn HamButton">Get Started</button>
                  </Link>
                </article>
          <ul className="Ham__Socials">
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoLogoTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <TbBrandFiverr />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>

          </div>

          </div>
      </header>
    </>
  );
};

export default Header;
