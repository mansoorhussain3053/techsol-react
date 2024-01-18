// GalleryItem.jsx (updated)
import React from 'react';
import '../PortfolioItems/portfoliostyles.css';
import { MdArrowRightAlt } from "react-icons/md";


const GalleryItem = ({ item, onTagClick }) => {
  return (
    <div className="gallery-item">
      <div className='Item__Image'>
        <img src={item.imageUrl} alt={item.title} />
      </div>

      <div className="item-details">
        <h3>{item.subtitle}</h3>
        <h2>{item.title}</h2>
        <p>{item.description}</p>

        {item.tags && Array.isArray(item.tags) && (
          <div className="tags">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="tag"
                onClick={() => onTagClick(tag)}
              >
                 {tag}
              </span>
            ))}
          </div>
        )}

        <button>{item.buttonText} <MdArrowRightAlt className='SeeMore_Icon'/></button>
      </div>
    </div>
  );
};

export default GalleryItem;
