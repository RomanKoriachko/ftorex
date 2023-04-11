import React from "react"
import "./ServicesSection.scss"
import { Link } from "react-router-dom"

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="container services-container">
                <div className="services-row">
                    <div className="container-tablet">
                        {/* <AnimationOnScroll
                            animateIn="animate__backInLeft"
                            duration={1.5}
                            animateOnce={true}
                        > */}
                        <div className="services-header-container">
                            <p className="big-header">
                                what services we provide
                            </p>
                            <Link to="/service">
                                <button className="sevices-btn">
                                    <div className="row btn-content-row">
                                        <p>View info</p>
                                        <div className="btn-arrow"></div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        {/* </AnimationOnScroll> */}
                    </div>
                    <div className="services-items">
                        <Link to="/service">
                            <div>Coal supplies</div>
                        </Link>
                        <Link to="/service">
                            <div>Fertilizer supplies </div>
                        </Link>
                        <Link to="/service">
                            <div>Ocean freight</div>
                        </Link>
                        <Link to="/service">
                            <div>Logistic Solutions</div>
                        </Link>
                        <Link to="/service">
                            <div>Customs Clearance</div>
                        </Link>
                        <Link to="/service">
                            <div>Consulting</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
