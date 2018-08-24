import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

//my stuff
import navbarStyles from "./navbar.module.css"
import globalStyles from "./global.module.css"

const Navbar = () => (
  <nav className={navbarStyles.navbar}>
    <div className={navbarStyles.navbarContainer}>
        <Link to="/" className={navbarStyles.navbarBrand} title="Carter McAlister">
          <figure className="image">
            <img src={""} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
          Carter McAlister 
          <span className={navbarStyles.brandTagline}>
            <span className={navbarStyles.tagLineSeperator}> / </span>
            Full-Stack Developer
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
