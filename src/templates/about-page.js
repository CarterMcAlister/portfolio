import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import HeroBanner from '../components/HeroBanner'
import ContentTopper from '../components/ContentTopper'
import globalStyles from './global.module.css'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <article>
      <HeroBanner background={{image:"https://cartermcalister.name/img/bg.png", alt:"test"}} title={title} subText={""} secondaryImage={""} />
      <section className={globalStyles.pageContent}>
        <ContentTopper />
        <div className={globalStyles.contentWrapper}>
          <div className={globalStyles.container}>
            <PageContent content={content} />
          </div>
        </div>
      </section>
    </article>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
