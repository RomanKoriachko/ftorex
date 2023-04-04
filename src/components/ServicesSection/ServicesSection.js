import React from 'react'
import './ServicesSection.scss'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
    return (
        <section className="services-section">
            <div className="container services-container">
                <div className="services-row">
                    <div className="container-tablet">
                        <div className="services-header-container">
                            <p className="small-header">Our Services</p>
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
                        <div>Coal supplies</div>
                        <div>Fertilizer supplies </div>
                        <div>Ocean freight</div>
                        <div>Logistic Solutions</div>
                        <div>Customs Clearance</div>
                        <div>Consulting</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
