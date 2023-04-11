import React, { useRef } from "react"
import "./SingleArticlePage.scss"
import { useParams } from "react-router-dom"
import articlesArray from "../ArticlesPage/articlesArray"
import ScrollDownBtn from "../../components/ScrollDownBtn/ScrollDownBtn"
import ArticleItem from "../../components/ArticleItem/ArticleItem"
import { Animated } from "react-animated-css"
import { AnimationOnScroll } from "react-animation-on-scroll"
// import { Helmet } from "react-helmet"

const SingleArticlePage = () => {
    const ref = useRef(null)

    const windowHeight = window.innerHeight - 122
    // const bgHeight = windowHeight - 180

    const scrollDownBtnClick = () => {
        window.scrollTo({
            top: windowHeight,
            behavior: "smooth",
        })
    }

    const { articleId } = useParams()
    const curretArticle = articlesArray.filter(
        (element) => element.id === Number(articleId)
    )

    // active tags

    let tag1 = ""
    let tag2 = ""
    let tag3 = ""
    let tag4 = ""
    let tag5 = ""
    let tag6 = ""
    let tag7 = ""
    let tag8 = ""
    let tag9 = ""
    let tag10 = ""

    const tagsArr = curretArticle[0].tag?.split(", ")

    for (let i = 0; i < tagsArr.length; i++) {
        if (tagsArr[i] === "world coal") {
            tag1 = "active"
        }
        if (tagsArr[i] === "statistics") {
            tag2 = "active"
        }
        if (tagsArr[i] === "crisis") {
            tag3 = "active"
        }
        if (tagsArr[i] === "reserves") {
            tag4 = "active"
        }
        if (tagsArr[i] === "energy crisis") {
            tag5 = "active"
        }
        if (tagsArr[i] === "top countries") {
            tag6 = "active"
        }
        if (tagsArr[i] === "export of coal") {
            tag7 = "active"
        }
        if (tagsArr[i] === "us coal") {
            tag8 = "active"
        }
        if (tagsArr[i] === "analysis") {
            tag9 = "active"
        }
        if (tagsArr[i] === "top companies") {
            tag10 = "active"
        }
    }

    return (
        <div className="single-article-page">
            {/* <Helmet>
                <title>Article</title>
                <meta
                    name="description"
                    content="FTOREX International trading company focused in procurement of coking, thermal, anthracite, PCI coals, as well as fertilizer worldwide. The major goal is to provide the price directly from manufacturers."
                />
            </Helmet> */}
            <section
                className={`preview-section`}
                style={{
                    height: windowHeight,
                    backgroundImage: `url(/${curretArticle[0].preview})`,
                }}
            >
                <div className="preview-bg">
                    <div className="bg-filter"></div>
                    <p className="preview-header">{curretArticle[0].name}</p>
                    <div
                        className="scroll-btn"
                        onClick={() => scrollDownBtnClick()}
                    >
                        <ScrollDownBtn />
                    </div>
                </div>
            </section>
            <section className="article-content-section" ref={ref}>
                <div className="container">
                    <div className="article-tag">{curretArticle[0].tag}</div>
                    <div className="border-left-paragraph">
                        {curretArticle[0]?.paragraph1}
                    </div>
                    {curretArticle[0].subtitle2 ? (
                        <p className="subtitle">{curretArticle[0].subtitle2}</p>
                    ) : undefined}
                    {curretArticle[0].mediumText2 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText2}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph2}
                    </p>
                    {curretArticle[0].articleImg2 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg2}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle3 ? (
                        <p className="subtitle">{curretArticle[0].subtitle3}</p>
                    ) : undefined}
                    {curretArticle[0].mediumText3 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText3}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph3}
                    </p>
                    {curretArticle[0].articleImg3 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg3}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle4 ? (
                        <p className="subtitle">{curretArticle[0].subtitle4}</p>
                    ) : undefined}
                    {curretArticle[0].mediumText4 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText4}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph4}
                    </p>
                    {curretArticle[0].articleImg4 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg4}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle5 ? (
                        <p className="subtitle">{curretArticle[0].subtitle5}</p>
                    ) : undefined}
                    {curretArticle[0].mediumText5 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText5}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph5}
                    </p>
                    {curretArticle[0].articleImg5 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg5}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle6 ? (
                        <p className="subtitle">{curretArticle[0].subtitle6}</p>
                    ) : undefined}
                    {curretArticle[0].mediumText6 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText6}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph6}
                    </p>
                    {curretArticle[0].articleImg6 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg6}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle7 ? (
                        <p className="subtitle">{curretArticle[0].subtitle7}</p>
                    ) : undefined}
                    {curretArticle[0].mediumText7 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText7}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph7}
                    </p>
                    {curretArticle[0].articleImg7 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg7}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle8 ? (
                        <p className="subtitle">{curretArticle[0].subtitle8}</p>
                    ) : undefined}
                    {curretArticle[0].mediumText8 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText8}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph8}
                    </p>
                    {curretArticle[0].articleImg8 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg8}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle9 ? (
                        <p className="subtitle">{curretArticle[0].subtitle9}</p>
                    ) : undefined}
                    {curretArticle[0].mediumText9 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText9}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph9}
                    </p>
                    {curretArticle[0].articleImg9 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg9}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle10 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle10}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText10 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText10}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph10}
                    </p>
                    {curretArticle[0].articleImg10 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg10}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle11 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle11}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText11 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText11}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph11}
                    </p>
                    {curretArticle[0].articleImg11 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg11}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle12 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle12}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText12 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText12}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph12}
                    </p>
                    {curretArticle[0].articleImg12 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg12}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle13 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle13}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText13 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText13}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph13}
                    </p>
                    {curretArticle[0].articleImg13 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg13}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle14 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle14}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText14 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText14}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph14}
                    </p>
                    {curretArticle[0].articleImg14 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg14}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle15 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle15}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText15 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText15}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph15}
                    </p>
                    {curretArticle[0].articleImg15 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg15}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle16 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle16}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText16 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText16}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph16}
                    </p>
                    {curretArticle[0].articleImg16 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg16}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle17 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle17}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText17 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText17}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph17}
                    </p>
                    {curretArticle[0].articleImg17 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg17}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle18 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle18}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText18 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText18}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph18}
                    </p>
                    {curretArticle[0].articleImg18 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg18}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle19 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle19}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText19 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText19}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph19}
                    </p>
                    {curretArticle[0].articleImg19 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg19}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle20 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle20}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText20 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText20}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph20}
                    </p>
                    {curretArticle[0].articleImg20 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg20}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle21 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle21}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText21 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText21}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph21}
                    </p>
                    {curretArticle[0].articleImg21 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg21}
                                alt=""
                            />
                        </div>
                    ) : undefined}
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
                                    us coal
                                </div>
                                <div className={`tag-item ${tag9}`}>
                                    analysis
                                </div>
                                <div className={`tag-item ${tag10}`}>
                                    top companies
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lines"></div>
                    <div className="recent-post">
                        <p className="recent-post-header">Recent Post:</p>
                        <div className="wrapper">
                            {articlesArray
                                .filter((element, index) => index > 16)
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
