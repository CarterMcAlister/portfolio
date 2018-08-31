import React from 'react'
import PropTypes from 'prop-types'
import HeroBanner from '../components/HeroBanner';

export const ProjectsPageTemplate = ({ title }) => (
  <article>
    <HeroBanner background={""} title={title} subText={"subtext"} secondaryImage={""} />
    <section className={""}>
    </section>
  </article>
)

ProjectsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const ProjectsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ProjectsPageTemplate
      title={post.frontmatter.title}
    />
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProjectsPage

export const ProjectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
