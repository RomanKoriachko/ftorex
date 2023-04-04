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
                        <p>Achieve a profitable business with us</p>
                        <p>
                            We are proffesional team, specialized in providing
                            procurement and supply of minerals, materials,
                            equipment and specialized services for all kinds of
                            manufacturing and commercial companies worldwide
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
