import React from 'react'
import './Banner.css'
import { useStaticQuery, graphql } from 'gatsby';
const Banner = () => {
    const data = useStaticQuery(graphql`
    query SpotlightNoImage {
        allContentfulSpotlightNoImage {
            nodes {
              cta {
                title
                url
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
              headline
            }
          }
      }
  `);
    const spotlightnoimage = data.allContentfulSpotlightNoImage.nodes
    return (
        <>
            {spotlightnoimage.map((el, i) => (
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