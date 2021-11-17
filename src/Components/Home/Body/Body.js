import React from 'react'
import './Body.css'
import { useStaticQuery, graphql } from 'gatsby';
import HeaderImage from '../../../static/Images/HeaderImage.svg'
const Body = () => {
    const data = useStaticQuery(graphql`
    query Spotlight {
        allContentfulSpotlight {
            nodes {
              cta {
                title
                url
              }
              image {
                fluid {
                  src
                }
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
  `);
    const spotlight = data.allContentfulSpotlight.nodes
    return (
        <div className="Body_Container">
            {spotlight.map((el, i) => (
                <div className="Body_Box" key={i}>
                    <div className="Boxone">
                        <img className="Header_image_box" src={el.image.fluid.src} alt="no image" />
                    </div>
                    <div className="boxtwo">
                        <h1 className="Body_Heading">{el.headline}</h1>
                        <p className="Body_para" dangerouslySetInnerHTML={{ __html: el.description.childMarkdownRemark.html }}></p>
                        <button className="Body_btn">{el.cta.title}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Body