import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import Header from '../Components/SubPage/Header/Header'
import Spotlight from '../Components/SubPage/SpotligtnoImage/Spotlight'
import Members from '../Components/SubPage/Members/Members'
const SubPage = ({ data }) => {
  const filterHeader = data.contentfulPages.content.filter((el,i) => i === 0 ? true : false)
  const filterBody = data.contentfulPages.content.filter((el,i) => i === 1 ? true : false)
  const filterMembers = data.contentfulPages.content.filter((el,i) => i === 2 ? true : false)
  return (
    <Layout>
      <Header headerdata={filterHeader} />
      <Spotlight filterBody={filterBody} />
      <Members filterMembers={filterMembers} />
    </Layout>
  )
}
export default SubPage
export const query = graphql`
query Subpages($slug: String!) {
    contentfulPages(slug: {eq: $slug}) {
      title
      content {
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
      }
      }
  }
`