
import React, { useState } from 'react';
import  './Testimonials.css';
import review1 from './images/Nilisha_Kumari.jpg';
import review2 from './images/saumya.jpeg';
import review3 from './images/somya.jpeg';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Nilisha Raman',
      image: review1, // Place your image in the public/images folder
      testimonial: 'This page is a masterpiece this page is the best I have seen.',
      rating: 5,
    },
    {
      name: 'Somya Singh',
      image: review3, // Place your image in the public/images folder
      testimonial: 'I am blown away by this page.This page is truly exceptional.',
      rating: 4,
    },
    {
      name: 'Saumya Pandey',
      image: review2, // Place your image in the public/images folder
      testimonial: 'The layout of this page is visually appealing and well-organized.The navigation on this page is intuitive and easy to use..',
      rating: 3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <p>

"This page is a masterpiece."
"I'm blown away by this page."
"This page is truly exceptional."
"This page is the best I've seen."</p>
      <div className="testimonial-carousel">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.testimonial}</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
      <button
        className="prev-button"
        onClick={handlePrevClick}
        aria-label="Previous Testimonial"
      >
        &#8249;
      </button>
      <button
        className="next-button"
        onClick={handleNextClick}
        aria-label="Next Testimonial"
      >
        &#8250;
      </button>
    </section>
  );
};

export default Testimonials;
