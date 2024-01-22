import React from "react"
import "./AboutUsSection.scss"
import { AnimationOnScroll } from "react-animation-on-scroll"

const AboutUsSection = ({ ref5 }) => {
    return (
        <section className="about-section">
            <div className="section-anker-element" ref={ref5}></div>
            <div className="container">
                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    duration={1.5}
                    animateOnce={true}
                >
                    <p className="big-header">ABOUT US</p>
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
                                We are a leading global provider of coal
                                supplies, fertilizer supplies, logistics
                                solutions, customs clearance, ocean freight, and
                                consulting services. Our mission is to be your
                                trusted partner for all of your business needs
                                while we provide top-notch products and
                                services, and help you achieve your goals.
                            </p>
                            <p>
                                At Ftorex, we take pride in our commitment to
                                excellence and our customer-centric approach.
                                With years of experience in the industry, we
                                have built a strong reputation for delivering
                                reliable and efficient services to our valued
                                clients around the world. Our team of experts
                                works tirelessly to ensure that your
                                requirements are met with precision and
                                competence. This makes us the preferred choice
                                for companies across a range of industries.
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
                                Also, we understand that your success is our
                                success, and we go the extra mile to exceed your
                                expectations. We carefully select our suppliers
                                and partners to ensure that we offer only the
                                best products and services to our clients.
                            </p>
                            <p className="about-text-paragraph">
                                But we are not just about business; we are also
                                about building meaningful relationships with our
                                clients. We believe in open communication,
                                trust, and transparency. And our team is always
                                ready to listen to your needs, answer your
                                questions, and provide personalized solutions.
                            </p>
                            <p>
                                As you continue to explore our services, we are
                                thrilled at the prospect of working with you and
                                earning your trust.
                            </p>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection
