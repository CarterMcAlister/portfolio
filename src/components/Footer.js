import React from 'react'
import Link from 'gatsby-link'
import Icon from "./Icon.js"
import footerStyles from "./footer.module.css"

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.container}>
      <p>© 2018 Placeholder</p>
      <Link className={footerStyles.contactButton}>Get In Touch</Link>
      <div>
        <Link className={footerStyles.iconLink}>
          <Icon name="mail" />
        </Link>
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
