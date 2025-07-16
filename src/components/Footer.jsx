import React from 'react';
// import './Footer.css'; // Uncomment if using separate Footer.css

const socialLinks = [
  { url: 'https://github.com/Edbless', label: 'GitHub' },
  { url: 'https://facebook.com/edithgifty.hemans', label: 'Facebook' },
  { url: 'https://x.com/edithhemans?s=11', label: 'Twitter' },
  { url: 'https://www.linkedin.com/in/gifty-hemans-48984319b', label: 'LinkedIn' },
  { url: 'https://www.instagram.com/bby_hemans', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Connect with Me</h3>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Gifted Hemans. All rights reserved.
        </p>
      </div>
    </footer>
  );
}