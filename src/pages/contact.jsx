import React, { useState } from 'react';
import './Contact.css'; // Importing the CSS for styling the Contact page

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('https://formspree.io/f/mrblgrpw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('✅ Message sent! I’ll be in touch soon.');
        form.reset();
      } else {
        setStatus('⚠️ Something went wrong. Try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('⚠️ Network error. Please try again.');
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>
          If you’d like to collaborate, connect, or just say hello — don’t hesitate. I’m always open to new ideas, meaningful conversations, and exciting projects.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {status && <p className="form-status">{status}</p>}
      </div>
    </section>
  );
}
