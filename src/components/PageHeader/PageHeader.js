import React, { useRef } from 'react'
import './PageHeader.scss'
import ScrollDownBtn from '../ScrollDownBtn/ScrollDownBtn'

const PageHeader = ({ name }) => {
    const ref = useRef(null)
    const scrollDownBtnClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }
    const windowHeight = window.innerHeight - 122
    const bgHeight = windowHeight - 160

    return (
        <>
            <section
                className={`preview-section`}
                style={{
                    height: windowHeight,
                }}
            >
                <div className="container">
                    <div
                        className="preview-bg"
                        style={{
                            height: bgHeight,
                        }}
                    >
                        <p className="preview-header">{name}</p>
                        <div
                            className="scroll-btn"
                            onClick={() => scrollDownBtnClick()}
                        >
                            <ScrollDownBtn />
                        </div>
                    </div>
                </div>
            </section>
            <div ref={ref}></div>
        </>
    )
}

export default PageHeader
