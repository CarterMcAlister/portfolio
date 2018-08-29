import React from 'react'
import Link from 'gatsby-link'
import navbarStyles from "./navbar.module.css"

const Navbar = () => (
  <nav className={navbarStyles.navbar}>
    <div className={navbarStyles.navbarContainer}>
        <Link to="/" className={navbarStyles.navbarBrand} title="Carter McAlister">
          <img src={""} alt="Kaldi" style={{ width: '88px' }} className="image"/>
          {/* Carter McAlister  */}
          Placeholder
          <span className={navbarStyles.brandTagline}>
            <span className={navbarStyles.tagLineSeperator}> / </span>
            {/* Full-Stack Developer */}
            placeholder
          </span>
        </Link>
      <div className={navbarStyles.navGroup}>
        <Link className={navbarStyles.navItem} to="/about">
          About
        </Link>
        <Link className={navbarStyles.navItem} to="/projects">
          Projects
        </Link>
        <Link className={navbarStyles.navItem} to="/blog">
          Blog
        </Link>
        <Link className={navbarStyles.navItem} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
