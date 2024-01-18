// GalleryItem.jsx (unchanged)

// PortfolioGallery.jsx
import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import './portfolio.css'

const PortfolioGallery = ({ items }) => {
  const [filter, setFilter] = useState('all');

  const filteredItems =
    filter === 'all' ? items : items.filter((item) => item.category === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="portfolio-gallery">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('category1')}>Category 1</button>
        <button onClick={() => handleFilterChange('category2')}>Category 2</button>
        {/* Add more buttons for additional categories */}
      </div>
      {filteredItems.map((item, index) => (
        <GalleryItem key={index} item={item} />
      ))}
    </div>
  );
};

export default PortfolioGallery;
