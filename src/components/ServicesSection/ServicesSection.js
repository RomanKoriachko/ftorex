import React from "react"
import "./ServicesSection.scss"
import { Link } from "react-router-dom"

const ServicesSection = ({ ref4 }) => {
    return (
        <section className="services-section">
            <div className="section-anker-element" ref={ref4}></div>
            <div className="container">
                <div className="services-header-row row">
                    <p className="services-header">what services we provide</p>
                    <Link to={"/services"}>
                        <button className="info-btn">
                            <div className="row btn-content-row">
                                <p>View info</p>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="links-wrapper">
                    <div className="row services-links-row">
                        <Link to={"/services/coal_supplies"}>
                            <p>Coal supplies</p>
                        </Link>
                        <Link to={`/services/fertilizer_supplies`}>
                            <p>Fertilizer supplies</p>
                        </Link>
                        <Link to={`/services/ocean_freight`}>
                            <p>Ocean freight</p>
                        </Link>
                        <Link to={`/services/logistic_solutions`}>
                            <p>Logistic Solutions</p>
                        </Link>
                        <Link to={`/services/customs_clearance`}>
                            <p>Customs Clearance</p>
                        </Link>
                        <Link to={`/services/consulting`}>
                            <p>Consulting</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
