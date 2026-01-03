'use client';

import { useState, useEffect } from "react";
import { END_POINT } from "@/config";
import Link from "next/link";
import Lottie from "lottie-react";
import signupAnimation from "@/animations/signup_animation.json";

import "@/styles/signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [pwdError, setPwdError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (successMessage || errorMessage) {
      setSuccessMessage('');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.pwdConf !== formData.pwd) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const { pwdConf, ...payload } = formData;
      const res = await fetch(END_POINT.SIGNUP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (json.successful && json.msg) {
        setSuccessMessage(json.msg);
      } else {
        setErrorMessage(json.msg || 'Signup failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (formData.pwd && formData.pwdConf && formData.pwd !== formData.pwdConf)
      setPwdError(true);
    else
      setPwdError(false);
  }, [formData.pwd, formData.pwdConf]);

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Form Section */}
        <div className="signup-form-section">
          <h2>Create Account</h2>
          <p>Join Threadix and start shopping today!</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="pwd"
                value={formData.pwd}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                name="pwdConf"
                className={pwdError ? "danger" : ""}
                value={formData.pwdConf}
                onChange={handleChange}
                required
              />
            </div>

            <button 
              type="submit" 
              className="signup-btn"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="btn-loading">
                  <span className="spinner"></span>
                  Signing Up...
                </span>
              ) : (
                'Sign Up'
              )}
            </button>

            {successMessage && (
              <div className="success-message">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm-2 15l-5-5 1.41-1.41L8 12.17l7.59-7.59L17 6l-9 9z" fill="#10b981"/>
                </svg>
                <span>{successMessage}</span>
              </div>
            )}

            {errorMessage && (
              <div className="error-message">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V7h2v4z" fill="#ef4444"/>
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}
            {/* Terms & Conditions caption */}
            <p className="signup-terms-caption" style={{ fontSize: '0.85rem', color: '#666', marginTop: '1rem', marginBottom: '0.5rem', textAlign: 'center' }}>
              By signing up, you agree to our {' '}
              <Link href="/ourTerms" style={{ color: '#0070f3', textDecoration: 'underline' }}>
                terms & conditions
              </Link>
              .
            </p>
          </form>

          <p className="signup-bottom-text">
            Already have an account? <Link href="/auth/login">Login</Link>
          </p>
        </div>

        {/* Animation Section */}
        <div className="signup-animation-section w-1/2">
          <Lottie animationData={signupAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
}
