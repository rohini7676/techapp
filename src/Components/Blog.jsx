import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import earthImage from './img1.webp';
import healthImage from './img2.webp';
import scienceImage from './img31.webp';
import techImage from './img4.webp';
import bioImage from './title3/space11.jpg';
import background from './sciback2.jpeg';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: '08cbcc7d648f4c658ccbc8e43078953a'
          }
        });
        setNewsArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic === selectedTopic ? null : topic);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  };

  const getTodaysDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
  };

  const topics = [
    {
      title: <Link to="/science">SCIENCE</Link>,
      image: scienceImage,
      description: 'Find interesting science research articles at SciTech, your all-inclusive hub for the latest breakthroughs, discoveries, and innovations from the ever-evolving world of science.',
      more: 'Chemistry involves the study of matter, its properties, how and why substances combine or separate, and how they interact with energy. Innovations in chemistry continue to lead to new materials and processes.',
    },
    {
      title: <Link to="/tech">TECHNOLOGY</Link>,
      image: techImage,
      description: 'Read the latest technology news on SciTech, your comprehensive source for the latest breakthroughs, trends, and innovations shaping the world of technology.',
      more: 'Biology is the study of living organisms and their interactions with one another and their environments. Advances in biology are crucial for understanding health, diseases, and sustainable living.',
    },
    {
      title: <Link to="/health">HEALTH</Link>,
      image: healthImage,
      description: 'SciTechDaily is your source for the latest health news and medical research articles from leading universities, institutes,Recent space missions and government organizations.',
      more: 'Space is a boundless, three-dimensional extent in which objects and events occur and have relative position and direction. Recent space missions have brought back valuable information about the universe.',
    },
    {
      title: <Link to="/earth">EARTH</Link>,
      image: earthImage,
      description: 'SciTechDaily is your source for the latest earth news and interesting research articles on climate change, earth science, geology, green technology, global warming and paleontology.',
      more: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. Recent studies focus on climate change, resource management, and ecological conservation.',
    },
    {
      title: <Link to="/space">SPACE</Link>,
      image: bioImage,
      description: 'Technology refers to the collection of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.',
      more: 'Technology refers to the collection of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.',
    },
  ];

  const styles = {
    root: {
      minHeight: '100vh', // Ensure full viewport height
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center',
      backgroundColor: '#ffffff', // Optional: if you want a background color on the container
      borderRadius: '10px',
    },
    title: {
      fontSize: '2rem',
      margin: '20px 0',
      color: '#2c3e50',
      fontWeight: 'bold',
    },
    newsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      padding: '10px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      height: '80px', // Increased height to accommodate date below news
    },
    hotTopicsStyle: {
      backgroundColor: '#004080',
      color: '#fff',
      padding: '8px',
      fontWeight: 'bold',
      textAlign: 'center',
      borderRadius: '8px',
      marginLeft: '20px',
      fontSize: '0.9rem',
      flexShrink: 0,
      width: '100px',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sliderContainer: {
      flexGrow: 1,
      minWidth: '0',
      height: '60px',
    },
    dateStyle: {
      fontSize: '12px',
      color: '#666',
      marginTop: '5px', // Margin above date to separate from title
    },
    titleStyle: {
      fontSize: '14px',
      color: '#333',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    topicsRow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '15px',
    },
    topicContainer: {
      width: 'calc(33% - 15px)',
      minHeight: '250px',
      marginBottom: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundColor: '#ffffff',
    },
    topicContainerHover: {
      transform: 'rotateY(10deg) scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      opacity: '0.9',
    },
    image: {
      width: '100%',
      height: '150px', // Fixed height
      objectFit: 'cover', // Ensures images cover the area without distortion
      borderBottom: '1px solid #ddd',
    },
    topicTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      margin: '10px 0',
      color: '#2c3e50',
    },
    description: {
      fontSize: '0.9rem',
      lineHeight: '1.4',
      color: '#555',
      padding: '10px',
    },
    more: {
      marginTop: '10px',
      fontSize: '0.9rem',
      color: '#333',
      padding: '8px 10px',
      backgroundColor: '#f0f0f0',
      borderTop: '1px solid #ddd',
    },
  };
  
  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <div style={styles.newsContainer}>
          <div style={styles.hotTopicsStyle}>CURRENT NEWS</div>
          <div style={styles.sliderContainer}>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <Slider {...settings}>
                {newsArticles.map((article, index) => (
                  <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
                    <h3 style={styles.titleStyle}>{article.title}</h3>
                    <p style={styles.dateStyle}>{getTodaysDate()}</p>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
        <h1 style={styles.title}>The Latest Advances in Science and Technology</h1>
        <div style={styles.topicsRow}>
          {topics.map((topic, index) => (
            <div
              key={index}
              style={{
                ...styles.topicContainer,
                ...(selectedTopic === topic && styles.topicContainerHover),
              }}
              onClick={() => handleTopicClick(topic)}
            >
              <img src={topic.image} alt={topic.title} style={styles.image} />
              <h2 style={styles.topicTitle}>{topic.title}</h2>
              <p style={styles.description}>{topic.description}</p>
              {selectedTopic === topic && (
                <div style={styles.more}>
                  <h2>{topic.title} Details</h2>
                  <p>{topic.more}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
