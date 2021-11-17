import React from 'react'
import './HeroContent.css'
import { useStaticQuery, graphql } from 'gatsby';
import Image from '../../../static/Images/ICN-Personalized.svg'
const HeroContent = () => {
  const data = useStaticQuery(graphql`
    query Threecolumn {
      allContentfulIndex(filter: {slug: {eq: "/"}}) {
        nodes {
          content {
            ... on ContentfulThreeColumnComponent {
              id
              title
              content {
                image {
                  file {
                    url
                  }
                }
                bodyCopy {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            }
          }
        }
      }
      }
  `);
  const threecolumn = data.allContentfulIndex.nodes[0].content
  const filter = threecolumn.filter(el => el.title != undefined ? true : false)
  return (
    <div className="Hero_Container">
      {filter.map((els, i) => (
        <div className="Hero_box" key={i}>
          <h1 className="Hero_Heading">{els.title}</h1>
          <div className="Hero_display">
            {els.content.map((el, index) => (
              <div className="box_outline" key={index}>
                <div>
                  <img className="HeroImage" src={el.image.file.url} alt="no image" />
                </div>
                <div>
                  <p className="Hero_desc" dangerouslySetInnerHTML={{ __html: el.bodyCopy.childMarkdownRemark.html }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default HeroContent