import React from 'react'
import './HeroContent.scss'
import { useStaticQuery, graphql } from 'gatsby';
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
                  bodyCopy
                }
              }
            }
          }
        }
      }
      }
  `);
  const threecolumn = data.allContentfulIndex.nodes[0].content
  const filter = threecolumn.filter(el => el.title !== undefined ? true : false)
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
                  <p className="Hero_desc">{el.bodyCopy.bodyCopy}</p>
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