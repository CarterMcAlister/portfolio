import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import HeroBanner from '../components/HeroBanner';
import blogPageStyles from './blog-page.module.css'

export const BlogPageTemplate = ({ posts }) => (
    <article>
      <HeroBanner background={{image:"https://cartermcalister.name/img/bg.png", alt:"test"}} title={"Latest Posts"} subText={""} secondaryImage={""} />
      <section className={blogPageStyles.container}>
        {posts
          .map(({ node: post }) => (
            <div
              className="content"
              style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
              key={post.id}
            >
              <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
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
