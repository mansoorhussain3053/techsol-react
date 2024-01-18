// GalleryItem.jsx (unchanged)

// PortfolioGallery.jsx
import React, { useState } from "react";
import '../PortfolioItems/portfoliostyles.css'
import GalleryItem from "./GalleryItem";

const PortfolioGallery = ({ items }) => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.category === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="portfolio-gallery">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("uiuxdesign")}>
          UI UX DESIGN
        </button>
        <button onClick={() => handleFilterChange("logodesign")}>
          LOGO DESIGN
        </button>
        <button onClick={() => handleFilterChange("development")}>
          DEVELOPMENT
        </button>
        <button onClick={() => handleFilterChange("branding")}>
          BRANDING
        </button>

        {/* Add more buttons for additional categories */}
      </div>
      <div className="cotegories">
        {filteredItems.map((item, index) => (
          <GalleryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
