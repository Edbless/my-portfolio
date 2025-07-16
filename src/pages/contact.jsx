// pages/Contact.jsx
import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <p>Feel free to reach out for collaboration, mentorship, or just to connect!</p>
            <div className="contact-details">
                <p><strong>Email:</strong> gifted.hemans@example.com</p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/giftedhemans" target="_blank" rel="noreferrer">linkedin.com/in/giftedhemans</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/giftedhemans" target="_blank" rel="noreferrer">github.com/giftedhemans</a></p>
            </div>
        </div>
    );
}
