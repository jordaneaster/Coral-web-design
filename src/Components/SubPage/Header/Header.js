import React from 'react'
import './Header.css'
const Header = ({ block }) => {
    return (
        <div className="Headers_Container">
                <div className="Headers_Box">
                    <div className="HeadersLef">
                        <h1 className="header_left_heading">{block.title}</h1>
                        <p className="header_right_para" dangerouslySetInnerHTML={{
                            __html: block.subTitle.childMarkdownRemark.html,
                        }}></p>
                    </div>
                    <div className="HeadersRight">
                        <img src={block.images[0].file.url} alt="no image" />
                    </div>
                </div>
        </div>
    )
}
export default Header