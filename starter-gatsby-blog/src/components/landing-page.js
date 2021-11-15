import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import Tags from './tags'

const LandingPage = ({content}) => {
    if(!content) return null
    if(!Array.isArray(content)) return null

    return (
        console.log(content),
        <Container>
            <div className="main-index" key={content}>
                {content.map((node, index) => {
                    return(
                        console.log(node),
                        <div className="content" key={index}>
                          <h1 key={index}>{node.title}</h1>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}
export default LandingPage