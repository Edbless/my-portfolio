// pages/Skills.jsx
import React from 'react';
import './Skills.css'; // Importing the CSS for styling the Skills page

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>My Skill Set</h2>
        <p>
          I bring a broad yet deeply rooted set of skills to the table — combining technical strength with creative vision and a dedication to lifelong learning.
        </p>
      </div>

      <div className="skills-grid">
        {/* Frontend Development */}
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>Angular & React</li>
            <li>Responsive Design (Mobile-First)</li>
            <li>UI/UX Principles</li>
          </ul>
        </div>

        {/* Backend Development */}
        <div className="skill-card">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js & Express</li>
            <li>Java & Spring Boot</li>
            <li>REST APIs</li>
            <li>Authentication & Authorization</li>
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div className="skill-card">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman, Swagger</li>
            <li>VS Code, IntelliJ</li>
            <li>Command Line & Bash</li>
          </ul>
        </div>

        {/* Data & Security */}
        <div className="skill-card">
          <h3>Data & Cybersecurity</h3>
          <ul>
            <li>MySQL, MongoDB</li>
            <li>Data Visualization (Power BI)</li>
            <li>Network Configuration (Packet Tracer)</li>
            <li>Cybersecurity Awareness & WiFi Security</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skill-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Communication & Teamwork</li>
            <li>Time Management</li>
            <li>Leadership & Mentorship</li>
          </ul>
        </div>

        {/* Survey */}
        <div className="survey-card">
          <h2>Survey</h2>
          <ul>
            <li>Maps</li>
            <li>Survey123</li>
            <li>MOPTAX</li>
          </ul>
        </div>
      </div>
    </section>
  );
}