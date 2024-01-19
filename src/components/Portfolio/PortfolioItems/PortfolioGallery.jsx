// PortfolioGallery.jsx (updated)
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../PortfolioItems/portfoliostyles.css";
import GalleryItem from "./GalleryItem";

const PortfolioGallery = ({ items }) => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? items
      : items.filter(
          (item) => item.categories && item.categories.includes(filter)
        );

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleTagClick = (tag) => {
    setFilter(tag);
  };

  return (
    <div className="portfolio-gallery">
      <div className="Real__Port_Headings">
        <h3>PORTFOLIO</h3>
        <h2>
          Our Recent Web Design &<br />
          Some Past Projects.
        </h2>
      </div>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("all")}>
          All <GoDotFill className="Port_Icon" />
        </button>
        <button onClick={() => handleFilterChange("uiuxdesign")}>
          UI UX DESIGN <GoDotFill className="Port_Icon" />
        </button>
        <button onClick={() => handleFilterChange("logodesign")}>
          LOGO DESIGN <GoDotFill className="Port_Icon" />
        </button>
        <button onClick={() => handleFilterChange("development")}>
          DEVELOPMENT <GoDotFill className="Port_Icon" />
        </button>
        <button onClick={() => handleFilterChange("branding")}>BRANDING</button>
        {/* Add more buttons for additional categories */}
      </div>

      <TransitionGroup className="cotegories">
        {filteredItems.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <GalleryItem item={item} onTagClick={handleTagClick} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PortfolioGallery;
