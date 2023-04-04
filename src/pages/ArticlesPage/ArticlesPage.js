import React, { useState } from 'react'
import './ArticlesPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import articlesArray from './articlesArray'
import MessageForm from '../../components/MessageForm/MessageForm'

const ArticlesPage = () => {
    const filtredArr1 = articlesArray.filter((element, index) => index < 9)
    const filtredArr2 = articlesArray.filter(
        (element, index) => index >= 9 && index < 18
    )
    const filtredArr3 = articlesArray.filter(
        (element, index) => index >= 18 && index < 27
    )

    const [activePage, setActivePage] = useState({
        page1: 'active-page',
        page2: '',
        page3: '',
    })
    const [currentArr, setCurrentArr] = useState(filtredArr1)

    const onFirstPageClick = () => {
        setActivePage(() => ({
            page1: 'active-page',
            page2: '',
            page3: '',
        }))
        setCurrentArr(filtredArr1)
    }
    const onSecondPageClick = () => {
        setActivePage(() => ({
            page1: '',
            page2: 'active-page',
            page3: '',
        }))
        setCurrentArr(filtredArr2)
    }
    const onThirdPageClick = () => {
        setActivePage(() => ({
            page1: '',
            page2: '',
            page3: 'active-page',
        }))
        setCurrentArr(filtredArr3)
    }

    const onPrevClick = () => {
        if (currentArr[0].id >= 19) {
            onSecondPageClick()
        } else if (currentArr[0].id >= 10) {
            onFirstPageClick()
        }
    }
    const onNextClick = () => {
        if (currentArr[0].id === 1) {
            onSecondPageClick()
        } else if (currentArr[0].id === 10) {
            onThirdPageClick()
        }
    }

    return (
        <div className="articles-page">
            <PageHeader name={'articles'} />
            <div className="container">
                <div className="row tags-row">
                    <p>Popular Topics</p>
                    <button className="tag-btn active">landing</button>
                    <button className="tag-btn">Charity</button>
                    <button className="tag-btn">apps</button>
                    <button className="tag-btn">Education build</button>
                    <button className="tag-btn">data</button>
                    <button className="tag-btn">book</button>
                    <button className="tag-btn">Design</button>
                    <button className="tag-btn">website</button>
                </div>
                <div className="wrapper">
                    {currentArr.map(({ id, preview, tag, name }) => (
                        <div key={id} className="article-item">
                            <div className="article-preview">
                                <img src={preview} alt="" />
                            </div>
                            <div className="article-tag">{tag}</div>
                            <div className="article-name">{name}</div>
                        </div>
                    ))}
                </div>
                <div className="pages">
                    <div className="row">
                        <button
                            className="page prev-page"
                            onClick={() => onPrevClick()}
                        ></button>
                        <button
                            className={`page ${activePage.page1}`}
                            onClick={() => onFirstPageClick()}
                        >
                            1
                        </button>
                        <button
                            className={`page ${activePage.page2}`}
                            onClick={() => onSecondPageClick()}
                        >
                            2
                        </button>
                        <button
                            className={`page ${activePage.page3}`}
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
