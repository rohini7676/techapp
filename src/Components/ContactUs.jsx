import React, { useState, useEffect } from 'react';

// Utility hook to detect screen width
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const windowWidth = useWindowWidth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    switch (name) {
      case 'name':
        if (!value) newErrors.name = 'Name is required';
        else delete newErrors.name;
        break;
      case 'email':
        if (!value || !/\S+@\S+\.\S+/.test(value)) newErrors.email = 'Valid email is required';
        else delete newErrors.email;
        break;
      case 'message':
        if (!value) newErrors.message = 'Message cannot be empty';
        else delete newErrors.message;
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message cannot be empty';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        alert('Form submitted!');
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        setErrors({}); // Clear errors on successful submission
      }, 1000); // Simulate network request
    }
  };

  // Styles
  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'url("https://img.freepik.com/free-vector/social-media-icons_53876-89123.jpg") no-repeat center center fixed',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    filter: 'brightness(1.0)', // Adjust this value as needed (1.0 is the original brightness)
    fontFamily: 'Arial', // Font family applied to the entire container
  };

  const overlayStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Light overlay to make text readable
    zIndex: '1',
    pointerEvents: 'none',
  };

  const highlightStyle = {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Enhanced box shadow
    zIndex: '100', // Ensure highlight is above overlay
    width: '80%',
    maxWidth: '500px',
    fontFamily: 'Verdana, sans-serif', // Different font for the highlight section
    border: '2px solid #007bff', // Add border here
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    zIndex: '3', // Ensure form is above background, overlay, and highlight
  };

  const labelStyle = {
    marginBottom: '8px',
    fontSize: windowWidth <= 600 ? '16px' : '18px',
    color: '#333',
    fontFamily: 'Arial, sans-serif', // Font family for labels
  };

  const inputStyle = {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: window.innerWidth <= 600 ? '16px' : '18px',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Courier New, Courier, monospace', // Corrected syntax
  };
  

  const textareaStyle = {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    resize: 'vertical',
    fontSize: windowWidth <= 600 ? '16px' : '18px',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Courier New, Courier, monospace', // Font family for textarea
  };

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: windowWidth <= 600 ? '16px' : '18px',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif', // Font family for button
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const spinnerStyle = {
    border: '3px solid #f3f3f3', /* Light grey */
    borderTop: '3px solid #007bff', /* Blue */
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    animation: 'spin 1s linear infinite',
    marginRight: '10px',
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#007bff';
    e.target.style.boxShadow = '0 0 8px rgba(0, 123, 255, 0.7)';
    e.target.style.backgroundColor = '#fff';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#ddd';
    e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    e.target.style.backgroundColor = '#f9f9f9';
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={highlightStyle}>
        <h1 style={{ fontSize: windowWidth <= 600 ? '24px' : '28px', color: '#333', fontFamily: 'Cursive' }}><center>Contact Us</center></h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label htmlFor="name" style={{labelStyle, fontFamily: 'cursive'}}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            aria-describedby="name-error"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.name && <span id="name-error" style={{ color: 'red', marginBottom: '20px', fontFamily: 'cursive' }}>{errors.name}</span>}

          <label htmlFor="email" style={{labelStyle, fontFamily: 'cursive'}}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            aria-describedby="email-error"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.email && <span id="email-error" style={{ color: 'red', marginBottom: '20px', fontFamily: 'cursive' }}>{errors.email}</span>}

          <label htmlFor="message" style={{labelStyle, fontFamily: 'cursive'}}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            aria-describedby="message-error"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.message && <span id="message-error" style={{ color: 'red', marginBottom: '20px', fontFamily: 'cursive' }}>{errors.message}</span>}

          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
            disabled={isSubmitting}
          >
            {isSubmitting && <div style={spinnerStyle}></div>}
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
