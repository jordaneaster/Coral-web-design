import React from 'react'
import './Faq.scss'
import { Collapse } from 'antd';
const Faq = ({ block }) => {
    const { Panel } = Collapse;
    return (
        <div className="faq">
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
            </div>
    )
}
export default Faq