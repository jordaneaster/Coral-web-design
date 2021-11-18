import React from 'react'
import './Banner.css'
const Banner = ({ block }) => {
  return (
    <>
    {
      <div className="Banner_Container">
        <div className="Banner_Box">
          <h1 className="Banner_Heading">{block.headline}</h1>
          <p className="Banner_para" dangerouslySetInnerHTML={{ __html: block.description.childMarkdownRemark.html }}></p>
          <button className="Banner_btn">{block.cta.title}</button>
        </div>
      </div>
    }
    </>
  )
}
export default Banner