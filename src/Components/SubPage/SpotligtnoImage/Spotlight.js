import React from 'react'
import './Spotlight.css'
const Spotlight = ({ filterBody }) => {
    return (
        <div className="Spotlight_Container">
            {filterBody.map((el, i) => (
                <div className="Spotlight_box" key={i}>
                    <div className="Spotlight_left">
                        <h1 className="spotlight_heading">{el.headline}</h1>
                    </div>
                    <div className="Spotlight_right">
                        <p className="spotlight_Desc" dangerouslySetInnerHTML={{
                            __html: el.description.childMarkdownRemark.html,
                        }}></p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Spotlight