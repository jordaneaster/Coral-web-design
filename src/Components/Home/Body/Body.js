import React from 'react'
import './Body.scss'
import { useStaticQuery, graphql } from 'gatsby';
const Body = () => {
  const data = useStaticQuery(graphql`
    query Spotlight {
      allContentfulIndex(filter: {slug: {eq: "/"}}) {
        nodes {
          content {
            ... on ContentfulSpotlight {
              id
              cta {
                url
                title
              }
              description {
                description
              }
              headline
              image {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
      }
  `);
  const spotlight = data.allContentfulIndex.nodes[0]
  const filter = spotlight.content.filter(el => el.headline !== undefined ? true : false)
  return (
    <div className="Body_Container">
      {filter.map((el, i) => (
        <div className="Body_Box" key={i}>
          <div className="Boxone">
            <img className="Header_image_box" src={el.image.fluid.src} alt="no image" />
          </div>
          <div className="boxtwo">
            <h1 className="Body_Heading">{el.headline}</h1>
            <p className="Body_para">{el.description.description}</p>
            <button className="Body_btn">{el.cta.title}</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Body