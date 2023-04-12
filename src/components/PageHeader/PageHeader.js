import React, { useRef } from "react"
import "./PageHeader.scss"
import ScrollDownBtn from "../ScrollDownBtn/ScrollDownBtn"

const PageHeader = ({ name, subtitle }) => {
    const ref = useRef(null)

    const windowHeight = window.screen.height - 122

    const scrollDownBtnClick = () => {
        window.scrollTo({
            top: windowHeight,
            behavior: "smooth",
        })
    }

    return (
        <>
            <section
                className={`preview-section`}
                style={{
                    height: windowHeight,
                }}
            >
                <div className="container">
                    <div className="bg-filter"></div>
                    <div className="preview-header">
                        <p>{name}</p>
                        <p>{subtitle}</p>
                    </div>
                    <div
                        className="scroll-btn"
                        onClick={() => scrollDownBtnClick()}
                    >
                        <ScrollDownBtn />
                    </div>
                </div>
            </section>
            <div className="ref" ref={ref}></div>
        </>
    )
}

export default PageHeader
