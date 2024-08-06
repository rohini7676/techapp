import React from 'react';
import background from './sciback2.jpeg';

function About() {
  // Inline CSS styles
  const styles = {
    body: {
      backgroundImage: `url(${background})`, // Use url() to set the background image
      backgroundSize: 'cover', /* This ensures the image covers the entire background */
      fontFamily: 'Arial, sans-serif',
      margin: 0, /* Removes default margin */
      padding: '20px', /* Adds some padding to the body */
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.6)', /* Semi-transparent white background for better readability */
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    section: {
      marginBottom: '20px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    paragraph: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <center><h1>About Us</h1></center>
        <div style={styles.section}>
          <h3 style={styles.heading}>Our Mission</h3>
          <p style={styles.paragraph}>
            Welcome to the Science and Technology Blog - your gateway to the latest advancements in science and technology!
          </p>
          <p style={styles.paragraph}>
            Our mission is to keep you informed and inspired by the ever-evolving world of science and technology. We provide a platform where you can explore groundbreaking discoveries, technological innovations, and insightful analyses on various scientific topics.
          </p>
          <p style={styles.paragraph}>
            Our team of experts and enthusiasts is dedicated to bringing you high-quality content that sparks curiosity and encourages learning. Whether you are a science aficionado, a tech enthusiast, or simply someone interested in staying updated, our blog has something for you.
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>What We Cover</h3>
          <p style={styles.paragraph}>
            Our blog covers a wide range of topics, including:
          </p>
          <ul>
            <li>Latest scientific research and breakthroughs</li>
            <li>Technological innovations and trends</li>
            <li>Space exploration and discoveries</li>
            <li>Artificial Intelligence and robotics</li>
            <li>Environmental science and climate change</li>
            <li>And much more!</li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>Get Involved</h3>
          <p style={styles.paragraph}>
            We encourage you to join the conversation! Share your thoughts, ask questions, and engage with our community through comments and social media.
          </p>
          <p style={styles.paragraph}>
            Interested in contributing? Reach out to us with your ideas and articles. We welcome guest writers who are passionate about science and technology.
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.paragraph}>
            Email: contact@scitechblog.com
          </p>
          <p style={styles.paragraph}>
            Phone: +91 6789543218
          </p>
          <p style={styles.paragraph}>
            Address: 181 Innovation Lane, Tech City, TC 12345,Coimbatore.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
