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
      }
      ... on ContentfulSpotlight {
        id
        headline
      }
      ... on ContentfulSpotlightNoImage {
        id
        headline
      }
      ... on ContentfulThreeColumnComponent {
        id
        title
      }
    }
  }
  }
`