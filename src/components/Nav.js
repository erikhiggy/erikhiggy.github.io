import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <>
      <nav className="inline-nav border-bottom">
        <Link to="/" className="name-link nav-link">Erik Higginbotham</Link>
        <div className="social-links">
          <Link to="/projects" className="social-link nav-link">Projects</Link>
          <Link to="/Resume.pdf" className="social-link nav-link">Resume</Link>
        </div>
      </nav>
    </>
  );
}
