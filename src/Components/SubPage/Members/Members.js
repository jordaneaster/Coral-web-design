import React from 'react'
import './Members.css'
const Members = ({ filterMembers }) => {
    const filter = filterMembers[0]
    return (
        <div className="Member_Container">
            {filterMembers.map((el, i) => (
                <div className="Members_head" key={i}>
                    <h1 className="Member_ourTeam">{el.title}</h1>
                    <p className="Member_para" dangerouslySetInnerHTML={{
                        __html: el.description.childMarkdownRemark.html,
                    }}></p>
                </div>
            ))}
            <div className="team_box">
                {filter.teamMembers.map((el, i) => (
                    <div className="card">
                        <img className="card_image" src={el.headshot.fluid.src} alt="no image" />
                        <h3 className="Card_Name">{el.fullName}</h3>
                        <p className="Card_title">{el.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Members