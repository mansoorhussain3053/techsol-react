// GalleryItem.jsx
import '../PortfolioItems/portfoliostyles.css'
const GalleryItem = ({ item }) => {
  return (
    <div className="gallery-item">
      <img src={item.imageUrl} alt={item.title} />
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;