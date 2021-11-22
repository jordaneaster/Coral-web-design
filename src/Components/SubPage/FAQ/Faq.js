import React from 'react'
import './Faq.css'
import { Collapse } from 'antd';
const Faq = ({ block }) => {
    const { Panel } = Collapse;
    return (
        <>
            <h1 className="faq_title">{block.title}</h1>
            <div className="faq_item">
                <Collapse  expandIconPosition="right">
                    {block.questions.map((el, i) => (
                        <Panel header={el.question} key={i}>
                            <div className="faqtext" dangerouslySetInnerHTML={{
                                __html: el.answer.childMarkdownRemark.html,
                            }}></div>
                        </Panel>
                    ))}
                </Collapse>
            </div>
        </>
    )
}
export default Faq