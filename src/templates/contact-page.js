import React from 'react'
import PropTypes from 'prop-types'
import ContactForm from '../components/ContactForm'
import contactStyles from './contact-page.module.css'
import HeroBanner from '../components/HeroBanner';

export const ContactPageTemplate = ({ email, formTitle, banner, paragraph }) => (
  <article>
    <HeroBanner background={banner.background} title={banner.title} subText={banner.subText} secondaryImage={banner.image} />
    <section className={contactStyles.container}>
      <ContactForm email={email} title={formTitle} className={contactStyles.formContainer} />
      <div className={contactStyles.blurb}>
        <h2>{paragraph.title}</h2>
        <p>{paragraph.text}</p>
      </div>
    </section>
  </article>
)

ContactPageTemplate.propTypes = {
  email: PropTypes.string,
  formTitle: PropTypes.string,
  banner: PropTypes.shape({
    background: PropTypes.object,
    title: PropTypes.string,
    subText: PropTypes.string,
    image: PropTypes.object
  }),
  paragraph: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  }),
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <ContactPageTemplate
      email={frontmatter.email}
      formTitle={frontmatter.formTitle}
      banner={frontmatter.banner}
      paragraph={frontmatter.paragraph}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        email
        formTitle
        banner {
          title
          subText
          background {
            alt
            image
          }
          image {
            alt
            image
          }
        }
        paragraph {
          title
          text
        }
      }
    }
  }
`
