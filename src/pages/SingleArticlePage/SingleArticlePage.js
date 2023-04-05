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
                                <p className="preview-header">ARTICLE</p>
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
                        animationInDuration={1500}
                    >
                        <p className="article-header">
                            {curretArticle[0].name}
                        </p>
                    </Animated>
                    <div className="article-tag">{curretArticle[0].tag}</div>
                    <p className="article-paragraph-1">
                        <span>Quick summary :</span> The way you present your
                        product or service is essential to its success — or at
                        least it could be if you know how to do it right. The
                        first impression you make on people is crucial. When
                        selling a product, you want that first impression to be
                        as positive and remarkable as possible. If you have
                        managed to draw them in, you will need to introduce the
                        product within a few seconds.
                    </p>
                    <div className="border-left-paragraph">
                        <p>
                            The way you present your product or service is
                            essential to its success — or at least it could be
                            if you know how to do it right. On the Web, like
                            anywhere else, the first impression you make on
                            people is crucial. When selling a product, you want
                            that first impression to be as positive and
                            remarkable as possible.
                        </p>
                        <p>
                            Once people visit your website, make sure to attract
                            their attention. If you have managed to draw them
                            in, you will need to introduce the product within a
                            few seconds. According to last year’s Google
                            Analytics benchmarking report, bounce rates in the
                            US were as high as 42.5%. If people don’t understand
                            what you are offering them or how it works, they
                            will lose interest quickly. Show them that your
                            product is just what they want, that it’s useful and
                            that it adds some kind of value to their lives.
                        </p>
                    </div>
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={1.5}
                        animateOnce={true}
                    >
                        <p className="subtitle">Surprise Your Visitors :</p>
                        <p className="article-paragraph-2">
                            Another great way to attract attention is by
                            surprising visitors. Offer them something they did
                            not expect; make them pause and think to make sense
                            of what they see. We like to be surrounded by the
                            familiar, and things that don’t fit our expectations
                            automatically draw our attention.
                        </p>
                        <p className="article-paragraph-3">
                            Nike presents its new running shoes in the shape of
                            wings, with the promise of a “Super-natural ride.”
                            The arrangement of these multi-colored shoes and the
                            fade in the middle almost force people to take a
                            second look. The visual is not only appealing, but
                            attracts attention because people are not sure
                            whether they are looking at wings or shoes or
                            both.One such example is the brand Evian. How could
                            boring water possibly attract attention? Quite
                            simple, actually. Come up with a product-related
                            slogan, such as “Live young,” and then translate
                            that slogan into a visual campaign using some great
                            humor. A couple of years back, Evian’s funny
                            campaign videos went viral — proof that its unique
                            approach works.
                        </p>
                    </AnimationOnScroll>
                    <div className="images-wrapper row">
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
                    </div>
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
