import React from "react"
import "./ArticlesSection.scss"
import { Link } from "react-router-dom"
import articleArr from "../../pages/ArticlesPage/articlesArray"

const ArticlesSection = ({ ref8 }) => {
    function kitcut(text, limit) {
        text = text.trim()
        if (text.length <= limit) {
            return text
        }
        text = text.slice(0, limit)
        let lastSpace = text.lastIndexOf(" ")
        if (lastSpace > 0) {
            text = text.substr(0, lastSpace)
        }
        return text + "..."
    }

    return (
        <section className="articles-section">
            <div className="section-anker-element" ref={ref8}></div>
            <div className="container">
                <div className="row articles-row">
                    <div className="articles-header">
                        <p className="big-header">
                            Ftorex Blog: Stay Ahead with Industry News, Expert
                            Tips, and Success Stories!
                        </p>
                    </div>
                    <div className="more-articles-btn">
                        <Link to="/articles">
                            <button className="articles-btn">
                                <div className="row btn-content-row">
                                    <p>more Articles</p>
                                    <div className="btn-arrow"></div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <p className="articles-text">
                    Stay informed and empowered with Ftorex Blog, your go-to
                    source for the latest updates, insights, and inspiration.
                    Our team of industry experts regularly share valuable
                    information, trends, and best practices to help you stay
                    ahead in your industry. Also, you would discover tips on on
                    how to streamline your supply chain, deal with regulatory
                    changes, increase profits, and more. 
                </p>
                <p className="articles-text">
                    Explore real-life case studies and success stories to gain
                    valuable knowledge from our satisfied customers. Join our
                    community today and discover the secrets to success in your
                    industry!
                </p>
                <div className="articles-items-row">
                    {articleArr
                        .filter((element, index) => index < 4)
                        .map(({ id, preview, name, paragraph1 }) => (
                            <div key={id} className="article-item">
                                <Link to={`/articles/${id}`}>
                                    <div className="article-item-img">
                                        <img src={`/${preview}`} alt="" />
                                    </div>
                                    <p className="article-name">
                                        {kitcut(name, 23)}
                                    </p>
                                    <p className="article-text">
                                        {kitcut(paragraph1, 80)}
                                    </p>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default ArticlesSection
