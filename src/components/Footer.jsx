import React from 'react';
import './Footer.css'; 

const socialLinks = [
  { url: 'https://github.com/Edbless', label: 'GitHub', icon: 'code' },
  { url: 'https://facebook.com/edithgifty.hemans', label: 'Facebook', icon: 'facebook' },
  { url: 'https://x.com/edithhemans?s=11', label: 'Twitter', icon: 'share' },
  { url: 'https://www.linkedin.com/in/gifty-hemans-48984319b', label: 'LinkedIn', icon: 'business' },
  { url: 'https://www.instagram.com/bby_hemans', label: 'Instagram', icon: 'photo_camera' },
];

export default function Footer() {
  console.log('Footer rendering with social links:', socialLinks); // Debug log

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
              <span className="material-icons">{link.icon}</span>
              <span className="social-label">{link.label}</span>
            </a>
          ))}
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Gifty Hemans. All rights reserved.
        </p>
      </div>
    </footer>
  );
}