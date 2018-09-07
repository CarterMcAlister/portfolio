import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import HeroBanner from '../components/HeroBanner'
import ContentTopper from '../components/ContentTopper'
import globalStyles from '../templates/global.module.css'
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <article>
        <HeroBanner background={{image:"https://cartermcalister.name/img/bg.png", alt:"test"}} title={"title"} subText={""} secondaryImage={""} />
        <section className={globalStyles.pageContent}>
        <ContentTopper />
        <div className={globalStyles.contentWrapper}>
          <div className={globalStyles.container}>
          </div>
        </div>
      </section>
    </article>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
