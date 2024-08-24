import React from 'react';
import './BlogPosts.css';
import blog1 from'./images/blog-pic-1.jpg'
import blog2 from './images/blog-pic-2.jpg'
import blog3 from './images/blog-pic-3.jpg'
import blog4 from './images/blogpost-pic-4.jpg'
import blog5 from './images/blog-pic-5.jpg'
import blog6 from './images/blog-pic-6.jpg'
import blog7 from './images/blog-pic-7.jpg'
import blog8 from './images/blog-pic-8.jpg'
import blog9 from './images/blog-pic-9.jpg'


const blogData = [{
    id: 1,
    title:
      '10 Major Painting Movements —From Realism to Abstract Paintings',
    image: blog1,
    content:
      'Paintings are among the most expressive and ancient types of art. They have changed over time to reflect the varying ideologies, cultures, and tastes of many nations. In this article, we will explore the best 10 painting styles that are considered one of the greatest painting philosophies that have impacted art history and society.',
  },
  {
    id: 2,
    title: '10 Most Popular Art Styles You Must Know About',
    image: blog2,
    content:
      'Indian paintings are one of the most popular and oldest paintings as they depict the various traditions, cultures, and religions in the country. Moreover, Indian paintings are a reflection of the nation\'s rich history, mythology, and legacy as well as the influences of several dynasties, regions, and artistic movements. We\'ll look at a few Indian painting genres in this article that highlight the variety and depth of Indian culture.',
  },
  {
    id: 3,
    title: '13 Diverse Artistic Styles: The History and Art of Painting',
    image: blog3,
    content:
      'Painting is one of the most varied and ancient forms of artistic expression. There is a variety of styles in painting and art forms which produces several unique perceptions when you look into them. These paintings when added to your interior spaces, give the walls an appealing look and also connect you to a different world whenever you look at these paintings. In this article, we will explore all the 13 distinct and amazing painting styles, along with their histories, traits, and illustrations.',
  },
  {
    id: 4,
    title: 'You should be familiar with these 12 distinguished oil paintings',
    image: blog4,
    content:
      'When we think about canvas, the only period that comes to mind is the latter half of the 15th century, when it was approved. Previously, the canvas had not been used because all painters had been utilizing wood panels, but due to its simplicity of movement and value, people preferred to use it.  During the Renaissance, painters painted their portraits, and their work encompassed a broad variety of subjects. Artists created bizarre, cryptic, and complicated paintings, which gained worldwide attention at the time.',
  },    
  { 
    id: 5,
    title: '10 World-famous portraits to inspire you',
    image: blog5,
    content:
      'o many world’s greatest artists possessed a rare opportunity to collect the aspect of human feeling in a brief portrait. These painters frequently explored human biology in incredible detail so that they could thoroughly gain a better understanding of each minute shift of emotion, that they depicted in their works of art.',
  },    
  {
    id: 6,
    title: '10 Influential Self Portraits That Changed the Face of Art',
    image: blog6,
    content:
      'Almost every artist, from novice to expert, has tried a self-portrait at a certain point throughout their career. The adaptability of this genre is demonstrated by famous self-portraits done by the most significant personalities throughout the history of art.',
  },    
  {
    id: 7,
    title: 'Serenity in Indian Landscape Art',
    image: blog7,
    content:
      'When we think about canvas, the only period that comes to mind is the latter half of the 15th century, when it was approved. Previously, the canvas had not been used because all painters had been utilizing wood panels, but due to its simplicity of movement and value, people preferred to use it.  During the Renaissance, painters painted their portraits, and their work encompassed a broad variety of subjects. Artists created bizarre, cryptic, and complicated paintings, which gained worldwide attention at the time.',
  },    
  {
    id: 8,
    title: '2023 Top Five painting online art ideas - worth to consider to buy paintings for living room',
    image: blog8,
    content:
      'When we think about canvas, the only period that comes to mind is the latter half of the 15th century, when it was approved. Previously, the canvas had not been used because all painters had been utilizing wood panels, but due to its simplicity of movement and value, people preferred to use it.  During the Renaissance, painters painted their portraits, and their work encompassed a broad variety of subjects. Artists created bizarre, cryptic, and complicated paintings, which gained worldwide attention at the time.',
  }, 
  {
    id: 9,
    title: 'Great reasons to convince yourself in buying Indian Art Online',
    image: blog9,
    content:
      'Millions are spent daily in the auction market in purchasing pieces of arts around the world and the amount of money spent in acquiring these works is mind blowing.',
  },    
 
  

];

const BlogPosts = () => {
    return (
      <main className="blog-posts">
        {blogData.map((post, index) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </main>
    );
  };
  
  const BlogPost = ({ title, image, content }) => {
    return (
      <article className="blog-post">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="read-more">READ MORE</button>
      </article>
    );
  };

export default BlogPosts;