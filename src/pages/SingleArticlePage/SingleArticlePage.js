import React, { useRef } from 'react'
import './SingleArticlePage.scss'
import { useParams } from 'react-router-dom'
import articlesArray from '../ArticlesPage/articlesArray'
import ScrollDownBtn from '../../components/ScrollDownBtn/ScrollDownBtn'
import ArticleItem from '../../components/ArticleItem/ArticleItem'
import { Animated } from 'react-animated-css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const SingleArticlePage = () => {
    const ref = useRef(null)

    const windowHeight = window.innerHeight - 122
    const bgHeight = windowHeight - 180

    const scrollDownBtnClick = () => {
        if (windowHeight <= 690) {
            window.scrollTo({
                top: windowHeight - 122,
                behavior: 'smooth',
            })
        } else {
            window.scrollTo({
                top: 670,
                behavior: 'smooth',
            })
        }
    }

    const { articleId } = useParams()
    const curretArticle = articlesArray.filter(
        (element) => element.id === Number(articleId)
    )

    // active tags

    let tag1 = ''
    let tag2 = ''
    let tag3 = ''
    let tag4 = ''
    let tag5 = ''
    let tag6 = ''
    let tag7 = ''
    let tag8 = ''
    if (curretArticle[0].tag.includes('landing')) {
        tag1 = 'active'
        tag2 = ''
        tag3 = ''
        tag4 = ''
        tag5 = ''
        tag6 = ''
        tag7 = ''
        tag8 = ''
    } else if (curretArticle[0].tag.includes('charity')) {
        tag1 = ''
        tag2 = 'active'
        tag3 = ''
        tag4 = ''
        tag5 = ''
        tag6 = ''
        tag7 = ''
        tag8 = ''
    } else if (curretArticle[0].tag.includes('apps')) {
        tag1 = ''
        tag2 = ''
        tag3 = 'active'
        tag4 = ''
        tag5 = ''
        tag6 = ''
        tag7 = ''
        tag8 = ''
    } else if (curretArticle[0].tag.includes('education')) {
        tag1 = ''
        tag2 = ''
        tag3 = ''
        tag4 = 'active'
        tag5 = ''
        tag6 = ''
        tag7 = ''
        tag8 = ''
    } else if (curretArticle[0].tag.includes('data')) {
        tag1 = ''
        tag2 = ''
        tag3 = ''
        tag4 = ''
        tag5 = 'active'
        tag6 = ''
        tag7 = ''
        tag8 = ''
    } else if (curretArticle[0].tag.includes('book')) {
        tag1 = ''
        tag2 = ''
        tag3 = ''
        tag4 = ''
        tag5 = ''
        tag6 = 'active'
        tag7 = ''
        tag8 = ''
    } else if (curretArticle[0].tag.includes('design')) {
        tag1 = ''
        tag2 = ''
        tag3 = ''
        tag4 = ''
        tag5 = ''
        tag6 = ''
        tag7 = 'active'
        tag8 = ''
    } else if (curretArticle[0].tag.includes('website')) {
        tag1 = ''
        tag2 = ''
        tag3 = ''
        tag4 = ''
        tag5 = ''
        tag6 = ''
        tag7 = ''
        tag8 = 'active'
    }

    return (
        <div className="single-article-page">
            <div className="container">
                <section
                    className={`preview-section`}
                    style={{
                        height: windowHeight,
                    }}
                >
                    <div className="container">
                        <Animated
                            animationIn="fadeIn"
                            isVisible={true}
                            animationInDuration={2000}
                        >
                            <div
                                className="preview-bg"
                                style={{
                                    height: bgHeight,
                                    backgroundImage: `url(/${curretArticle[0].preview})`,
                                }}
                            >
                                <p className="preview-header">
                                    {curretArticle[0].name}
                                </p>
                                <div
                                    className="scroll-btn"
                                    onClick={() => scrollDownBtnClick()}
                                >
                                    <ScrollDownBtn />
                                </div>
                            </div>
                        </Animated>
                    </div>
                </section>
            </div>
            <section className="article-content-section" ref={ref}>
                <div className="container">
                    <div className="article-tag">{curretArticle[0].tag}</div>
                    <div className="border-left-paragraph">
                        {curretArticle[0]?.paragraph1}
                    </div>
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph2}
                    </p>
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph3}
                    </p>
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph4}
                    </p>
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph5}
                    </p>
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph6}
                    </p>
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph7}
                    </p>
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph8}
                    </p>
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph9}
                    </p>
                    {/* <div className="images-wrapper row">
                        <AnimationOnScroll
                            animateIn="animate__fadeInUp"
                            duration={1.5}
                            animateOnce={true}
                        >
                            <div>
                                <img
                                    src={`/${curretArticle[0].articleImg1}`}
                                    alt=""
                                ></img>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll
                            animateIn="animate__fadeInUp"
                            duration={1.5}
                            animateOnce={true}
                        >
                            <div>
                                <img
                                    src={`/${curretArticle[0].articleImg2}`}
                                    alt=""
                                ></img>
                            </div>
                        </AnimationOnScroll>
                    </div> */}
                    <p className="recent-post-header tablet-header">
                        Tagged with:
                    </p>
                    <div className="tags">
                        <div className="row tags-row" ref={ref}>
                            <p className="recent-post-header desktop-header">
                                Tagged with:
                            </p>
                            <div className={`tag-item ${tag1}`}>landing</div>
                            <div className={`tag-item ${tag2}`}>charity</div>
                            <div className={`tag-item ${tag3}`}>apps</div>
                            <div className={`tag-item ${tag4}`}>
                                education build
                            </div>
                            <div className={`tag-item ${tag5}`}>data</div>
                            <div className={`tag-item ${tag6}`}>book</div>
                            <div className={`tag-item ${tag7}`}>design</div>
                            <div className={`tag-item ${tag8}`}>website</div>
                        </div>
                    </div>
                    <div className="lines"></div>
                    <div className="recent-post">
                        <p className="recent-post-header">Recent Post:</p>
                        <div className="wrapper">
                            {articlesArray
                                .filter((element, index) => index > 23)
                                .map(({ id, preview, tag, name }) => (
                                    <div key={id} className="recent-post-item">
                                        <AnimationOnScroll
                                            animateIn="animate__fadeInUp"
                                            duration={1.5}
                                            animateOnce={true}
                                        >
                                            <ArticleItem
                                                id={id}
                                                preview={preview}
                                                tag={tag}
                                                name={name}
                                            />
                                        </AnimationOnScroll>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleArticlePage
