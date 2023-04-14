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
                            <Link to="/services">
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
                        <Link to="/services/coal_supplies">
                            <div>Coal supplies</div>
                        </Link>
                        <Link to="/services/fertilizer_supplies">
                            <div>Fertilizer supplies </div>
                        </Link>
                        <Link to="/services/ocean_freight">
                            <div>Ocean freight</div>
                        </Link>
                        <Link to="/services/logistic_solutions">
                            <div>Logistic Solutions</div>
                        </Link>
                        <Link to="/services/customs_clearance">
                            <div>Customs Clearance</div>
                        </Link>
                        <Link to="/services/consulting">
                            <div>Consulting</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
