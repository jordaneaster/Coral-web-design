import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import BlockSubComponent from '../Components/Block/BlockSub'
const SubPage = ({ data }) => {
  return (
    <Layout>
      <BlockSubComponent blocks={data.contentfulPages.content} />
    </Layout>
  )
}
export default SubPage
export const query = graphql`
query Subpages($slug: String!) {
  contentfulPages(slug: {eq: $slug}) {
    title
    content {
      __typename
      ... on ContentfulIntroHeaderMulti {
        id
        title
        images {
          file {
            url
          }
        }
        subTitle {
          childMarkdownRemark {
            html
          }
        }
      }
      ... on ContentfulSpotlightNoImage {
        id
        description {
          childMarkdownRemark {
            html
          }
        }
        cta {
          title
          url
        }
        headline
      }
      ... on ContentfulTeam {
        id
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        teamMembers {
          fullName
          title
          linkedInProfileUrl
          headshot {
            fluid {
              src
            }
          }
        }
      }
      ... on ContentfulFaq {
        id
        questions {
          question
          answer {
            childMarkdownRemark {
              html
            }
          }
        }
        title
      }
    }
  }
  }
`