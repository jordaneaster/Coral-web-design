import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import Tags from './tags'

const LandingPage = ({ content }) => {
    console.log(content)
    return (
        <Container>
            <div className="main-index" key={content}>
                {content.map((node, index) => {
                    return (
                        <div className="content" key={index}>
                            <h1>{node.title}</h1>
                            <h1>{node.headline}</h1>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}
export default LandingPage