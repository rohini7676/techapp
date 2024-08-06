import React, { useState } from 'react';
import tech1 from './title2/tech1.jpg';
import tech2 from './title2/tech2.jpg';
import tech3 from './title2/tech3.jpg';
import tech4 from './title2/tech4.jpg';
import tech5 from './title2/tech5.webp';
import background from './sciback2.jpeg'; // Ensure you have the background image imported
import { Link } from 'react-router-dom';

const posts = [
  {
    title: <Link to ="/techblog1">'UCLA Unveils Breakthrough 3D Imaging Technology to Peer Inside Objects'</Link>,
    date: 'August 1, 2024',
    author: 'SPIE--International Society for Optics and Photonics',
    image: tech1,
    description: 'Artistic depiction of a wavelength-multiplexed diffractive optical processor for 3D quantitative phase imaging. Credit: Ozcan Lab @ UCLA',
  },
  {
    title: <Link to ="/techblog2">'Revolutionizing Wireless Power: Scientists Achieve Breakthrough in Long-Distance Charging Efficiency'</Link>,
    date: 'October 16, 2023',
    author: 'Aalto University',
    image: tech2,
    description: 'New research now suggests that by harnessing the power of radiation suppression in the loop antennas, not only can devices be charged over significantly longer distances with over 80% efficiency, but also in various orientations, paving the way for a new era of wireless power transfer applicable to a myriad of devices, from mobile gadgets to biomedical implants.',
  },
  {
    title: <Link to ="/techblog3"> 'Hunting Cosmic Blobs: New AI Program Unveils Elusive Plasmoids'</Link>,
    date: 'July 29, 2024',
    author: 'Princeton Plasma Physics Laboratory',
    image: tech3,
    description: 'Researchers at the Princeton Plasma Physics Laboratory have developed a machine learning program to detect plasmoids in outer space, which could significantly improve our understanding of magnetic reconnection—a phenomenon that affects satellites and the power grid.',
  },
  {
    title:<Link to ="/techblog4"> 'Weaving Light: Unraveling the Quantum Lattice of Kagome Metals'</Link>,
    date: 'August 1, 2024',
    author: 'Amy Walden, Florida State University',
    image: tech4,
    description: 'A diagram of the Kagome metal cesium vanadium antimonide showing plasmon waves moving through the material. Credit: Guangxin Ni',
  },
  {
    title: <Link to ="/techblog5">'Scientists Discover New Class of Semiconductor Nanocrystals'</Link>,
    date: 'August 2, 2024',
    author: 'Naval Research Laboratory',
    image: tech5,
    description: 'U.S. Naval Research Laboratory scientists have identified a new class of semiconductor nanocrystals with bright ground-state excitons, potentially revolutionizing light-emitting devices.',
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
    maxWidth: '300px',
    maxHeight: '300px',
    marginRight: '20px',
    borderRadius: '5px',
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

function Example2() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.scienceTitle}>TECHNOLOGY</h1>
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
                  <span>{post.date}</span> | By {post.author}
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

export default Example2;
