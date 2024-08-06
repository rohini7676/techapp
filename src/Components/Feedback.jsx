import React, { useState } from 'react';
import { FaSmile, FaMeh, FaFrown, FaThumbsUp, FaTrophy } from 'react-icons/fa';
import background from './sciback2.jpeg';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [websiteExperience, setWebsiteExperience] = useState('');
  const [bugImage, setBugImage] = useState(null);
  const [likedFeatures, setLikedFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleRatingChange = (event) => {
    const newRating = Number(event.target.value);
    setRating(newRating);
    console.log(`Rating changed to: ${newRating}`);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleWebsiteExperienceChange = (event) => {
    setWebsiteExperience(event.target.value);
  };

  const handleBugImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBugImage(URL.createObjectURL(file));
    }
  };

  const handleNewFeatureChange = (event) => {
    setNewFeature(event.target.value);
  };

  const addFeature = () => {
    if (newFeature) {
      setLikedFeatures([...likedFeatures, newFeature]);
      setNewFeature('');
    }
  };

  const removeFeature = (index) => {
    setLikedFeatures(likedFeatures.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Rating: ${rating}, Feedback: ${feedback}, Website Experience: ${websiteExperience}`);
    console.log(`Liked Features: ${likedFeatures}`);
    console.log(`Bug Image: ${bugImage ? bugImage.name : 'No Image Uploaded'}`);
    setShowModal(true);
    setRating(0);
    setFeedback('');
    setWebsiteExperience('');
    setBugImage(null);
    setLikedFeatures([]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{
        fontFamily: 'Roboto, sans-serif',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        color: '#333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '40px',
          padding: '20px',
          backgroundColor: '#ffffff',
          border: '1px solid #e0e0e0',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          animation: 'fadeIn 0.8s ease',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#030103cb', fontSize: '2rem' }}>
          We Value Your Feedback
        </h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }} onSubmit={handleSubmit}>
          <div
            style={{
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #e2e3e5',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
          >
            <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', color: '#2e4fd1' }}>
              Rate Your Overall Experience
            </h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
              }}
            >
              <label
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  checked={rating === 1}
                  onChange={handleRatingChange}
                  style={{ display: 'none' }}
                />
                <FaFrown
                  style={{
                    fontSize: '2.5rem',
                    color: rating === 1 ? '#ff4b5c' : '#ffc107',
                    marginBottom: '5px',
                    transition: 'color 0.3s, transform 0.3s',
                  }}
                />
                <span style={{ fontSize: '0.9rem', color: '#333' }}>Bad</span>
              </label>
              <label
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  checked={rating === 2}
                  onChange={handleRatingChange}
                  style={{ display: 'none' }}
                />
                <FaMeh
                  style={{
                    fontSize: '2.5rem',
                    color: rating === 2 ? '#ff4b5c' : '#ffc107',
                    marginBottom: '5px',
                    transition: 'color 0.3s, transform 0.3s',
                  }}
                />
                <span style={{ fontSize: '0.9rem', color: '#333' }}>Okay</span>
              </label>
              <label
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  checked={rating === 3}
                  onChange={handleRatingChange}
                  style={{ display: 'none' }}
                />
                <FaSmile
                  style={{
                    fontSize: '2.5rem',
                    color: rating === 3 ? '#ff4b5c' : '#ffc107',
                    marginBottom: '5px',
                    transition: 'color 0.3s, transform 0.3s',
                  }}
                />
                <span style={{ fontSize: '0.9rem', color: '#333' }}>Good</span>
              </label>
              <label
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  checked={rating === 4}
                  onChange={handleRatingChange}
                  style={{ display: 'none' }}
                />
                <FaThumbsUp
                  style={{
                    fontSize: '2.5rem',
                    color: rating === 4 ? '#ff4b5c' : '#ffc107',
                    marginBottom: '5px',
                    transition: 'color 0.3s, transform 0.3s',
                  }}
                />
                <span style={{ fontSize: '0.9rem', color: '#333' }}>Great</span>
              </label>
              <label
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.3s',
                }}
              >
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  checked={rating === 5}
                  onChange={handleRatingChange}
                  style={{ display: 'none' }}
                />
                <FaTrophy
                  style={{
                    fontSize: '2.5rem',
                    color: rating === 5 ? '#ff4b5c' : '#ffc107',
                    marginBottom: '5px',
                    transition: 'color 0.3s, transform 0.3s',
                  }}
                />
                <span style={{ fontSize: '0.9rem', color: '#333' }}>Excellent</span>
              </label>
            </div>
          </div>

          <div
            style={{
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #e2e3e5',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
          >
            <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', color: '#2e4fd1' }}>What Did You Love About Our Website? (Optional)</h3>
            <textarea
              value={websiteExperience}
              onChange={handleWebsiteExperienceChange}
              placeholder="Tell us what you enjoyed about our website..."
              style={{ width: '100%', padding: '12px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', color: '#555', backgroundColor: '#ffffff', transition: 'border-color 0.3s, box-shadow 0.3s', minHeight: '120px', resize: 'vertical' }}
            />
          </div>


        

          <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f8f9fa', border: '1px solid #e2e3e5', transition: 'transform 0.3s, box-shadow 0.3s' }}>
            <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', color: '#2e4fd1' }}>Features You Liked</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <input
                type="text"
                value={newFeature}
                onChange={handleNewFeatureChange}
                placeholder="Add a feature you liked"
                style={{ width: '100%', padding: '12px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', color: '#555', backgroundColor: '#ffffff', transition: 'border-color 0.3s, box-shadow 0.3s' }}
              />
              <button type="button" onClick={addFeature} style={{ backgroundColor: '#05e164', color: '#fff', padding: '12px 20px', border: 'none', borderRadius: '6px', fontSize: '1.1rem', cursor: 'pointer', transition: 'background-color 0.3s, box-shadow 0.3s', marginLeft: '10px' }}>Add</button>
            </div>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              {likedFeatures.map((feature, index) => (
                <li key={index} style={{ backgroundColor: '#e9ecef', marginBottom: '5px', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background-color 0.3s' }}>
                  <span>{feature}</span>
                  <button type="button" onClick={() => removeFeature(index)} style={{ background: 'none', border: 'none', color: '#ff4b5c', fontSize: '1.2rem', cursor: 'pointer', transition: 'color 0.3s' }}>&times;</button>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#f8f9fa', border: '1px solid #e2e3e5', transition: 'transform 0.3s, box-shadow 0.3s' }}>
            <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', color: '#2e4fd1' }}>Upload an Image (Faced Any Bugs in Our Service)</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleBugImageChange}
              style={{ width: '100%', padding: '12px', marginTop: '5px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem', color: '#555', backgroundColor: '#ffffff', transition: 'border-color 0.3s, box-shadow 0.3s' }}
            />
            {bugImage && (
              <div style={{ marginTop: '10px' }}>
                <img src={bugImage} alt="Bug Preview" style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }} />
              </div>
            )}
          </div>

          <button type="submit" style={{ backgroundColor: '#05e164', color: '#fff', padding: '12px 20px', border: 'none', borderRadius: '6px', fontSize: '1.1rem', cursor: 'pointer', transition: 'background-color 0.3s, box-shadow 0.3s' }}>Submit Feedback</button>
        </form>

        {showModal && (
          <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', animation: 'fadeInModal 0.5s ease', zIndex: '1000' }}>
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', textAlign: 'center', maxWidth: '400px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '15px' }}>Thank You for Your Feedback!</h3>
              <p style={{ fontSize: '1rem', color: '#555', marginBottom: '25px' }}>Your feedback has been submitted successfully.</p>
              <button onClick={closeModal} style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', transition: 'background-color 0.3s' }}><Link to ="/">Close</Link></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;
