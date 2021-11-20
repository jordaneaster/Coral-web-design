import React from 'react'
import './Spotlight.css'
const Spotlight = ({ block }) => {
    return (
        <div className="Spotlight_Container">
                <div className="Spotlight_box">
                    <div className="Spotlight_left">
                        <h1 className="spotlight_heading">{block.headline}</h1>
                    </div>
                    <div className="Spotlight_right">
                        <p className="spotlight_Desc" dangerouslySetInnerHTML={{
                            __html: block.description.childMarkdownRemark.html,
                        }}></p>
                        <button className="spotlightbtn">{block.cta.title}</button>
                    </div>
                </div>
        </div>
    )
}
export default Spotlight