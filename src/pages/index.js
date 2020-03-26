import React from "react"
import { Link, graphql, Text } from "gatsby"

import BackgroundSlider from 'gatsby-image-background-slider'
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const subtitle = data.site.siteMetadata.subtitle
  


  return (
    <Layout location={location} title={siteTitle} subtitle={subtitle}>
      <BackgroundSlider 
       query={data}/>
       
      {/* <SEO title="All posts" /> */}
      {/* <Bio /> */}
      {/* {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })} */}

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
      nodes {
        relativePath
        childImageSharp {
          fluid (maxWidth: 2560, quality: 100){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
