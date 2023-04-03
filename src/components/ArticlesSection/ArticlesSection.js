import React from 'react'
import './ArticlesSection.scss'

const ArticlesSection = () => {
    return (
        <section className="articles-section">
            <div className="container">
                <p className="small-header">Articles</p>
                <div className="row articles-row">
                    <div className="articles-header">
                        <p className="big-header">
                            Interesting information about our field
                        </p>
                    </div>
                    <div>
                        <button className="articles-btn">
                            <div className="row btn-content-row">
                                <p>more Articles</p>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="row articles-items-row">
                    <div className="article-item">
                        <img src="images/article-1.png" alt="" />
                        <p>how to start working in the industry means</p>
                    </div>
                    <div className="article-item">
                        <img src="images/article-2.png" alt="" />
                        <p>
                            Get to know the tools that are often used for work
                        </p>
                    </div>
                    <div className="article-item">
                        <img src="images/article-3.png" alt="" />
                        <p>tips to start a career in the meaning industry</p>
                    </div>
                    <div className="article-item">
                        <img src="images/article-4.png" alt="" />
                        <p>
                            Get to know the tools that are often used for work
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArticlesSection
