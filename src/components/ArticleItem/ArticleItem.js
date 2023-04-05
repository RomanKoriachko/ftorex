import React from 'react'
import './ArticleItem.scss'
import { Link } from 'react-router-dom'

const ArticleItem = ({ id, preview, tag, name }) => {
    return (
        <>
            <Link to={`/articles/${id}`}>
                <div className="article-preview">
                    <img src={`/${preview}`} alt="" />
                </div>
            </Link>
            <div className="article-tag">{tag}</div>
            <Link key={id} to={`/articles/${id}`}>
                <div className="article-name">{name}</div>
            </Link>
        </>
    )
}

export default ArticleItem
