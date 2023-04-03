import React, { useRef } from 'react'
import './PageHeader.scss'
import ScrollDownBtn from '../ScrollDownBtn/ScrollDownBtn'

const PageHeader = ({ name }) => {
    const ref = useRef(null)
    const scrollDownBtnClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <section className="preview-section">
            <div className="container">
                <div className="preview-bg">
                    <p className="preview-header">{name}</p>
                    <div
                        className="scroll-btn"
                        onClick={() => scrollDownBtnClick()}
                    >
                        <ScrollDownBtn />
                    </div>
                </div>
            </div>
            <div ref={ref}></div>
        </section>
    )
}

export default PageHeader
