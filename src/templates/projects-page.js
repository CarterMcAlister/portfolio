import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ProjectsPageTemplate = ({ title }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
)

ProjectsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const ProjectsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ProjectsPageTemplate
      contentComponent={HTMLContent}
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
