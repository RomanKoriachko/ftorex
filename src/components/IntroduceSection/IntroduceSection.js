import React, { useRef } from 'react'
import './IntroduceSection.scss'
import ScrollDownBtn from '../ScrollDownBtn/ScrollDownBtn'

const IntroduceSection = () => {
    const ref = useRef(null)
    const scrollDownBtnClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const windowHeight = window.innerHeight - 122

    return (
        <section className="introduce-section">
            <div
                className="container introduce-wrapper"
                style={{
                    height: windowHeight,
                }}
            >
                <div className="introduce-text-wrapper">
                    <div className="introduce-content">
                        <p>Step to a profitable business with us.</p>
                        <p>
                            FTOREX company moves and focuses on industrial
                            meaning. aiming to produce coal for the needs of
                            countries around the world FTOREX always produces
                            tens of thousands of coal every day to prepare
                        </p>
                    </div>
                </div>
                <div
                    className="scroll-btn"
                    onClick={() => scrollDownBtnClick()}
                >
                    <ScrollDownBtn />
                </div>
            </div>
            <div ref={ref}></div>
        </section>
    )
}

export default IntroduceSection
