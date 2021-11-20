import React from 'react'
import './Members.css'
const Members = ({ block }) => {
    return (
        <div className="Member_Container">
                <div className="Members_head">
                    <h1 className="Member_ourTeam">{block.title}</h1>
                    <p className="Member_para" dangerouslySetInnerHTML={{
                        __html: block.description.childMarkdownRemark.html,
                    }}></p>
                </div>
            <div className="team_box">
                {block.teamMembers.map((el, i) => (
                    <div className="card" key={i}>
                        <img className="card_image" src={el.headshot.fluid.src} alt="Headshot" />
                        <h3 className="Card_Name">{el.fullName}</h3>
                        <p className="Card_title">{el.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Members