import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import LandingPage from '../components/landing-page'
class RootIndex extends React.Component {
  render() {
    const content = get(this, 'props.data.allContentfulIndex.edges[0].node.content')

    return (
      console.log(content),
      <Layout location={this.props.location}>
       
        <LandingPage content={content} />
      </Layout>
     
    )
  }
}

export default RootIndex

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