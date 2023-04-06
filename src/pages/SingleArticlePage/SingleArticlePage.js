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
    let tag9 = ''

    const tagsArr = curretArticle[0].tag.split(', ')

    for (let i = 0; i < tagsArr.length; i++) {
        if (tagsArr[i] === 'world coal') {
            tag1 = 'active'
        }
        if (tagsArr[i] === 'statistics') {
            tag2 = 'active'
        }
        if (tagsArr[i] === 'crisis') {
            tag3 = 'active'
        }
        if (tagsArr[i] === 'reserves') {
            tag4 = 'active'
        }
        if (tagsArr[i] === 'energy crisis') {
            tag5 = 'active'
        }
        if (tagsArr[i] === 'top countries') {
            tag6 = 'active'
        }
        if (tagsArr[i] === 'export of coal') {
            tag7 = 'active'
        }
        if (tagsArr[i] === 'us coal market') {
            tag8 = 'active'
        }
        if (tagsArr[i] === 'analysis') {
            tag9 = 'active'
        }
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
                    <Animated
                        animationIn="fadeInUp"
                        isVisible={true}
                        animationInDuration={2000}
                    >
                        <div className="article-tag">
                            {curretArticle[0].tag}
                        </div>
                        <div className="border-left-paragraph">
                            {curretArticle[0]?.paragraph1}
                        </div>
                        {curretArticle[0].subtitle2 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle2}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph2}
                        </p>
                        {curretArticle[0].subtitle3 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle3}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph3}
                        </p>
                        {curretArticle[0].subtitle4 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle4}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph4}
                        </p>
                        {curretArticle[0].subtitle5 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle5}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph5}
                        </p>
                        {curretArticle[0].subtitle6 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle6}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph6}
                        </p>
                        {curretArticle[0].subtitle7 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle7}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph7}
                        </p>
                        {curretArticle[0].subtitle8 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle8}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph8}
                        </p>
                        {curretArticle[0].subtitle9 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle9}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph9}
                        </p>
                        {curretArticle[0].subtitle10 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle10}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph10}
                        </p>
                        {curretArticle[0].subtitle11 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle11}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph11}
                        </p>
                        {curretArticle[0].subtitle12 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle12}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph12}
                        </p>
                        {curretArticle[0].subtitle13 ? (
                            <p className="subtitle">
                                {curretArticle[0].subtitle13}
                            </p>
                        ) : undefined}
                        <p className="article-paragraph">
                            {curretArticle[0]?.paragraph13}
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
                    </Animated>
                    <p className="recent-post-header tablet-header">
                        Tagged with:
                    </p>
                    <div className="tags">
                        <div className="row header-and-tags-row" ref={ref}>
                            <p className="recent-post-header desktop-header">
                                Tagged with:
                            </p>
                            <div className="row tags-row">
                                <div className={`tag-item ${tag1}`}>
                                    world coal
                                </div>
                                <div className={`tag-item ${tag2}`}>
                                    statistics
                                </div>
                                <div className={`tag-item ${tag3}`}>crisis</div>
                                <div className={`tag-item ${tag4}`}>
                                    reserves
                                </div>
                                <div className={`tag-item ${tag5}`}>
                                    energy crisis
                                </div>
                                <div className={`tag-item ${tag6}`}>
                                    top countries
                                </div>
                                <div className={`tag-item ${tag7}`}>
                                    export of coal
                                </div>
                                <div className={`tag-item ${tag8}`}>
                                    us coal market
                                </div>
                                <div className={`tag-item ${tag9}`}>
                                    analysis
                                </div>
                            </div>
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
