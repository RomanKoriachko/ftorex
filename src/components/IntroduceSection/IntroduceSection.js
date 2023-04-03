import React from 'react'
import './IntroduceSection.scss'
import ScrollDownBtn from '../ScrollDownBtn/ScrollDownBtn'

const IntroduceSection = () => {
    return (
        <section className="introduce-section">
            <div className="container introduce-wrapper">
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
                <div className="scroll-btn">
                    <ScrollDownBtn />
                </div>
            </div>
        </section>
    )
}

export default IntroduceSection
