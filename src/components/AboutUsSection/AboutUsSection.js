import React from "react"
import "./AboutUsSection.scss"
import { AnimationOnScroll } from "react-animation-on-scroll"

const AboutUsSection = ({ ref4 }) => {
    return (
        <section className="about-section">
            <div className="section-anker-element" ref={ref4}></div>
            <div className="container">
                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    duration={1.5}
                    animateOnce={true}
                >
                    <p className="big-header">our team's experience</p>
                    <p className="subtitle">
                        Our company specializes in the supply of coking coal to
                        customers worldwide, with a focus on Southeast Asia and
                        the Middle East regions.{" "}
                    </p>
                </AnimationOnScroll>
                <div className="about-text-wrapper">
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={1.5}
                        animateOnce={true}
                    >
                        <div className="about-text">
                            <p className="about-text-paragraph">
                                FTOREX Commercial Broker LLC is a rapidly
                                growing international company with headquarters
                                in both Houston, TX, USA, and Dubai, UAE. Our
                                goal is to provide our customers with direct
                                contracts and competitive pricing directly from
                                the manufacturers.
                            </p>
                            <p>
                                We understand that coal is a crucial raw
                                material for steel production, and as such, we
                                strive to maintain long-term partnerships with
                                reputable manufacturers to ensure a consistent
                                and reliable supply for our clients. Our
                                experienced team is committed to providing
                                exceptional customer service, and we work
                                closely with our clients to meet their specific
                                needs and requirements.
                            </p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={1.5}
                        animateOnce={true}
                    >
                        <div className="about-text">
                            <p className="about-text-paragraph">
                                At FTOREX, we prioritize quality and
                                sustainability, and we work with manufacturers
                                who share our commitment to these values. We
                                believe that responsible sourcing and ethical
                                business practices are essential for building
                                long-term relationships with our customers and
                                ensuring the continued success of our business.
                            </p>
                            <p>
                                Overall, FTOREX Commercial Broker LLC is a
                                reliable and reputable supplier of coal to
                                customers worldwide. Our dedication to quality,
                                sustainability, and customer service sets us
                                apart from the competition, and we are committed
                                to providing our clients with the best possible
                                experience.
                            </p>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection
