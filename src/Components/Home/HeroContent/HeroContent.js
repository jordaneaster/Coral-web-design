import React from 'react'
import './HeroContent.css'
import { useStaticQuery, graphql } from 'gatsby';
import Image from '../../../static/Images/ICN-Personalized.svg'
const HeroContent = () => {
    const data = useStaticQuery(graphql`
    query Threecolumn {
        allContentfulThreeColumnComponent {
            nodes {
              title
              content {
                bodyCopy {
                  childMarkdownRemark {
                    html
                  }
                }
                image {
                  title
                  fluid {
                    src
                  }
                }
              }
            }
          }
      }
  `);
    const threecolumn = data.allContentfulThreeColumnComponent.nodes[0]
    return (
        <div className="Hero_Container">
            <div className="Hero_box">
                <h1 className="Hero_Heading">{threecolumn.title}</h1>
                <div className="Hero_display">
                    {threecolumn.content.map((el, i) => (
                        <div className="box_outline">
                            <div>
                                <img className="HeroImage" src={Image} alt="no image" />
                            </div>
                            <div>
                                <p className="Hero_desc" dangerouslySetInnerHTML={{ __html: el.bodyCopy.childMarkdownRemark.html }}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default HeroContent