import React from "react"
import "./ArticlesSection.scss"
import { Link } from "react-router-dom"
import articleArr from "../../pages/ArticlesPage/articlesArray"

const ArticlesSection = () => {
    return (
        <section className="articles-section">
            <div className="container">
                <div className="row articles-row">
                    <div className="articles-header">
                        {/* <AnimationOnScroll
                            animateIn="animate__backInUp"
                            duration={1.5}
                            animateOnce={true}
                        > */}
                        <p className="big-header">
                            Interesting information about our field
                        </p>
                        {/* </AnimationOnScroll> */}
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
                <div className="articles-items-row">
                    {articleArr
                        .filter((element, index) => index < 4)
                        .map(({ id, preview, name }) => (
                            // <AnimationOnScroll
                            //     animateIn="animate__fadeInUp"
                            //     duration={1.5}
                            //     animateOnce={true}
                            //     key={id}
                            // >
                            <div className="article-item">
                                <Link to={`/articles/${id}`}>
                                    <img src={`/${preview}`} alt="" />
                                    <p>{name}</p>
                                </Link>
                            </div>
                            // </AnimationOnScroll>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default ArticlesSection
