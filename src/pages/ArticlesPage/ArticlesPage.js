import React from "react"
import "./ArticlesPage.scss"
import PageHeader from "../../components/PageHeader/PageHeader"
import articlesArray from "./articlesArray"
import MessageForm from "../../components/MessageForm/MessageForm"
import ArticleItem from "../../components/ArticleItem/ArticleItem"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import {
    onFirstPage,
    onSecondPage,
    onThirdPage,
} from "../../redux/pagesReducer"
import {
    setTag1,
    setTag10,
    setTag2,
    setTag3,
    setTag4,
    setTag5,
    setTag6,
    setTag7,
    setTag8,
    setTag9,
} from "../../redux/tagsReducer"
// import { Helmet } from "react-helmet"

const ArticlesPage = ({ messageRef }) => {
    // Tags

    const tagState = useAppSelector((state) => state.tagsState)
    const dispatch = useAppDispatch()

    const onTagClick = (e) => {
        if (Number(e.target.value) === 1) {
            if (tagState.tag1 === "") {
                dispatch(setTag1("active"))
            } else {
                dispatch(setTag1(""))
            }
        }
        if (Number(e.target.value) === 2) {
            if (tagState.tag2 === "") {
                dispatch(setTag2("active"))
            } else {
                dispatch(setTag2(""))
            }
        }
        if (Number(e.target.value) === 3) {
            if (tagState.tag3 === "") {
                dispatch(setTag3("active"))
            } else {
                dispatch(setTag3(""))
            }
        }
        if (Number(e.target.value) === 4) {
            if (tagState.tag4 === "") {
                dispatch(setTag4("active"))
            } else {
                dispatch(setTag4(""))
            }
        }
        if (Number(e.target.value) === 5) {
            if (tagState.tag5 === "") {
                dispatch(setTag5("active"))
            } else {
                dispatch(setTag5(""))
            }
        }
        if (Number(e.target.value) === 6) {
            if (tagState.tag6 === "") {
                dispatch(setTag6("active"))
            } else {
                dispatch(setTag6(""))
            }
        }
        if (Number(e.target.value) === 7) {
            if (tagState.tag7 === "") {
                dispatch(setTag7("active"))
            } else {
                dispatch(setTag7(""))
            }
        }
        if (Number(e.target.value) === 8) {
            if (tagState.tag8 === "") {
                dispatch(setTag8("active"))
            } else {
                dispatch(setTag8(""))
            }
        }
        if (Number(e.target.value) === 9) {
            if (tagState.tag9 === "") {
                dispatch(setTag9("active"))
            } else {
                dispatch(setTag9(""))
            }
        }
        if (Number(e.target.value) === 10) {
            if (tagState.tag10 === "") {
                dispatch(setTag10("active"))
            } else {
                dispatch(setTag10(""))
            }
        }
    }

    let summaryArr = []
    let tag1Arr = []
    let tag2Arr = []
    let tag3Arr = []
    let tag4Arr = []
    let tag5Arr = []
    let tag6Arr = []
    let tag7Arr = []
    let tag8Arr = []
    let tag9Arr = []
    let tag10Arr = []

    if (tagState.tag1 === "active") {
        tag1Arr = articlesArray.filter((element) =>
            element.tag.includes("world coal")
        )
    }
    if (tagState.tag2 === "active") {
        tag2Arr = articlesArray.filter((element) =>
            element.tag.includes("statistics")
        )
    }
    if (tagState.tag3 === "active") {
        tag3Arr = articlesArray.filter((element) =>
            element.tag.includes("crisis")
        )
    }
    if (tagState.tag4 === "active") {
        tag4Arr = articlesArray.filter((element) =>
            element.tag.includes("reserves")
        )
    }
    if (tagState.tag5 === "active") {
        tag5Arr = articlesArray.filter((element) =>
            element.tag.includes("energy crisis")
        )
    }
    if (tagState.tag6 === "active") {
        tag6Arr = articlesArray.filter((element) =>
            element.tag.includes("top countries")
        )
    }
    if (tagState.tag7 === "active") {
        tag7Arr = articlesArray.filter((element) =>
            element.tag.includes("export of coal")
        )
    }
    if (tagState.tag8 === "active") {
        tag8Arr = articlesArray.filter((element) =>
            element.tag.includes("us coal")
        )
    }
    if (tagState.tag9 === "active") {
        tag9Arr = articlesArray.filter((element) =>
            element.tag.includes("analysis")
        )
    }
    if (tagState.tag10 === "active") {
        tag10Arr = articlesArray.filter((element) =>
            element.tag.includes("top companies")
        )
    }
    if (
        tag1Arr.length === 0 &&
        tag2Arr.length === 0 &&
        tag3Arr.length === 0 &&
        tag4Arr.length === 0 &&
        tag5Arr.length === 0 &&
        tag6Arr.length === 0 &&
        tag7Arr.length === 0 &&
        tag8Arr.length === 0 &&
        tag9Arr.length === 0 &&
        tag10Arr.length === 0 &&
        tagState.tag1 === "" &&
        tagState.tag2 === "" &&
        tagState.tag3 === "" &&
        tagState.tag4 === "" &&
        tagState.tag5 === "" &&
        tagState.tag6 === "" &&
        tagState.tag7 === "" &&
        tagState.tag8 === "" &&
        tagState.tag9 === "" &&
        tagState.tag10 === ""
    ) {
        summaryArr = articlesArray
    } else {
        summaryArr = [
            ...tag1Arr,
            ...tag2Arr,
            ...tag3Arr,
            ...tag4Arr,
            ...tag5Arr,
            ...tag6Arr,
            ...tag7Arr,
            ...tag8Arr,
            ...tag9Arr,
            ...tag10Arr,
        ]
    }

    const table = {}
    const resArr = summaryArr.filter(({ id }) => !table[id] && (table[id] = 1))

    // pages of articles
    let filtredArr1 = resArr.filter((element, index) => index < 9)
    let filtredArr2 = resArr.filter(
        (element, index) => index >= 9 && index < 18
    )
    let filtredArr3 = resArr.filter(
        (element, index) => index >= 18 && index < 27
    )

    const pageState = useAppSelector((state) => state.pageState)

    const onFirstPageClick = () => {
        dispatch(onFirstPage())
    }
    const onSecondPageClick = () => {
        dispatch(onSecondPage())
    }
    const onThirdPageClick = () => {
        dispatch(onThirdPage())
    }

    const onPrevClick = () => {
        if (pageState.page3 === "active-page") {
            dispatch(onSecondPage())
        } else if (pageState.page2 === "active-page") {
            dispatch(onFirstPage())
        }
    }
    const onNextClick = () => {
        if (pageState.page1 === "active-page" && filtredArr2.length > 0) {
            dispatch(onSecondPage())
        } else if (
            pageState.page2 === "active-page" &&
            filtredArr3.length > 0
        ) {
            dispatch(onThirdPage())
        }
    }

    // Disable page btns

    let disable2Page = ""
    let disable3Page = ""

    if (filtredArr2.length === 0) {
        disable2Page = "hide"
        if (pageState.page2 === "active-page") {
            dispatch(onFirstPage())
        }
    }
    if (filtredArr3.length === 0) {
        disable3Page = "hide"
        if (pageState.page3 === "active-page") {
            dispatch(onSecondPage())
        }
    }

    return (
        <div className="articles-page">
            {/* <Helmet>
                <title>Articles</title>
                <meta
                    name="description"
                    content="FTOREX International trading company focused in procurement of coking, thermal, anthracite, PCI coals, as well as fertilizer worldwide. The major goal is to provide the price directly from manufacturers."
                />
            </Helmet> */}
            <PageHeader name={"articles"} />
            <div className="articles-content-wrapper">
                <div className="container">
                    <p className="articles-header mobile-header">
                        Popular Topics
                    </p>
                    <div className="row tags-row">
                        <p className="articles-header desktop-header">
                            Popular Topics
                        </p>
                        <div className="tags-buttons">
                            <button
                                className={`tag-btn ${tagState.tag1}`}
                                value={1}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                world coal
                            </button>
                            <button
                                className={`tag-btn ${tagState.tag2}`}
                                value={2}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                statistics
                            </button>
                            <button
                                className={`tag-btn ${tagState.tag3}`}
                                value={3}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                crisis
                            </button>
                            <button
                                className={`tag-btn ${tagState.tag4}`}
                                value={4}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                reserves
                            </button>
                            <button
                                className={`tag-btn ${tagState.tag5}`}
                                value={5}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                energy crisis
                            </button>
                            <button
                                className={`tag-btn ${tagState.tag6}`}
                                value={6}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                top countries
                            </button>
                            <button
                                className={`tag-btn ${tagState.tag7}`}
                                value={7}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                export of coal
                            </button>
                            <button
                                className={`tag-btn ${tagState.tag8}`}
                                value={8}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                us coal
                            </button>
                            <button
                                className={`tag-btn ${tagState.tag9}`}
                                value={9}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                analysis
                            </button>
                            <button
                                className={`tag-btn ${tagState.tag10}`}
                                value={10}
                                onClick={(e) => onTagClick(e, "value")}
                            >
                                top companies
                            </button>
                        </div>
                    </div>
                    {resArr.length < 1 ? (
                        <div className="no-matches">No matches</div>
                    ) : (
                        <div className="wrapper">
                            {pageState.page1 === "active-page"
                                ? filtredArr1.map(
                                      ({ id, preview, tag, name }) => (
                                          <div
                                              key={id}
                                              className="article-item"
                                          >
                                              <ArticleItem
                                                  id={id}
                                                  preview={preview}
                                                  tag={tag}
                                                  name={name}
                                              />
                                          </div>
                                      )
                                  )
                                : pageState.page2 === "active-page"
                                ? filtredArr2.map(
                                      ({ id, preview, tag, name }) => (
                                          <div
                                              key={id}
                                              className="article-item"
                                          >
                                              <ArticleItem
                                                  id={id}
                                                  preview={preview}
                                                  tag={tag}
                                                  name={name}
                                              />
                                          </div>
                                      )
                                  )
                                : filtredArr3.map(
                                      ({ id, preview, tag, name }) => (
                                          <div
                                              key={id}
                                              className="article-item"
                                          >
                                              <ArticleItem
                                                  id={id}
                                                  preview={preview}
                                                  tag={tag}
                                                  name={name}
                                              />
                                          </div>
                                      )
                                  )}
                        </div>
                    )}
                    <div className="pages">
                        <div className="anchor" ref={messageRef}></div>
                        <div className="row">
                            <button
                                className="page prev-page"
                                onClick={() => onPrevClick()}
                            ></button>
                            <button
                                className={`page ${pageState.page1}`}
                                onClick={() => onFirstPageClick()}
                            >
                                1
                            </button>
                            <button
                                className={`page ${pageState.page2} ${disable2Page}`}
                                onClick={() => onSecondPageClick()}
                            >
                                2
                            </button>
                            <button
                                className={`page ${pageState.page3} ${disable3Page}`}
                                onClick={() => onThirdPageClick()}
                            >
                                3
                            </button>
                            <button
                                className="page next-page"
                                onClick={() => onNextClick()}
                            ></button>
                        </div>
                    </div>
                </div>
            </div>

            <MessageForm />
        </div>
    )
}

export default ArticlesPage
