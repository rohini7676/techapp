import React, { useState } from 'react';
import image1 from './title3/space1.jpg';
import image2 from './title3/space2.jpg';
import image3 from './title3/space3.jpg';
import image4 from './title3/space4.jpg';
import image5 from './title3/space5.jpg';
import background from './sciback2.jpeg'; // Ensure you have the background image imported
import { Link } from 'react-router-dom';

const posts = [
  {
    image: image1,
    title: <Link to="/spaceblog1">'WIYN 3.5-meter telescope at Kitt Peak discovers extremely strange orbit of rare exoplanet'</Link>,
    date: 'August 3, 2024',
    author: 'Alison Sweeney',
    description: 'An exoplanet’s elongated, backwards orbit holds clues to the formation history and future trajectories of high-mass gas giants.',
  },
  {
    image: image2,
    date: 'August 2, 2024',
    title: <Link to="/spaceblog2">'Astronomers Detect Potential Dark Matter Objects in Space Using Pulsars'</Link>,
    description: '“Science has developed very precise methods to measure time,” said the astronomer behind the research, Professor John LoSecco, of the University of Notre Dame, who recently presented his findings at the National Astronomy Meeting at the University of Hull.',
  },
  {
    image: image3,
    title: <Link to="/spaceblog3"> 'NASA’s Solar Dynamics Observatory Chronicles Major Flare Event'</Link>,
    date: 'July 30, 2024',
    author: 'ROHAN J. KHADILKAR',
    description: 'NASA’s Solar Dynamics Observatory recorded a significant X1.5 solar flare on July 28, 2024.',
  },
  {
    image: image4,
    title:  <Link to="/spaceblog4">'PLATO Exoplanet Hunter Begins Search for Another Earth in 2026'</Link>,
    date: 'August 3, 2024',
    author: 'BUDDHADITYA MUKHERJEE',
    description: 'This telescope is designed to search for Earth-like rocky planets around Sun-like stars that might be habitable.',
  },
  {
    image: image5,
    date:  'July 29, 2024',
    title:<Link to="/spaceblog5">'Cosmic Oddity: Rare Second-Gen Star Found Beyond the Milky Way'</Link> ,
    description: 'New hints about the origins of the universe’s elements have been revealed by stars from the Large Magellanic Cloud.',
  },
];

const styles = {
  root: {
    minHeight: '100vh', // Ensure full viewport height
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '20px',
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#f0f0f0', // Optional: if you want a background color on the container
    padding: '20px',
    borderRadius: '10px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  scienceTitle: {
    fontSize: '3em',
    color: '#333',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  image: {
    width: '150px',  // Set consistent width
    height: '150px', // Set consistent height
    marginRight: '20px',
    borderRadius: '5px',
    objectFit: 'cover', // Ensure the image covers the specified dimensions
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemTitle: {
    color: '#007bff',
    fontSize: '1.5em',
    margin: '0 0 10px 0',
  },
  meta: {
    color: '#555',
    marginBottom: '10px',
  },
  description: {
    color: '#666',
    fontSize: '1em',
  },
};

function Space() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.scienceTitle}>SPACE</h1>
        </div>
        <div style={styles.list}>
          {posts.map((post, index) => (
            <div
              key={index}
              style={{
                ...styles.item,
                transform: hoverIndex === index ? 'scale(1.02)' : 'scale(1)',
                boxShadow: hoverIndex === index ? '0 0 15px rgba(0, 0, 0, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {post.image && <img src={post.image} alt={post.title} style={styles.image} />}
              <div style={styles.content}>
                <h3 style={styles.itemTitle}>{post.title}</h3>
                <p style={styles.meta}>
                  <span>{post.date}</span> | By {post.author || 'Unknown Author'}
                </p>
                <p style={styles.description}>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Space;
