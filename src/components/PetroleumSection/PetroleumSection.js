import React from "react"
import "./PetroleumSection.scss"
import { Link } from "react-router-dom"

const PetroleumSection = ({ ref2 }) => {
    return (
        <section className="petroleum-section">
            <div className="section-anker-element" ref={ref2}></div>
            <div className="container">
                <p className="petroleum-section-title">
                    Oil & petroleum products
                </p>
                <p className="petroleum-section-subtitle">
                    Our company offers a comprehensive range of services
                    including oil & petroleum products, logistics solutions,
                    customs clearance, ocean freight, and consulting to meet the
                    diverse needs of our customers.
                </p>
                <div className="row petroleum-section-row">
                    <div className="petroleum-section-row-text">
                        <p>
                            These products encompass a spectrum of applications,
                            from the robust energy potential of diesel gasoil
                            ultra-low sulphur and jet fuel, which drive
                            transportation and aviation industries, to the
                            versatile applications of liquidified petroleum gas
                            and liquidified natural gas as efficient and
                            cleaner-burning alternatives.{" "}
                        </p>
                        <Link to="/products/oil_and_petroleum">
                            <button className="petroleum-btn">
                                <div className="row btn-content-row">
                                    <p>more offers</p>
                                    <div className="btn-arrow"></div>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <div className="petroleum-section-row-img">
                        <img src="images/petroleum-section-img.webp" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PetroleumSection
