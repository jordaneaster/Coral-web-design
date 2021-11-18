import React from 'react'
import './HeroContent.css'

const HeroContent = ({block}) => {
  return (
    <div className="Hero_Container">
      {
        <div className="Hero_box">
          <h1 className="Hero_Heading">{block.title}</h1>
          <div className="Hero_display">
            {block.content.map((el, index) => (
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
      }
    </div>
  )
}
export default HeroContent