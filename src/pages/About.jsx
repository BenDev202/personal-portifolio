import { FaFile } from "react-icons/fa"
import "./About.css"

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>ABOUT</h1>
      </div>

      <div className="about-content">
        <div className="profile-image">
          {/* Replace with your actual profile image */}
          <img src="/profile.jpg" alt="Rahul" />
        </div>
        <div className="bio">
        <p>
  I'm a Software Development student with a passion for creating meaningful, user-focused solutions. I’m currently
  focused on <span className="highlight">React, Next.js, PHP, MySQL, and Firebase</span>, using these tools to build
  fast, functional, and scalable web applications.
</p>
<p>
  One of my current projects is <strong>Opal</strong>, a Loom-style video communication tool built to support remote
  teams with screen recording, real-time collaboration, and AI-powered summaries. I'm also working on platforms like
  <strong>CodeArena</strong>—a competitive space for students to test and showcase their coding skills.
</p>
<p>
  Beyond building products, I’ve led the design and development of community-driven platforms and initiatives focused
  on empowering young African developers. I enjoy mentoring peers, collaborating with like-minded builders, and
  organizing workshops and hackathons that foster innovation and real-world learning.
</p>
<p>
  I thrive in <span className="highlight">Agile environments</span> where problem-solving, speed, and iteration matter.
  I believe the best products are built through teamwork, creativity, and a deep understanding of the user.
</p>
<p>
  Whether you're looking for a dedicated developer, a product-minded collaborator, or a creative problem solver, I’m
  ready to help turn bold ideas into reality. Let’s connect and build something impactful together!
</p>


          <a href="/resume.pdf" download className="download-resume">
            <FaFile/> Download Resume
          </a>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skills-icons">
          <div className="skill-icon html"></div>
          <div className="skill-icon node"></div>
          <div className="skill-icon css"></div>
          <div className="skill-icon tailwind"></div>
          <div className="skill-icon cpp"></div>
          <div className="skill-icon premiere"></div>
          <div className="skill-icon react"></div>
          <div className="skill-icon figma"></div>
          <div className="skill-icon material"></div>
          <div className="skill-icon qt"></div>
        </div>
      </div>

      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-behance"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  )
}

export default About
