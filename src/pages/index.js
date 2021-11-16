import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import LandingPage from '../components/landing-page'

const HomePage = (props) => {
  const data = props.data.allContentfulIndex.edges[0].node.content
  return(
    <Layout location={props.location}>
        <LandingPage content={data} />
      </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
query MyQuery {
  allContentfulIndex(filter: {slug: {eq: "/"}}) {
    edges {
      node {
        id
        content {
          ... on ContentfulIntroHeaderComponent {
            title
            subTitle {
              childMarkdownRemark {
                html
              }
            }
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            cta {
              title
              url
            }
          }
          ... on ContentfulSpotlight {
            id
            headline
            description {
              childMarkdownRemark {
                html
              }
            }
            cta {
              title
              url
            }
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          ... on ContentfulSpotlightNoImage {
            id
            headline
            description {
              childrenMarkdownRemark {
                html
              }
            }
            cta {
              title
              url
            }
          }
        }
      }
    }
  }
}
`