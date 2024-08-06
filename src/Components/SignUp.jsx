import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import background from './sciback2.jpeg'; // Adjust the path as necessary
import { Link } from 'react-router-dom';


function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [passwordValidations, setPasswordValidations] = useState({
        minLength: false,
        uppercase: false,
        number: false,
        specialChar: false
    });

    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [showStrongPasswordMessage, setShowStrongPasswordMessage] = useState(false);
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [emailError, setEmailError] = useState('');

    const [emailInput, setEmailInput] = useState('');
    const [typingTimeout, setTypingTimeout] = useState(null);

    useEffect(() => {
        if (emailInput) {
            // Clear the existing timeout
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }

            // Set a new timeout to validate the email after 500ms
            setTypingTimeout(setTimeout(() => {
                validateEmail(emailInput);
            }, 500));
        } else {
            setEmailError('');
        }
    }, [emailInput]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmailInput(value.toLowerCase());
            setFormData({
                ...formData,
                [name]: value.toLowerCase()
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }

        if (name === 'password') {
            evaluatePasswordStrength(value);
        }
    };

    const evaluatePasswordStrength = (password) => {
        const minLength = password.length >= 8;
        const uppercase = /[A-Z]/.test(password);
        const number = /[0-9]/.test(password);
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setPasswordValidations({
            minLength,
            uppercase,
            number,
            specialChar
        });

        if (minLength && uppercase && number && specialChar) {
            setShowStrongPasswordMessage(true);
            setTimeout(() => {
                setShowStrongPasswordMessage(false);
                setIsPasswordFocused(false);
                document.getElementById('confirmPassword').focus();
            }, 1000);
        }
    };

    const validateEmail = (email) => {
        // Check if the email contains '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            setEmailError('Email must contain "@" and "."');
        } else if (email.indexOf('@') > email.lastIndexOf('.')) {
            setEmailError('Domain part must come after "@"');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (emailError) {
            alert("Please correct the email address.");
            return;
        }
        setShowSaveModal(true);
    };

    const handleSave = () => {
        localStorage.setItem('signupDetails', JSON.stringify(formData));
        alert("Sign up successful and details saved!");
        setShowSaveModal(false);
    };

    const handleNever = () => {
        alert("Sign up successful, but details were not saved.");
        setShowSaveModal(false);
    };

    const isPasswordStrong = () => {
        return Object.values(passwordValidations).every(Boolean);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            background: `url(${background}) no-repeat center center fixed`,

            backgroundSize: 'cover',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {/* Form Section */}
            <div style={{
                maxWidth: '400px',
                width: '100%',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
                textAlign: 'center',
                marginRight:'20px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly more opaque for visibility
            }}>
                <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                        <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange} 
                            required 
                            placeholder="Username"
                            style={{
                                width: '70%',
                                padding: '10px 10px 10px 40px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                background: 'rgba(255, 255, 255, 0.8)', // Slightly transparent input
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                        <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            placeholder="Email"
                            style={{
                                width: '70%',
                                padding: '10px 10px 10px 40px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                background: 'rgba(255, 255, 255, 0.8)'
                            }}
                        />
                        {emailError && (
                            <p style={{ color: 'red', fontSize: '0.8em', textAlign: 'left', marginLeft: '40px' }}>{emailError}</p>
                        )}
                    </div>
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                        <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            onFocus={() => setIsPasswordFocused(true)}
                            required 
                            placeholder="Password"
                            style={{
                                width: '70%',
                                padding: '10px 10px 10px 40px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                background: 'rgba(255, 255, 255, 0.8)'
                            }}
                        />
                    </div>
                    {isPasswordFocused && !showStrongPasswordMessage && (
                        <div style={{ textAlign: 'left', marginLeft: '40px', marginBottom: '15px' }}>
                            <p style={{ color: passwordValidations.minLength ? 'green' : 'red' }}>
                                {passwordValidations.minLength ? '✔' : '✖'} At least 8 characters
                            </p>
                            <p style={{ color: passwordValidations.uppercase ? 'green' : 'red' }}>
                                {passwordValidations.uppercase ? '✔' : '✖'} At least 1 uppercase letter
                            </p>
                            <p style={{ color: passwordValidations.number ? 'green' : 'red' }}>
                                {passwordValidations.number ? '✔' : '✖'} At least 1 number
                            </p>
                            <p style={{ color: passwordValidations.specialChar ? 'green' : 'red' }}>
                                {passwordValidations.specialChar ? '✔' : '✖'} At least 1 special character
                            </p>
                        </div>
                    )}
                    {showStrongPasswordMessage && (
                        <div style={{ textAlign: 'center', color: 'green', marginBottom: '15px' }}>
                            <p>Your password is strong!</p>
                        </div>
                    )}
                    <div style={{ marginBottom: '15px', position: 'relative' }}>
                        <FontAwesomeIcon icon={faKey} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            required 
                            placeholder="Confirm Password"
                            style={{
                                width: '70%',
                                padding: '10px 10px 10px 40px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                background: 'rgba(255, 255, 255, 0.8)'
                            }}
                        />
                    </div>
                    <button 
                        type="submit" 
                        style={{
                            width: '50%',
                            padding: '10px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
                    >
                        <Link to='/blog'>
                        Register
                        </Link>
                        
                    </button>
                </form>

                {/* Social Media Sign Up */}
                <div style={{ marginTop: '20px' }}>
                <p style={{ fontSize: '0.9em' }}>-----Or with-----</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <a 
                            href="https://accounts.google.com/signin" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: '#DB4437', transition: 'opacity 0.3s' }}
                            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                            <FontAwesomeIcon icon={faGoogle} size="2x" />
                        </a>
                        <a 
                            href="https://www.facebook.com/login" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: '#3b5998', transition: 'opacity 0.3s' }}
                            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a 
                            href="https://twitter.com/login" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: '#1DA1F2', transition: 'opacity 0.3s' }}
                            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                            onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        </div>
                        <div>
                        <p style={{ fontSize: '0.9em' }}>Already have an account?<Link to ="/login"> Login</Link></p>
                        </div>
                    
                </div>
            </div>

            {/* Modal Section */}
            {showSaveModal && (
                <div style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}>
                    <div style={{
                        width: '300px',
                        padding: '20px',
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        textAlign: 'center'
                    }}>
                        <p>Do you want to save your email and password?</p>
                        <button 
                            onClick={handleSave}
                            style={{
                                width: '80%',
                                padding: '10px',
                                margin: '10px 0',
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
                        >
                            Save
                        </button>
                        <button 
                            onClick={handleNever}
                            style={{
                                width: '80%',
                                padding: '10px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
                        >
                            Never
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignUp;