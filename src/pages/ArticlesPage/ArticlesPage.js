import React, { useState } from "react"
import "./ArticlesPage.scss"
import PageHeader from "../../components/PageHeader/PageHeader"
import articlesArray from "./articlesArray"
import MessageForm from "../../components/MessageForm/MessageForm"
import ArticleItem from "../../components/ArticleItem/ArticleItem"
import { Animated } from "react-animated-css"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import {
    onFirstPage,
    onSecondPage,
    onThirdPage,
} from "../../redux/pagesReducer"

const ArticlesPage = ({ messageRef }) => {
    // Tags

    const [tagState, setTagState] = useState({
        tag1: "",
        tag2: "",
        tag3: "",
        tag4: "",
        tag5: "",
        tag6: "",
        tag7: "",
        tag8: "",
        tag9: "",
        tag10: "",
    })

    const onTagClick = (e) => {
        if (Number(e.target.value) === 1) {
            if (tagState.tag1 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag1: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag1: "",
                }))
            }
        }
        if (Number(e.target.value) === 2) {
            if (tagState.tag2 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag2: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag2: "",
                }))
            }
        }
        if (Number(e.target.value) === 3) {
            if (tagState.tag3 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag3: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag3: "",
                }))
            }
        }
        if (Number(e.target.value) === 4) {
            if (tagState.tag4 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag4: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag4: "",
                }))
            }
        }
        if (Number(e.target.value) === 5) {
            if (tagState.tag5 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag5: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag5: "",
                }))
            }
        }
        if (Number(e.target.value) === 6) {
            if (tagState.tag6 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag6: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag6: "",
                }))
            }
        }
        if (Number(e.target.value) === 7) {
            if (tagState.tag7 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag7: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag7: "",
                }))
            }
        }
        if (Number(e.target.value) === 8) {
            if (tagState.tag8 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag8: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag8: "",
                }))
            }
        }
        if (Number(e.target.value) === 9) {
            if (tagState.tag9 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag9: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag9: "",
                }))
            }
        }
        if (Number(e.target.value) === 10) {
            if (tagState.tag10 === "") {
                setTagState((prevState) => ({
                    ...prevState,
                    tag10: "active",
                }))
            } else {
                setTagState((prevState) => ({
                    ...prevState,
                    tag10: "",
                }))
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
        console.log(tag5Arr)
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

    const [activePage, setActivePage] = useState({
        page1: "active-page",
        page2: "",
        page3: "",
    })

    const pageState = useAppSelector((state) => state.pageState)
    const dispatch = useAppDispatch()

    console.log(pageState)
    console.log(tagState)

    const onFirstPageClick = () => {
        setActivePage(() => ({
            page1: "active-page",
            page2: "",
            page3: "",
        }))
        dispatch(onFirstPage())
        // scrollToTop()
    }
    const onSecondPageClick = () => {
        setActivePage(() => ({
            page1: "",
            page2: "active-page",
            page3: "",
        }))
        dispatch(onSecondPage())
        // scrollToTop()
    }
    const onThirdPageClick = () => {
        setActivePage(() => ({
            page1: "",
            page2: "",
            page3: "active-page",
        }))
        dispatch(onThirdPage())
        // scrollToTop()
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
            <PageHeader name={"articles"} />
            <div className="container">
                <p className="articles-header mobile-header">Popular Topics</p>
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
                            ? filtredArr1.map(({ id, preview, tag, name }) => (
                                  <div key={id} className="article-item">
                                      <Animated
                                          animationIn="fadeIn"
                                          isVisible={true}
                                          animationInDuration={1500}
                                      >
                                          <ArticleItem
                                              id={id}
                                              preview={preview}
                                              tag={tag}
                                              name={name}
                                          />
                                      </Animated>
                                  </div>
                              ))
                            : pageState.page2 === "active-page"
                            ? filtredArr2.map(({ id, preview, tag, name }) => (
                                  <div key={id} className="article-item">
                                      <Animated
                                          animationIn="fadeIn"
                                          isVisible={true}
                                          animationInDuration={1500}
                                      >
                                          <ArticleItem
                                              id={id}
                                              preview={preview}
                                              tag={tag}
                                              name={name}
                                          />
                                      </Animated>
                                  </div>
                              ))
                            : filtredArr3.map(({ id, preview, tag, name }) => (
                                  <div key={id} className="article-item">
                                      <Animated
                                          animationIn="fadeIn"
                                          isVisible={true}
                                          animationInDuration={1500}
                                      >
                                          <ArticleItem
                                              id={id}
                                              preview={preview}
                                              tag={tag}
                                              name={name}
                                          />
                                      </Animated>
                                  </div>
                              ))}
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
            <MessageForm />
        </div>
    )
}

export default ArticlesPage
