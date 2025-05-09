import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      category: "Frontend",
      description:
        "Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.",
      image: "portfolio.jpg",
      tech: ["react", "js", "css", "figma"],
    },
    {
      id: 2,
      title: "Weather App",
      category: "Full Stack",
      description:
        "Developed a full-stack weather app using Node.js/Express for server-side logic and React/JS/Handlebars for interactive frontend, delivering real-time weather data.",
      image: "weather.jpg",
      tech: ["react", "js", "css", "node"],
    },
    {
      id: 3,
      title: "Cred Clone",
      category: "Frontend",
      description:
        "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
      image: "cred.jpg",
      tech: ["react", "js", "css", "figma"],
    },
    {
      id: 4,
      title: "User Authentication System",
      category: "Full Stack",
      description:
        "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
      image: "auth.jpg",
      tech: ["react", "js", "css", "node"],
    },
    {
      id: 5,
      title: "Todo List",
      category: "Frontend",
      description:
        "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
      image: "todo.jpg",
      tech: ["react", "js", "css", "node"],
    },
    {
      id: 6,
      title: "QR Scanner",
      category: "Frontend",
      description:
        "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
      image: "qr.jpg",
      tech: ["react", "js", "css", "figma"],
    },
    {
      id: 7,
      title: "Playlist Generator",
      category: "Frontend",
      description:
        "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
      image: "playlist.jpg",
      tech: ["react", "js", "css", "figma"],
    },
  ]

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>PROJECTS</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image" style={{ backgroundImage: `url(/${project.image})` }}></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className={`tech-icon ${tech}`}></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
