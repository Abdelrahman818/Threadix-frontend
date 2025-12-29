'use client';

import Lottie from 'lottie-react';
import contactAnimation from '@/animations/contact_animation.json';
import { useState, useEffect } from 'react';
import { END_POINT } from '@/config';

import '@/styles/contact.css';

export default function Contact() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(END_POINT.CONTACT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...formData, isLoggedIn}),
      credentials: 'include',
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.log(error.message));
  };

  useEffect(() => {
    fetch(END_POINT.VERIFY_TOKEN, {
      method: 'GET',
      headers: {
        'Contnet-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(json => {
        if (json.successful)
          setIsLoggedIn(true);
        else
          setIsLoggedIn(false);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out anytime!</p>
      </section>

      <section className="contact-container">

        {/* FORM */}
        <div className="contact-form">
          <h2>Send us a message</h2>

          <form className="form-wrapper" onSubmit={handleSubmit}>
            {!isLoggedIn && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" type="text" placeholder="Enter your name" name='name' value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="Enter your email" name='email' value={formData.email} onChange={handleChange} />
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select defaultValue="" id="subject" name='subj' value={formData.subj} onChange={handleChange}>
                <option disabled value="">Select a subject</option>
                <option value="order">Order Issue</option>
                <option value="product">Product Inquiry</option>
                <option value="return">Return Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Write your message..." rows="6" name='msg' value={formData.msg} onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

        </div>

        {/* INFO */}
        <Lottie animationData={contactAnimation} loop={true} />

      </section>

    </div>
  );
}
