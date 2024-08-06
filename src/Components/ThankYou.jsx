import React from 'react';
import { FaRegLaughBeam, FaCheckCircle } from 'react-icons/fa';
import background from './sciback2.jpeg';

const ThankYou = ({ articleTitle, authorName, onBackToHome }) => {
  
  const styles = {
    thankYouContainer: {
      background: `url(${background}) no-repeat center center fixed`,
      backgroundSize:'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: "'Roboto', sans-serif",
    },
    thankYouCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      maxWidth: '700px',
      textAlign: 'center',
      animation: 'fadeIn 0.5s ease',
      overflow: 'hidden',
      position: 'relative',
    },
    thankYouHeader: {
      h1: {
        fontSize: '3.5em',
        color: '#4caf50',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      p: {
        fontSize: '1.4em',
        color: '#333',
        marginBottom: '30px',
      },
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '12px',
    },
    thankYouIcon: {
      color: '#14d221',
      fontSize: '1.5em',
    },
    icon: {
      color: '#4caf50',
      marginRight: '8px',
      fontSize: '1.2em',
    },
    additionalInfo: {
      marginTop: '30px',
      textAlign: 'left',
      h3: {
        fontSize: '1.6em',
        color: '#333',
        marginBottom: '10px',
      },
      ul: {
        listStyle: 'none',
        padding: 0,
      },
      li: {
        background: '#e0f7fa',
        padding: '10px',
        marginBottom: '5px',
        borderRadius: '8px',
        fontSize: '1em',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
      },
      liIcon: {
        color: '#00796b',
        fontWeight: 'bold',
        marginRight: '10px',
        fontSize: '1.2em',
      },
    },
    tips: {
      marginTop: '20px',
      textAlign: 'left',
      backgroundColor: '#f1f8e9',
      padding: '20px',
      borderRadius: '8px',
      h3: {
        fontSize: '1.6em',
        color: '#388e3c',
        marginBottom: '10px',
      },
      p: {
        fontSize: '1em',
        color: '#333',
        lineHeight: '1.5',
      },
    },
    feedbackSection: {
      marginTop: '30px',
      h3: {
        fontSize: '1.6em',
        color: '#333',
        marginBottom: '10px',
      },
      p: {
        fontSize: '1em',
        color: '#555',
        marginBottom: '20px',
      },
    },
    button: {
      background: 'linear-gradient(90deg, #3498db, #2980b9)',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      padding: '14px 28px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '15px 0',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    buttonHover: {
      background: 'linear-gradient(90deg, #2980b9, #3498db)',
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
    feedbackButton: {
      backgroundColor: '#14d221',
    },
    backToHome: {
      padding: '20px',
    },
  };

  return (
    <div style={styles.thankYouContainer}>
      <div style={styles.thankYouCard}>
        <div style={styles.thankYouHeader}>
          <h1 style={styles.thankYouHeader.h1}>
            <span style={styles.iconContainer}>
              <FaRegLaughBeam style={styles.thankYouIcon} />
            </span>
            Thank You!
          </h1>
          <p style={styles.thankYouHeader.p}>
            Thank you for reading our article. We appreciate your interest and support!
          </p>
        </div>

        {/* Additional Information Section */}
        <div style={styles.additionalInfo}>
          <h3 style={styles.additionalInfo.h3}>🎯 What's Next?</h3>
          <ul style={styles.additionalInfo.ul}>
            <li style={styles.additionalInfo.li}>
              <FaCheckCircle style={styles.additionalInfo.liIcon} />
              Explore more articles on our website.
            </li>
            <li style={styles.additionalInfo.li}>
              <FaCheckCircle style={styles.additionalInfo.liIcon} />
              Share your favorite articles with your friends.
            </li>
            <li style={styles.additionalInfo.li}>
              <FaCheckCircle style={styles.additionalInfo.liIcon} />
              Engage with our community through comments and discussions.
            </li>
          </ul>
        </div>

        {/* Tips Section */}
        <div style={styles.tips}>
          <h3 style={styles.tips.h3}>📝 Stay Informed</h3>
          <p style={styles.tips.p}>
            Subscribe to our newsletter to stay updated with the latest in science and technology.
            Follow us on social media for more insights and discussions.
          </p>
        </div>

        {/* Feedback Submission Section */}
        <div style={styles.feedbackSection}>
          <h3 style={styles.feedbackSection.h3}>📢 We Value Your Feedback</h3>
          <p style={styles.feedbackSection.p}>
            Help us improve by sharing your thoughts on our content. Click the button below to
            provide your feedback.
          </p>
          <a href="/feedback">
            <button style={{ ...styles.button, ...styles.feedbackButton }}>Submit Feedback</button>
          </a>
        </div>

        {/* Back to Home Button */}
        <div style={styles.backToHome}>
          <a href="/">
            <button onClick={onBackToHome} style={styles.button}>
              Back to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
