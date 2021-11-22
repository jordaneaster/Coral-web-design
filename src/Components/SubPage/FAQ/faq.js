const faq = ({block}) => {
    return (
        <div className="faq_head">
            <h1 className="faq_title">
            {block.title}
            {block.question}
            </h1>
        </div>
    )
}