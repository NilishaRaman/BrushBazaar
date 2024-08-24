

// import React from "react";
// import './ImageText.css'

// const ImageText = () => {
//     return (
//       <div className="image-container">
//         <img src={require('./images/image.jpeg')} alt="img" />
//         <div className="text-overlay">
//         Art is a mirror of the soul. It reflects what we are and what we aspire to be. It is a way of expressing ourselves without words, a way of connecting with others on a deeper level. It is a way of finding meaning in the world.
          
//         </div>
        
//       </div>
//     );
//   };
  
//   export default ImageText;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import image from './images/image.jpeg'
import image1 from './images/caraousel-img-1.jpg';
import image2 from './images/carousel-img-2.jpg';
import image3 from './images/blog-pic-9.jpg';


const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
      <div>
          <img src={image} alt="Slide 1" />
          <div className="text-overlay">
            <p>Art is a mirror of the soul.</p>
          </div>
        </div>
        
        <div>
          <img src={image1} alt="Slide 1" />
          <div className="text-overlay">
            <p>Art is a mirror of the soul.</p>
          </div>
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
          <div className="text-overlay">
            <p>It reflects what we are and what we aspire to be.</p>
          </div>
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
          <div className="text-overlay">
            <p>It is a way of expressing ourselves without words.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;