import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import HeroBanner from '../components/HeroBanner';
import blogPageStyles from './blog-page.module.css'
import globalStyles from './global.module.css'
import ContentTopper from '../components/ContentTopper'
import placeholder from '../img/skill-icons/html.svg'

export const BlogPageTemplate = ({ posts }) => (
    <article>
      <HeroBanner background={{image:"https://cartermcalister.name/img/bg.png", alt:"test"}} title={"Latest Posts"} subText={""} secondaryImage={""} />
      <section className={globalStyles.pageContent}>
        <ContentTopper />
        <div className={globalStyles.contentWrapper}>
          <div className={blogPageStyles.container}>

            <ul className={blogPageStyles.list}>
              {posts
              .map(({ node: post }) => (
                <li className={blogPageStyles.listItem} key={post.id}>
                  <Link className={blogPageStyles.itemLink} to={post.fields.slug}>
                  <img src={placeholder} className={blogPageStyles.itemImage} />
                  <div>
                  
                    <h3 className={blogPageStyles.itemTitle}>{post.frontmatter.title}</h3>
                  
                  <p className={blogPageStyles.itemText}>
                    {post.excerpt}
                    <br />
                  </p>
                  </div>
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>
    </article>
  )

BlogPageTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <BlogPageTemplate
      posts={posts}
    />
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPage

export const blogQuery = graphql`
  query BlogQuery {
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
