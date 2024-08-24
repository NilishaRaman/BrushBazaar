import React from 'react';
import './Painter_section.css';
import canvas from './images/canvas.jpg'
import canvas2 from './images/canvas2.jpg'

const PainterSection = () => {
  return (
    <div className="painter-section">
      <div className="content">
        <h1>Top Painters</h1>
        <h2>The Canvas of Imagination</h2>
        <p>
          Explore the vibrant world of our most celebrated painters. Their brushstrokes 
          capture emotions, landscapes, and ideas, bringing color and life to canvas. 
          From impressionist masterpieces to contemporary abstracts, these artists 
          push the boundaries of visual expression, inspiring viewers and fellow creators alike.
        </p>
        <div className="stats">
          <div className="stat-item">
            <span className="stat-value">80k</span>
            <span className="stat-label">ARTWORKS CREATED</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">3k</span>
            <span className="stat-label">EXHIBITIONS</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">283k</span>
            <span className="stat-label">PAINT TUBES USED</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">14k</span>
            <span className="stat-label">GALLERY VISITORS</span>
          </div>
        </div>
      </div>
      <div className="image-section">
      <img src={canvas} alt="canvas"  height={320} width={300}/>
      <img src={canvas2} alt="canvas"  height={320} width={300}/>
      </div>
    </div>
  );
};

export default PainterSection;