import React, { useState } from 'react';
import sci1 from './title1/science1.jpg';
import sci2 from './title1/science2.webp';
import sci3 from './title1/science3.jpg';
import sci4 from './title1/science4.webp';
import sci5 from './title1/science5.webp';
import background from './sciback2.jpeg'; // Ensure you have the background image imported
import { Link } from 'react-router-dom';

const posts = [
  {
    title: <Link to = "/sciblog1">'Ancient Mystery Deepens With Discovery of Denisovan Remains in Tibetan Cave'</Link>,
    date: 'JUN 12, 2024',
    author: 'RATNESHWAR THAKUR',
    image: sci1,
    description: 'Researchers have found more Denisovan remains in a cave in Tibet, providing new insights into the mysterious hominins.',
  },
  {
    title: <Link to = "/sciblog2">'Scientists Have Discovered the New Most Efficient Solar Energy System in the World - and It Wasn`t Created by Humans'</Link>,
    date: 'JULY 31, 2024',
    author: 'Yale University',
    image: sci2,
    description: 'Researchers from Yale have identified giant clams, with their unique photosynthetic structures and light-scattering capabilities, as a potential model for improving solar panel efficiency.',
  },
  {
    title: <Link to = "/sciblog3">'Is Consciousness Continuous? A New Study Challenges Old Notions'</Link>,
    date: 'JULY 30, 2024',
    author: 'Ruhr-University Bochum',
    image: sci3,
    description: 'A new research method proposes analyzing behavioral changes and learning spikes to study consciousness, using these sudden increases in learning— “Eureka moments”—to pinpoint conscious cognitive processes and explore brain mechanisms during these periods.',
  },
  {
    title: <Link to = "/sciblog4">'Moderate Drinking Myths Debunked: The Surprising Truth About Your Daily Glass of Wine'</Link>,
    date: ' July 30, 2024',
    author: 'Journal of Studies on Alcohol and Drugs',
    image: sci4,
    description: 'Flawed studies have led to the belief that moderate drinking is healthy. Better research shows no longevity benefits and highlights health risks like cancer. Misconceptions like the “French paradox” persist, but no safe alcohol level exists.',
  },
  {
    title:  <Link to = "/sciblog5">'Challenging the Norm: New Solar Cell Model Surpasses 80-Year-Old Equation'</Link>,
    date: ' July 30, 2024',
    author: 'Swansea University',
    image: sci5,
    description: 'A new model from Swansea and Åbo Akademi universities improves thin-film solar cell efficiency. It addresses the limitations of the traditional Shockley diode equation, optimizing electricity collection and minimizing recombination losses.',
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

function Example() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.scienceTitle}>SCIENCE</h1>
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

export default Example;
