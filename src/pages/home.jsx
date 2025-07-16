// pages/Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <div className="text-side">
          <h1>
            Hi, I’m <span className="highlight">Gifted Hemans</span>
          </h1>
          <p className="subtitle">A curious mind. A creative soul. A coder with a cause.</p>

          <p className="intro">
            I’m a passionate Computer Science student with a vision — to use technology not just to build things, but to build lives, connect communities, and solve real problems.
          </p>

          <div className="quick-icons">
            <div className="icon-box">
              <span className="material-icons">code</span>
              <p>Developer</p>
            </div>
            <div className="icon-box">
              <span className="material-icons">lightbulb</span>
              <p>Tech Enthusiast</p>
            </div>
            <div className="icon-box">
              <span className="material-icons">security</span>
              <p>Cybersecurity Advocate</p>
            </div>
            <div className="icon-box">
              <span className="material-icons">analytics</span>
              <p>Data Interpreter</p>
            </div>
          </div>

          <Link className="cta-btn" to="/contact">
            Let’s Connect
          </Link>
        </div>

        <div className="image-side">
          <img src="/assets/images/IMG1.jpeg" alt="Gifted Hemans" />
        </div>
      </div>
    </section>
  );
    }
