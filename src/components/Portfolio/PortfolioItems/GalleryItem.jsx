// GalleryItem.jsx
import '../PortfolioItems/portfoliostyles.css'
const GalleryItem = ({ item }) => {
  return (
    <div className="gallery-item">
      <img src={item.imageUrl} alt={item.title} />
      <div className="item-details">
        <h4>{item.subtitle}</h4>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button>{item.buttonText}</button>
      </div>
    </div>
  );
};

export default GalleryItem;