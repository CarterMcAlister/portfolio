import React from 'react'

const ContactForm = ({email}) => (
  <form action={"https://formspree.io/"+email}>
    <h3>Get in touch</h3>
    <div>
      <input name="name" placeholder="Name"/>
    </div>
    <div>
      <input name="email" type="email" placeholder="Email Address"/>
    </div>
    <div>
      <textarea name="message" placeholder="Message"></textarea>
    </div>
    <div>
      <button name="submit" type="submit">Send</button>
    </div>
  </form>
)

export default ContactForm
