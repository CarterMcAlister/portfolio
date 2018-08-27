import React from 'react'
import Link from 'gatsby-link'
import Icon from "./Icon.js"
import footerStyles from "./footer.module.css"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.container}>
      <p>© 2018 Placeholder</p>
      <Link to="/contact" className={footerStyles.contactButton}>Get In Touch</Link>
      <div>
        <a className={footerStyles.iconLink} href="mailto:carter@cartermcalister.name">
          <Icon name="mail" />
        </a>
        <Link className={footerStyles.iconLink}>
          <Icon name="linkedin" />
        </Link>
        <Link className={footerStyles.iconLink}>
          <Icon name="codepen" />
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
