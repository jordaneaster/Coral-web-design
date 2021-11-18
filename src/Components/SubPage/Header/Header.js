import React from 'react'
import './Header.css'
const Header = ({ headerdata }) => {
    return (
        <div className="Headers_Container">
            {headerdata.map((el, i) => (
                <div className="Headers_Box" key={i}>
                    <div className="HeadersLef">
                        <h1 className="header_left_heading">{el.title}</h1>
                        <p className="header_right_para" dangerouslySetInnerHTML={{
                            __html: el.subTitle.childMarkdownRemark.html,
                        }}></p>
                    </div>
                    <div className="HeadersRight">
                        <img src={el.images[0].file.url} alt="no image" />
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Header