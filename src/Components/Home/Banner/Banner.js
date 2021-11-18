import React from 'react'
import './Banner.css'
import { useStaticQuery, graphql } from 'gatsby';
const Banner = () => {
  const data = useStaticQuery(graphql`
    query SpotlightNoImage {
      allContentfulIndex(filter: {slug: {eq: "/"}}) {
        nodes {
          content {
            ... on ContentfulSpotlightNoImage {
              id
              cta {
                url
                title
              }
              headline
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
      }
  `);
  const spotlightnoimage = data.allContentfulIndex.nodes[0].content
  const filter = spotlightnoimage.filter(el => el.headline != undefined ? true : false)
  return (
    <>
      {filter.map((el, i) => (
        <div className="Banner_Container" key={i}>
          <div className="Banner_Box">
            <h1 className="Banner_Heading">{el.headline}</h1>
            <p className="Banner_para" dangerouslySetInnerHTML={{ __html: el.description.childMarkdownRemark.html }}></p>
            <button className="Banner_btn">{el.cta.title}</button>
          </div>
        </div>
      ))}
    </>
  )
}
export default Banner