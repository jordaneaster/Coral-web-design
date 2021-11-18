import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import BlockCoponent from '../Components/Block/BlockComponent'

const HomePage = ({ data }) => {
  return (
    <Layout>
      <BlockCoponent blocks={data.contentfulIndex.content} />
    </Layout>
  )
}
export default HomePage

export const query = graphql`
query IndexPage {
  contentfulIndex(slug: {eq: "/"}) {
    id
    slug
    title
    content {
      __typename
      ... on ContentfulIntroHeaderComponent {
        id
        title
        subTitle {
          childMarkdownRemark {
            html
          }
        }
        image {
          fluid {
            src
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
        cta {
          title
          url
        }
        description {
          childMarkdownRemark {
            html
          }
        }
        image {
          fluid {
            src
          }
        }
      }
      ... on ContentfulSpotlightNoImage {
        id
        headline
        cta {
          title
          url
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
      ... on ContentfulThreeColumnComponent {
        id
        title
        content {
          bodyCopy {
            childMarkdownRemark {
              html
            }
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
  }
`