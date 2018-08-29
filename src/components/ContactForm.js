import React from 'react'
import contactFormStyles from './contactForm.module.css'

const ContactForm = ({email, title, className}) => (
  <form action={"https://formspree.io/"+email} method="POST" className={className}>
    <h3>{title}</h3>
    <div>
      <input name="name" placeholder="Name" className={contactFormStyles.field}/>
    </div>
    <div>
      <input name="email" type="email" placeholder="Email Address" className={contactFormStyles.field}/>
    </div>
    <div>
      <textarea name="message" placeholder="Message" className={contactFormStyles.field}></textarea>
    </div>
    <div>
      <button name="submit" type="submit" className={contactFormStyles.button}>Send</button>
    </div>
  </form>
)

export default ContactForm
