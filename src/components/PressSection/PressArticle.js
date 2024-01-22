import React from "react"
import "./PressArticle.scss"

const PressArticle = ({ image, title, subtitle }) => {
    return (
        <div className="press-article-item">
            <div className="press-article-img">
                <img src={`images/${image}`} alt="" />
            </div>
            <p className="press-article-title">{title}</p>
            <p className="press-article-subtitle">{subtitle}</p>
        </div>
    )
}

export default PressArticle
