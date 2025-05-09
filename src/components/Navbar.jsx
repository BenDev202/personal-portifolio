"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-links">
          <NavLink to="/" className={activeLink === "/" ? "active" : ""} onClick={() => setActiveLink("/")}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={() => setActiveLink("/about")}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={activeLink === "/projects" ? "active" : ""}
            onClick={() => setActiveLink("/projects")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/gallery"
            className={activeLink === "/gallery" ? "active" : ""}
            onClick={() => setActiveLink("/gallery")}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={activeLink === "/contact" ? "active" : ""}
            onClick={() => setActiveLink("/contact")}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
