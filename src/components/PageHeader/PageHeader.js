import React, { useRef } from 'react'
import './PageHeader.scss'
import ScrollDownBtn from '../ScrollDownBtn/ScrollDownBtn'
import { Animated } from 'react-animated-css'

const PageHeader = ({ name }) => {
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

    return (
        <>
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
                    </Animated>
                </div>
            </section>
            <div className="ref" ref={ref}></div>
        </>
    )
}

export default PageHeader
