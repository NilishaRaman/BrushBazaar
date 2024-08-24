import React from 'react';
import './CollectionSection.css';
import abstractHarmonyImage from './images/abstract.jpg';
import sunset from './images/sunset.jpg';
import whispering from './images/whispering.jpg';
import vase from './images/vase.png';
import starry from './images/starry.jpg';
import bloom from './images/bloom.jpg';
import harmony from './images/harmony.jpg';
import city from './images/city.jpg';
import forest from './images/forest.jpg';
import love from './images/love.jpg';
import sea from './images/sea.jpg';
import flame from './images/flame.jpg';
import { useCart } from './CartContext';



const products = [
  {
    id: 1,
    name: "Sunset Serenity",
    image: sunset,
    price: 299.99,
    artist: "Emma Johnson",
    artistBio: "Contemporary landscape artist known for vibrant colors.",
    category: "Painting"
  },
  {
    id: 2,
    name: "Abstract Harmony",
    image: abstractHarmonyImage,
    price: 399.99,
    artist: "Michael Chen",
    artistBio: "Award-winning abstract artist with a unique geometric style.",
    category: "Painting"
  },
  {
    id: 3,
    name: "Rustic Vase",
    image: vase,
    price: 79.99,
    artist: "Sarah Crafts",
    artistBio: "Skilled potter specializing in traditional techniques.",
    category: "Handicraft"
  },
  {
    id: 4,
    name: "Abstract Harmony",
    image: harmony,
    price: 399.99,
    artist: "Michael Chen",
    artistBio: "Award-winning abstract artist with a unique geometric style.",
    category: "Painting",
  },
  {
    id: 5,
    name: "Whispering Dunes",
    image: whispering,
    price: 249.99,
    artist: "Sarah Jones",
    artistBio: "Emerging landscape photographer known for her evocative desert scenes.",
    category: "Photography",
  },
  {
    id: 6,
    name: "Crimson Bloom",
    image: bloom,
    price: 199.99,
    artist: "Li Wei",
    artistBio: "Master watercolorist specializing in vibrant floral compositions.",
    category: "Painting",
  },
  {
    id: 7,
    name: "City Symphony",
    image: city,
    price: 499.99,
    artist: "David Lee",
    artistBio: "Acclaimed cityscapes painter capturing the energy and rhythm of urban life.",
    category: "Painting",
  },
  {
    id: 8,
    name: "Tranquil Seascape",
    image: sea,
    price: 799.99,
    artist: "Anna Garcia",
    artistBio: "Renowned seascape painter known for her calming ocean scenes.",
    category: "Painting",
  },
  {
    id: 9,
    name: "Love",
    image:love,
    price: 299.99,
    artist: "John Smith",
    artistBio: "Talented sculptor specializing in creating intricate wood sculptures.",
    category: "Sculpture",
  },
  {
    id:10,
    name: "Starry Night Dreamscape",
    image: starry,
    price: 599.99,
    artist: "Emily Williams",
    artistBio: "Up-and-coming digital artist known for her surreal and dreamlike creations.",
    category: "Digital Art",
  },
  {
    id: 11,
    name: "Eternal Flame",
    image: flame,
    price: 899.99,
    artist: "Peter Miller",
    artistBio: "Established glass artist known for his awe-inspiring sculptures using light and glass.",
    category: "Sculpture",
  },
  {
    name: "Whispers of the Forest",
    image: forest,
    price: 349.99,
    artist: "Liam Carter",
    artistBio: "A nature-inspired artist who blends realism with abstract elements.",
    category: "Oil Painting",
  },

];



const ProductCard = ({ product }) => {
  const { cart, addToCart, loading } = useCart();

  const isInCart = cart.some(item => item.id === product.id);
  const isOutOfStock = product.stock === 0; // Assuming you have a 'stock' property in your product object

  const handleAddToCart = () => {
    if (!isInCart && !isOutOfStock) {
      addToCart(product);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price"> ₹{product.price.toFixed(2)}</p>
      <p className="product-artist">{product.artist}</p>
      <p className="product-bio">{product.artistBio}</p>
      <button 
        className={`purchase-btn ${isInCart ? 'in-cart' : ''} ${isOutOfStock ? 'out-of-stock' : ''}`}
        onClick={handleAddToCart} 
        disabled={loading || isInCart || isOutOfStock}
      >
        {isOutOfStock ? 'Out of Stock' : isInCart ? 'Added to Cart' : loading ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
};

const CollectionSection = () => {
  return (
    <section className="collection-section">
      <h2>Our Collection</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;