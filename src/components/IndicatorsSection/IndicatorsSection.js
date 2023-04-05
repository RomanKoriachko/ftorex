import React from 'react'
import AnimatedNumbers from 'react-animated-numbers'
import './IndicatorsSection.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const IndicatorsSection = () => {
    return (
        <section className="indicators-section">
            <div className="container">
                <AnimationOnScroll
                    animateIn="animate__backInUp"
                    duration={1.5}
                    animateOnce={true}
                >
                    <p className="small-header indicators-small-header">
                        Why Choose Us
                    </p>
                </AnimationOnScroll>
                <div className="indicators-header-row">
                    <AnimationOnScroll
                        animateIn="animate__backInUp"
                        duration={1.5}
                        animateOnce={true}
                    >
                        <p className="big-header">
                            We established a coal mining business for you
                        </p>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__backInUp"
                        duration={1.5}
                        animateOnce={true}
                    >
                        <p className="subtitle">
                            FTOREX is a global coal industry company designed to
                            establish and develop a Coal Business, Engineering &
                            General Purpose
                        </p>
                    </AnimationOnScroll>
                </div>
                <div className="indicators-content-row">
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={1.5}
                        animateOnce={true}
                    >
                        <div className="indicators-img">
                            <img
                                src="images/indicators-section-img.png"
                                alt=""
                            />
                        </div>
                    </AnimationOnScroll>
                    <div>
                        <div className="row indicators-numbers">
                            <div className="indicators-numbers-item">
                                <p className="big-text">
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
                                </p>
                                <p className="small-text">
                                    Clients all over the world
                                </p>
                            </div>
                            <div className="indicators-numbers-item">
                                <p className="big-text">
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
                                </p>
                                <p className="small-text">Years Experience</p>
                            </div>
                        </div>
                        <div className="row indicators-numbers">
                            <div className="indicators-numbers-item">
                                <p className="big-text">
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
                                </p>
                                <p className="small-text">
                                    Countries we work with
                                </p>
                            </div>
                            <div className="indicators-numbers-item">
                                <p className="big-text">
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
                                </p>
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
