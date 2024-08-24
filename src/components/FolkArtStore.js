
import React from 'react';
import './FolkArtStore.css';
import book1 from './images/folk-art-book-1.png';
import book2 from './images/folk-art-book-2.png';
import book3 from './images/folk-art-book-3.png';
import book4 from './images/folk-art-book-4.png';
import book5 from './images/folk-art-book-5.png';

const FolkArtstore = () => {

  const handleViewMore = (href) => {
    if (href) {
      window.open(href, '_blank');
    }
  };

  return (
    <div className="folk-art-bookstore">
      <h1>Folk Art Bookstore</h1>
      <p className="subtitle">Discover stories woven with tradition</p>
      
      <div className="book-gallery">
        {[
          {
            href:'https://notionpress.com/read/a-tapestry-of-tales',
            title: "The Tapestry of Tales",
            author: "Emma Stitchworth",
            image:book1 
          },
          {
            href:'https://www.dreame.com/story/3918093312--Whispers-of-the-Willow-Tree-',
            title: "Whispers of the Loom",
            author: "Liam Threadgood",
            image: book2
          },
          {
            href:'https://books.google.co.in/books/about/Crafting_Heritage_A_Journey_through_Indi.html?id=1MH6EAAAQBAJ&redir_esc=y',
            title: "Patterns of the Past ",
            author: "Sophia Craftwell",
            image: book3
          },
          {
            href:'https://artconnectionusa.com/marcus-botbol-a-fusion-of-culture-color-and-creativity/',
            title: "Colors of Heritage",
            author: "Marcus Brushstrokes",
            image: book4
          },
          {
            href:'https://www.memeraki.com/products/echoes-of-tradition-in-crewel-embroidery-by-jahangir-ahmed-bhat?srsltid=AfmBOooTc8sRebi_bgZxnHuC7Ju5QexLEOxWT-uS2b9eCE22yU85YDf6',
            title: "Echoes in Embroidery",
            author: "Isabel Needleworth",
            image: book5
          }
        ].map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p className="description">A journey through folk traditions and artistry</p>
            <div className="button-container">
              <button className="view-more" onClick={() => handleViewMore(book.href)}>View Tapestry</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolkArtstore;
