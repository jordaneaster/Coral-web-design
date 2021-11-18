import React from 'react'
import './Body.css'
const Body = ({ block }) => {
  return (
    <div className="Body_Container">
      {
        <div className="Body_Box">
          <div className="Boxone">
            <img className="Header_image_box" src={block.image.fluid.src} alt="no image" />
          </div>
          <div className="boxtwo">
            <h1 className="Body_Heading">{block.headline}</h1>
            <p className="Body_para" dangerouslySetInnerHTML={{ __html: block.description.childMarkdownRemark.html }}></p>
            <button className="Body_btn">{block.cta.title}</button>
          </div>
        </div>
      }
    </div>
  )
}
export default Body