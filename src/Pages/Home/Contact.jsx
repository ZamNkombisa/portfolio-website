import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wy8ugcp', 'template_3d5tzhd', form.current, {
        publicKey: '1Cn4h2yNaN6An46bm',
      })
      .then(
        () => {
          setSuccessMessage('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <span id="Contact" className="contact-section">
      <div>
        <h1>Contact Me</h1>
        <p className="text-lg sub-title">Get in touch and send me a message!</p>
      </div>
      <form className="contact-form-container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <div className="contact-label">
            <span className="text-md">Message</span>
            <textarea
              className="contact-input text-md"
              name="message"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </div>
          <div>
            <button className="btn btn-primary contact-form-btn">Send Message</button>
          </div>
        </div>
      </form>
      {successMessage && <div className="success-popup">{successMessage}</div>}
    </span>
  );
}
