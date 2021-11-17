import React from 'react'
import { graphql } from 'gatsby';
const SubPage = ({data}) => {
    const filter = data.contentfulPages.content.filter(el => el.title !== undefined ? true : false)
    console.log(filter)
    return(
        <h1>hello world</h1>
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
        }
      }
  }
`