import { Link } from "react-router-dom"
import "./Home.css"
import { FaGithub, FaInstagram, FaLinkedin, FaSlack, FaTwitter, FaYoutube } from "react-icons/fa"

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-text">
            <p className="intro-text">Hey There I'm</p>
            <h1 className="name">ARMAND</h1>
            <p className="subtitle">
            I'am Software Development with a focus on building impactful, 
              <br />
              innovative SaaS products for Africa and beyond.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                < FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>About</h2>
          <p>
          Hi there! I'm Rukizangabo Armand Benjamin, a Software Development student passionate about building impactful digital experiences through innovative SaaS products. I specialize in front-end development, UI/UX design, and problem-solving, with skills in HTML, CSS, JavaScript, PHP, MySQL, and frameworks like React and Next.js. I thrive in fast-paced, collaborative environments and love turning real-world problems into scalable tech solutions. Outside of coding, I'm driven by entrepreneurship, creativity, and empowering young developers across Africa. Let’s connect and build something meaningful together!
          </p>
          <Link to="/about" className="more-button">
            More...
          </Link>
        </div>
      </section>

      <section className="recent-projects">
        <div className="section-header">
          <h2>Recent Projects</h2>
          <Link to="/projects" className="see-all">
            See all →
          </Link>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image portfolio"></div>
            <div className="project-info">
              <h3>Portfolio</h3>
              <p className="project-category">Frontend</p>
              <p className="project-description">
                Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in
                technologies such as ReactJS, CSS, and Figma.
              </p>
              <div className="tech-stack">
                <span className="tech-icon react"></span>
                <span className="tech-icon js"></span>
                <span className="tech-icon css"></span>
                <span className="tech-icon figma"></span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image weather"></div>
            <div className="project-info">
              <h3>Weather App</h3>
              <p className="project-category">Full Stack</p>
              <p className="project-description">
                Developed a full-stack weather app using Node.js/Express for server-side logic and React/JS/Handlebars
                for interactive frontend, delivering real-time weather data.
              </p>
              <div className="tech-stack">
                <span className="tech-icon react"></span>
                <span className="tech-icon js"></span>
                <span className="tech-icon css"></span>
                <span className="tech-icon node"></span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image cred"></div>
            <div className="project-info">
              <h3>Cred Clone</h3>
              <p className="project-category">Frontend</p>
              <p className="project-description">
                Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with
                CSS to match the original design.
              </p>
              <div className="tech-stack">
                <span className="tech-icon react"></span>
                <span className="tech-icon js"></span>
                <span className="tech-icon css"></span>
                <span className="tech-icon figma"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <p>
            If you are interested in my work or want to provide feedback about this website, I am open to exchanging
            ideas.
          </p>
          <Link to="/contact" className="contact-button">
            Contact Me
          </Link>
        </div>
        <div className="social-media">
          <p>Follow me on</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaSlack/>
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
