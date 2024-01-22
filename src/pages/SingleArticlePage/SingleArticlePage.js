import React, { useRef } from "react"
import "./SingleArticlePage.scss"
import { useParams } from "react-router-dom"
import articlesArray from "../ArticlesPage/articlesArray"
import ScrollDownBtn from "../../components/ScrollDownBtn/ScrollDownBtn"
import ArticleItem from "../../components/ArticleItem/ArticleItem"
import { Helmet } from "react-helmet-async"

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

    // Random arr

    // const randomArr = articlesArray.sort(function () {
    //     return Math.random() - 0.5
    // })

    const resentArticlesArr = articlesArray

    return (
        <div className="single-article-page">
            <Helmet>
                <title>FTOREX | ARTICLE</title>
                <meta
                    name="description"
                    content="FTOREX International trading company focused in procurement of coking, thermal, anthracite, PCI coals, as well as fertilizer worldwide. The major goal is to provide the price directly from manufacturers."
                />
            </Helmet>
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
                    {curretArticle[0].articleImg1 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg1}
                                alt=""
                            />
                        </div>
                    ) : undefined}
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
                    {curretArticle[0]?.tableLarge2 ? (
                        <div>
                            <table className="article-table-desctop article-table-desctop-large">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableHeader2
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableHeader3
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableItem14
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableItem27
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableItem15
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableItem28
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableItem16
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge2
                                                    .tableItem29
                                            }
                                        </td>
                                    </tr>
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem4 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2.tableItem4
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem17
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem30
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem5 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2.tableItem5
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem18
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem31
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem6 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2.tableItem6
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem19
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem32
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem7 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2.tableItem7
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem20
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem33
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem8 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2.tableItem8
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem21
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem34
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem9 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2.tableItem9
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem22
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem35
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem10 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem10
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem23
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem36
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem11 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem11
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem24
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem37
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem12 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem12
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem25
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem38
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge2
                                        .tableItem13 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem13
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem26
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge2
                                                        .tableItem39
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                </tbody>
                            </table>
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
                    {curretArticle[0]?.table3 ? (
                        <div>
                            <table className="article-table-desctop">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableHeader2
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem11
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem12
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem13
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem4
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem14
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem5
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem15
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem6
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem16
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem7
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem17
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem8
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem18
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem9
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem19
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem10
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table3
                                                    .tableItem20
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : undefined}
                    {curretArticle[0]?.tableLarge3 ? (
                        <div>
                            <table className="article-table-desctop article-table-desctop-large">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableHeader2
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableHeader3
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem11
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem21
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem12
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem22
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem13
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem23
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem4
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem14
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem24
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem5
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem15
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem25
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem6
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem16
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem26
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem7
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem17
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge3
                                                    .tableItem27
                                            }
                                        </td>
                                    </tr>
                                    {curretArticle[0]?.tableLarge3
                                        .tableItem8 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge3.tableItem8
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge3
                                                        .tableItem18
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge3
                                                        .tableItem28
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge3
                                        .tableItem9 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge3.tableItem9
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge3
                                                        .tableItem19
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge3
                                                        .tableItem29
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge3
                                        .tableItem10 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge3
                                                        .tableItem10
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge3
                                                        .tableItem20
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge3
                                                        .tableItem30
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                </tbody>
                            </table>
                        </div>
                    ) : undefined}
                    {curretArticle[0].list3 ? (
                        <div className="list">
                            <p>{curretArticle[0].list3.listItem1}</p>
                            <p>{curretArticle[0].list3.listItem2}</p>
                            <p>{curretArticle[0].list3.listItem3}</p>
                            <p>{curretArticle[0].list3.listItem4}</p>
                            <p>{curretArticle[0].list3.listItem5}</p>
                            <p>{curretArticle[0].list3.listItem6}</p>
                            <p>{curretArticle[0].list3.listItem7}</p>
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
                    {curretArticle[0]?.tableLarge4 ? (
                        <div>
                            <table className="article-table-desctop article-table-desctop-large">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableHeader2
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableHeader3
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableItem11
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableItem21
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableItem12
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableItem22
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableItem13
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge4
                                                    .tableItem23
                                            }
                                        </td>
                                    </tr>
                                    {curretArticle[0]?.tableLarge4
                                        .tableItem4 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4.tableItem4
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem14
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem24
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge4
                                        .tableItem5 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4.tableItem5
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem15
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem25
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge4
                                        .tableItem6 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4.tableItem6
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem16
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem26
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge4
                                        .tableItem7 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4.tableItem7
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem17
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem27
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge4
                                        .tableItem8 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4.tableItem8
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem18
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem28
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge4
                                        .tableItem9 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4.tableItem9
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem19
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem29
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge4
                                        .tableItem10 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem10
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem20
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge4
                                                        .tableItem30
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                </tbody>
                            </table>
                        </div>
                    ) : undefined}
                    {curretArticle[0].table4Columns4 ? (
                        <div>
                            <table className="article-table-desctop article-table-desctop-large">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableHeader2
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableHeader3
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableHeader4
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableItem11
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableItem21
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableItem31
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableItem12
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableItem22
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table4Columns4
                                                    .tableItem32
                                            }
                                        </td>
                                    </tr>
                                    {curretArticle[0]?.table4Columns4
                                        .tableItem3 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.table4Columns4
                                                        .tableItem3
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.table4Columns4
                                                        .tableItem13
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.table4Columns4
                                                        .tableItem23
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.table4Columns4
                                                        .tableItem33
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.table4Columns4
                                        .tableItem4 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.table4Columns4
                                                        .tableItem4
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.table4Columns4
                                                        .tableItem14
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.table4Columns4
                                                        .tableItem24
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.table4Columns4
                                                        .tableItem34
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                </tbody>
                            </table>
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
                    {curretArticle[0]?.tableLarge5 ? (
                        <div>
                            <table className="article-table-desctop article-table-desctop-large">
                                {curretArticle[0].tableLarge5.tableHeader1 ? (
                                    <thead>
                                        <tr className="article-table-row">
                                            <td className="article-table-item article-table-header">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableHeader1
                                                }
                                            </td>
                                            <td className="article-table-item article-table-header">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableHeader2
                                                }
                                            </td>
                                            <td className="article-table-item article-table-header">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableHeader3
                                                }
                                            </td>
                                        </tr>
                                    </thead>
                                ) : undefined}
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge5
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge5
                                                    .tableItem11
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge5
                                                    .tableItem21
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge5
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge5
                                                    .tableItem12
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge5
                                                    .tableItem22
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge5
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge5
                                                    .tableItem13
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge5
                                                    .tableItem23
                                            }
                                        </td>
                                    </tr>
                                    {curretArticle[0]?.tableLarge5
                                        .tableItem4 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5.tableItem4
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem14
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem24
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge5
                                        .tableItem5 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5.tableItem5
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem15
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem25
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge5
                                        .tableItem6 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5.tableItem6
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem16
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem26
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge5
                                        .tableItem7 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5.tableItem7
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem17
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem27
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge5
                                        .tableItem8 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5.tableItem8
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem18
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem28
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge5
                                        .tableItem9 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5.tableItem9
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem19
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem29
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge5
                                        .tableItem10 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem10
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem20
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge5
                                                        .tableItem30
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                </tbody>
                            </table>
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
                    {curretArticle[0]?.table6 ? (
                        <div>
                            <table className="article-table-desctop">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table6
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table6
                                                    .tableHeader2
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table6
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table6
                                                    .tableItem11
                                            }
                                        </td>
                                    </tr>
                                    {curretArticle[0]?.table6.tableItem2 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]?.table6
                                                        .tableItem2
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]?.table6
                                                        .tableItem12
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.table6.tableItem3 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]?.table6
                                                        .tableItem3
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]?.table6
                                                        .tableItem13
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.table6.tableItem4 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]?.table6
                                                        .tableItem4
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]?.table6
                                                        .tableItem14
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.table6.tableItem5 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]?.table6
                                                        .tableItem5
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]?.table6
                                                        .tableItem15
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                </tbody>
                            </table>
                        </div>
                    ) : undefined}
                    {curretArticle[0]?.tableLarge6 ? (
                        <div>
                            <table className="article-table-desctop article-table-desctop-large">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableHeader2
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableHeader3
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem7
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem13
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem8
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem14
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem9
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem15
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem4
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem10
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem16
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem5
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem11
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem17
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem6
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem12
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge6
                                                    .tableItem18
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                    {curretArticle[0]?.table7 ? (
                        <div>
                            <table className="article-table-desctop">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableHeader2
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableItem5
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableItem6
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableItem7
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableItem4
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table7
                                                    .tableItem8
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : undefined}
                    {curretArticle[0].list7 ? (
                        <div className="list">
                            <p>{curretArticle[0].list7.listItem1}</p>
                            <p>{curretArticle[0].list7.listItem2}</p>
                            <p>{curretArticle[0].list7.listItem3}</p>
                            <p>{curretArticle[0].list7.listItem4}</p>
                            <p>{curretArticle[0].list7.listItem5}</p>
                            <p>{curretArticle[0].list7.listItem6}</p>
                            <p>{curretArticle[0].list7.listItem7}</p>
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
                    {curretArticle[0].list8 ? (
                        <div className="list">
                            <p>{curretArticle[0].list8.listItem1}</p>
                            <p>{curretArticle[0].list8.listItem2}</p>
                            <p>{curretArticle[0].list8.listItem3}</p>
                            <p>{curretArticle[0].list8.listItem4}</p>
                            <p>{curretArticle[0].list8.listItem5}</p>
                            <p>{curretArticle[0].list8.listItem6}</p>
                            <p>{curretArticle[0].list8.listItem7}</p>
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
                    {curretArticle[0]?.table9 ? (
                        <div>
                            <table className="article-table-desctop">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table9
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table9
                                                    .tableHeader2
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table9
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table9
                                                    .tableItem3
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table9
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table9
                                                    .tableItem4
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : undefined}
                    {curretArticle[0].list9 ? (
                        <div className="list">
                            <p>{curretArticle[0].list9.listItem1}</p>
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
                    {curretArticle[0]?.table11 ? (
                        <div>
                            <table className="article-table-desctop">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table11
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table11
                                                    .tableHeader2
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table11
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table11
                                                    .tableItem3
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table11
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table11
                                                    .tableItem4
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : undefined}
                    {curretArticle[0].list11 ? (
                        <div className="list">
                            <p>{curretArticle[0].list11.listItem1}</p>
                            <p>{curretArticle[0].list11.listItem2}</p>
                            <p>{curretArticle[0].list11.listItem3}</p>
                            <p>{curretArticle[0].list11.listItem4}</p>
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
                    {curretArticle[0]?.table12 ? (
                        <div>
                            <table className="article-table-desctop">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableHeader2
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem6
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem7
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem8
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem4
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem9
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem5
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table12
                                                    .tableItem10
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : undefined}
                    {curretArticle[0]?.tableLarge12 ? (
                        <div>
                            <table className="article-table-desctop article-table-desctop-large">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableHeader2
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableHeader3
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableItem14
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableItem27
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableItem15
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableItem28
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableItem16
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge12
                                                    .tableItem29
                                            }
                                        </td>
                                    </tr>
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem4 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem4
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem17
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem30
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem5 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem5
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem18
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem31
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem6 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem6
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem19
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem32
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem7 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem7
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem20
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem33
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem8 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem8
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem21
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem34
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem9 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem9
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem22
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem35
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem10 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem10
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem23
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem36
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem11 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem11
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem24
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem37
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem12 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem12
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem25
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem38
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge12
                                        .tableItem13 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem13
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem26
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge12
                                                        .tableItem39
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                </tbody>
                            </table>
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
                    {curretArticle[0]?.table13 ? (
                        <div>
                            <table className="article-table-desctop">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table13
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.table13
                                                    .tableHeader2
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table13
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table13
                                                    .tableItem3
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table13
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.table13
                                                    .tableItem4
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : undefined}
                    {curretArticle[0].list13 ? (
                        <div className="list">
                            <p>{curretArticle[0].list13.listItem1}</p>
                            <p>{curretArticle[0].list13.listItem2}</p>
                            <p>{curretArticle[0].list13.listItem3}</p>
                            <p>{curretArticle[0].list13.listItem4}</p>
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
                    {curretArticle[0].list14 ? (
                        <div className="list">
                            <p>{curretArticle[0].list14.listItem1}</p>
                            <p>{curretArticle[0].list14.listItem2}</p>
                            <p>{curretArticle[0].list14.listItem3}</p>
                            <p>{curretArticle[0].list14.listItem4}</p>
                            <p>{curretArticle[0].list14.listItem5}</p>
                            <p>{curretArticle[0].list14.listItem6}</p>
                            <p>{curretArticle[0].list14.listItem7}</p>
                            <p>{curretArticle[0].list14.listItem8}</p>
                            <p>{curretArticle[0].list14.listItem9}</p>
                            <p>{curretArticle[0].list14.listItem10}</p>
                        </div>
                    ) : undefined}
                    {curretArticle[0]?.tableLarge14 ? (
                        <div>
                            <table className="article-table-desctop article-table-desctop-large">
                                <thead>
                                    <tr className="article-table-row">
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableHeader1
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableHeader2
                                            }
                                        </td>
                                        <td className="article-table-item article-table-header">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableHeader3
                                            }
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableItem1
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableItem11
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableItem21
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableItem2
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableItem12
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableItem22
                                            }
                                        </td>
                                    </tr>
                                    <tr className="article-table-row">
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableItem3
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableItem13
                                            }
                                        </td>
                                        <td className="article-table-item">
                                            {
                                                curretArticle[0]?.tableLarge14
                                                    .tableItem23
                                            }
                                        </td>
                                    </tr>
                                    {curretArticle[0]?.tableLarge14
                                        .tableItem4 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem4
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem14
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem24
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge14
                                        .tableItem5 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem5
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem15
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem25
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge14
                                        .tableItem6 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem6
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem16
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem26
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge14
                                        .tableItem7 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem7
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem17
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem27
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge14
                                        .tableItem8 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem8
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem18
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem28
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge14
                                        .tableItem9 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem9
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem19
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem29
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                    {curretArticle[0]?.tableLarge14
                                        .tableItem10 ? (
                                        <tr className="article-table-row">
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem10
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem20
                                                }
                                            </td>
                                            <td className="article-table-item">
                                                {
                                                    curretArticle[0]
                                                        ?.tableLarge14
                                                        .tableItem30
                                                }
                                            </td>
                                        </tr>
                                    ) : undefined}
                                </tbody>
                            </table>
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
                    {curretArticle[0].list17 ? (
                        <div className="list">
                            <p>{curretArticle[0].list17.listItem1}</p>
                            <p>{curretArticle[0].list17.listItem2}</p>
                            <p>{curretArticle[0].list17.listItem3}</p>
                            <p>{curretArticle[0].list17.listItem4}</p>
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
                    {curretArticle[0].list18 ? (
                        <div className="list">
                            <p>{curretArticle[0].list18.listItem1}</p>
                            <p>{curretArticle[0].list18.listItem2}</p>
                            <p>{curretArticle[0].list18.listItem3}</p>
                            <p>{curretArticle[0].list18.listItem4}</p>
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
                    {curretArticle[0].list21 ? (
                        <div className="list">
                            <p>{curretArticle[0].list21.listItem1}</p>
                            <p>{curretArticle[0].list21.listItem2}</p>
                            <p>{curretArticle[0].list21.listItem3}</p>
                            <p>{curretArticle[0].list21.listItem4}</p>
                            <p>{curretArticle[0].list21.listItem5}</p>
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle22 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle22}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText22 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText22}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph22}
                    </p>
                    {curretArticle[0].articleImg22 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg22}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle23 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle23}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText23 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText23}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph23}
                    </p>
                    {curretArticle[0].articleImg23 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg23}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle24 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle24}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText24 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText24}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph24}
                    </p>
                    {curretArticle[0].articleImg24 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg24}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle25 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle25}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText25 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText25}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph25}
                    </p>
                    {curretArticle[0].articleImg25 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg25}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle26 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle26}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText26 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText26}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph26}
                    </p>
                    {curretArticle[0].articleImg26 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg26}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle27 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle27}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText27 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText27}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph27}
                    </p>
                    {curretArticle[0].articleImg27 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg27}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle28 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle28}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText28 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText28}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph28}
                    </p>
                    {curretArticle[0].articleImg28 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg28}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle29 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle29}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText29 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText29}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph29}
                    </p>
                    {curretArticle[0].articleImg29 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg29}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle30 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle30}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText30 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText30}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph30}
                    </p>
                    {curretArticle[0].articleImg30 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg30}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle31 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle31}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText31 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText31}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph31}
                    </p>
                    {curretArticle[0].articleImg31 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg31}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle32 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle32}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText32 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText32}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph32}
                    </p>
                    {curretArticle[0].articleImg32 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg32}
                                alt=""
                            />
                        </div>
                    ) : undefined}
                    {curretArticle[0].subtitle33 ? (
                        <p className="subtitle">
                            {curretArticle[0].subtitle33}
                        </p>
                    ) : undefined}
                    {curretArticle[0].mediumText33 ? (
                        <p className="medium-text">
                            {curretArticle[0].mediumText33}
                        </p>
                    ) : undefined}
                    <p className="article-paragraph">
                        {curretArticle[0]?.paragraph33}
                    </p>
                    {curretArticle[0].articleImg33 ? (
                        <div className="img-wrapper">
                            <img
                                className="article-img"
                                src={curretArticle[0].articleImg33}
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
                            {resentArticlesArr
                                .filter(
                                    (element, index) =>
                                        index >= resentArticlesArr.length - 3
                                )
                                .map(({ id, preview, tag, name }) => (
                                    <div key={id} className="recent-post-item">
                                        <ArticleItem
                                            id={id}
                                            preview={preview}
                                            tag={tag}
                                            name={name}
                                        />
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
