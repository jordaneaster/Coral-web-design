import React from 'react'
import './Header.css'

const Header = ({ block }) => {
  return (
    <div className="Header_Container">
      {
        <div className="Header_box">
          <div className="div_head">
            <h4 className="Header_Title">{block.title}</h4>
            <p className="Header_desc" dangerouslySetInnerHTML={{ __html: block.subTitle.childMarkdownRemark.html }}></p>
            <a href={block.cta.url} target="_blank" >
              <div className="Btn_Cotainer">
                <button className="get_started">{block.cta.title}</button>
              </div>
            </a>
          </div>
          <div className="header_div">
            <img className="header_image" src={block.image.fluid.src} alt="Header Image" />
          </div>
        </div>
      }
    </div>
  )
}
export default Header