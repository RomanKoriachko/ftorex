import React from "react"
import "./ArticleItem.scss"
import { Link } from "react-router-dom"

const ArticleItem = ({ id, preview, tag, name }) => {
    return (
        <>
            <Link to={`/articles/${id}`}>
                <div className="article-preview">
                    <img src={`/${preview}`} alt="" />
                </div>
            </Link>
            <div className="row item-tags-row">
                {tag.split(",").map((el, i) => (
                    <div key={i} className="article-tag">
                        {el}
                    </div>
                ))}
            </div>
            <Link key={id} to={`/articles/${id}`}>
                <div className="article-name">{name}</div>
            </Link>
        </>
    )
}

export default ArticleItem
