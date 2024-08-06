import React, { useState } from 'react';
import myths from './title5/health11.jpg';
import genetics from './title5/health22.jpg';
import emerging from './title5/health33.jpg';
import slee from './title5/health44.gif';
import triangle from './title5/health55.jpg';
import background from './sciback2.jpeg'; // Ensure you have the background image imported
import { Link } from 'react-router-dom';

const posts = [
  {
    title: <Link to = "/healthblog1">'Nutrition Myths vs. Facts: Debunking common misconceptions about diet and nutrition to promote healthier eating habits.'</Link>,
    date: 'APR 17, 2024',
    author: 'Dr. Catherine Loria & Dr. Richard P. Troiano',
    image: myths,
    description: 'This information may help you make changes in your daily eating and physical activity habits so that you improve your well-being and reach or maintain a healthy weight.',
  },
  {
    title: <Link to = "/healthblog2">'Advances in Personalized Medicine: How genetic testing and tailored treatments are transforming patient care and outcomes.'</Link>,
    date: 'August 2024',
    author: 'Helen K Brittain',
    image: genetics,
    description: 'This article provides a brief overview of genomics and its current clinical applications, including its contribution to personalised medicine. Physicians will be signposted to key issues that will allow the successful implementation of genomics for rare disease diagnosis and cancer management.',
  },
  {
    title: <Link to = "/healthblog3">'Emerging Trends in Health and Wellness: New research, technologies, and lifestyle trends shaping the future of health.'</Link>,
    date: 'Jun 10, 2024',
    author: 'Arvind Vaishnav',
    image: emerging,
    description: 'This will explore the multifaceted impact of AI in healthcare, delving into areas such as workflow automation, telemedicine, collaborative diagnostics, personalised wellness, and embracing green procurement for a sustainable future.',
  },
  {
    title: <Link to = "/healthblog4">'The Role of Sleep in Health: Examining the importance of sleep, common sleep disorders, and tips for improving sleep quality'</Link>,
    date: ' Dec 07, 2024',
    author: 'Dr. Marishka Brown',
    image: slee,
    description: 'Sleep is a crucial component of overall health, impacting physical, mental, and emotional well-being. It plays a vital role in various bodily functions, including immune system support, memory consolidation, and emotional regulation. Poor sleep quality is linked to a range of health issues, from cardiovascular disease to obesity and mental health disorders.',
  },
  {
    title: <Link to = "/healthblog5">'The Link Between Mental and Physical Health: Exploring how mental health issues can affect physical health and vice versa'</Link>,
    date: ' September 20, 2023',
    author: 'Jennifer Robinson',
    image: triangle,
    description: 'Researchers have increasingly highlighted the intricate connection between mental and physical health, demonstrating that each profoundly impacts the other. Studies show that mental health conditions like depression and anxiety can lead to physical health problems such as chronic pain, cardiovascular disease, and immune system dysfunction.',
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

function Health() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.scienceTitle}>HEALTH</h1>
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

export default Health;
