import React from "react"
import "./ServicesSection.scss"
import { Link } from "react-router-dom"

const ServicesSection = ({ ref3 }) => {
    return (
        <section className="services-section">
            <div className="section-anker-element" ref={ref3}></div>
            <div className="container services-container">
                <div className="services-row">
                    <div className="container-tablet">
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
                    </div>
                    <div className="services-items">
                        <Link to="/services">
                            <div>Coal supplies</div>
                        </Link>
                        <Link to="/services">
                            <div>Fertilizer supplies </div>
                        </Link>
                        <Link to="/services">
                            <div>Ocean freight</div>
                        </Link>
                        <Link to="/services">
                            <div>Logistic Solutions</div>
                        </Link>
                        <Link to="/services">
                            <div>Customs Clearance</div>
                        </Link>
                        <Link to="/services">
                            <div>Consulting</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
