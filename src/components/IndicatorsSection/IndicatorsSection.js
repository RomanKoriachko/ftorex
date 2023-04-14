import React from "react"
import AnimatedNumbers from "react-animated-numbers"
import "./IndicatorsSection.scss"

const IndicatorsSection = ({ ref2 }) => {
    return (
        <section className="indicators-section">
            <div className="section-anker-element" ref={ref2}></div>
            <div className="container">
                <div className="indicators-header-row">
                    <p className="big-header">
                        We established a coal mining business for you
                    </p>
                    <p className="subtitle">
                        FTOREX is a global coal industry company designed to
                        establish and develop a Coal Business, Engineering &
                        General Purpose
                    </p>
                </div>
                <div className="indicators-content-row">
                    <div className="indicators-img">
                        <img src="images/indicators-section-img.webp" alt="" />
                    </div>
                    <div>
                        <div className="row indicators-numbers">
                            <div className="indicators-numbers-item">
                                <div className="big-text">
                                    <div className="row">
                                        <AnimatedNumbers
                                            animateToNumber={138}
                                            configs={[
                                                {
                                                    mass: 1,
                                                    tension: 220,
                                                    friction: 100,
                                                },
                                                {
                                                    mass: 1,
                                                    tension: 180,
                                                    friction: 130,
                                                },
                                                {
                                                    mass: 1,
                                                    tension: 280,
                                                    friction: 90,
                                                },
                                            ]}
                                        />
                                        <p>+</p>
                                    </div>
                                </div>
                                <p className="small-text">
                                    Clients all over the world
                                </p>
                            </div>
                            <div className="indicators-numbers-item">
                                <div className="big-text">
                                    <div className="row">
                                        <AnimatedNumbers
                                            animateToNumber={8}
                                            configs={[
                                                {
                                                    mass: 1,
                                                    tension: 220,
                                                    friction: 100,
                                                },
                                                {
                                                    mass: 1,
                                                    tension: 180,
                                                    friction: 130,
                                                },
                                                {
                                                    mass: 1,
                                                    tension: 280,
                                                    friction: 90,
                                                },
                                            ]}
                                        />
                                        <p>+</p>
                                    </div>
                                </div>
                                <p className="small-text">Years Experience</p>
                            </div>
                        </div>
                        <div className="row indicators-numbers">
                            <div className="indicators-numbers-item">
                                <div className="big-text">
                                    <div className="row">
                                        <AnimatedNumbers
                                            animateToNumber={12}
                                            configs={[
                                                {
                                                    mass: 1,
                                                    tension: 220,
                                                    friction: 100,
                                                },
                                                {
                                                    mass: 1,
                                                    tension: 180,
                                                    friction: 130,
                                                },
                                                {
                                                    mass: 1,
                                                    tension: 280,
                                                    friction: 90,
                                                },
                                            ]}
                                        />
                                        <p>+</p>
                                    </div>
                                </div>
                                <p className="small-text">
                                    Countries we work with
                                </p>
                            </div>
                            <div className="indicators-numbers-item">
                                <div className="big-text">
                                    <div className="row">
                                        <AnimatedNumbers
                                            animateToNumber={6}
                                            configs={[
                                                {
                                                    mass: 1,
                                                    tension: 220,
                                                    friction: 100,
                                                },
                                                {
                                                    mass: 1,
                                                    tension: 180,
                                                    friction: 130,
                                                },
                                                {
                                                    mass: 1,
                                                    tension: 280,
                                                    friction: 90,
                                                },
                                            ]}
                                        />
                                        <p>+</p>
                                    </div>
                                </div>
                                <p className="small-text">
                                    Million tons of coal supplies per year
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndicatorsSection
