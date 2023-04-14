import React from "react"
import "./FertilizerSuppliesPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const FertilizerSuppliesPage = () => {
    return (
        <div className="single-service-page fertilizer-supplies-page">
            <PageHeader
                name="Fertilizer supplies"
                subtitle="Ftorex is a global coal industry company designed to establish and develop a Coal Business, Engineering & General Purpose"
            />
            <div className="content-wrapper"></div>
            <div className="container">
                <div className="links-tablet-wrapper">
                    <div className="links-tablet">
                        <NavLink
                            to="/services/coal_supplies"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Coal supplies</div>
                        </NavLink>
                        <NavLink
                            to="/services/fertilizer_supplies"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Fertilizer supplies</div>
                        </NavLink>
                        <NavLink
                            to="/services/logistic_solutions"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Logistic Solutions</div>
                        </NavLink>
                        <NavLink
                            to="/services/customs_clearance"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Customs Clearance</div>
                        </NavLink>
                        <NavLink
                            to="/services/ocean_freight"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Ocean freight</div>
                        </NavLink>
                        <NavLink
                            to="/services/consulting"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Consulting</div>
                        </NavLink>
                    </div>
                </div>
                <div className="links-row">
                    <StickyBox offsetTop={150} offsetBottom={20}>
                        <div className="links-desktop">
                            <NavLink
                                to="/services/coal_supplies"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Coal supplies
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/fertilizer_supplies"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Fertilizer supplies
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/logistic_solutions"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Logistic Solutions
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/customs_clearance"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Customs Clearance
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/ocean_freight"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Ocean freight
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/consulting"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">Consulting</div>
                            </NavLink>
                        </div>
                    </StickyBox>
                    <div className="service-container">
                        <div>
                            <p className="service-content-header">
                                Fertilizer supplies
                            </p>

                            <p className="service-content-text">
                                FTOREX an International progressive and dynamic
                                developing company incorporated in Houston, TX
                                USA as well as Dubai, UAE.
                            </p>
                            <p className="service-content-text">
                                One of the major goals of our business is the
                                Fertilizer overseas supplying to our customers
                                with the direct contract and price provided by
                                Major Manufacturers. Our partners widely
                                represented by countries of Southeast Asia as
                                well the Middle East and South America.
                            </p>
                            <p className="service-content-text">
                                We partner with companies across the world to
                                establish and maintain strong relationships that
                                allow us to source the highest quality
                                fertilizer available.
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>MAP</span> - Monoammonium Phosphate
                                (Universal granular phosphate-nitrogen
                                fertilizer)
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>ASN</span> - Ammonium sulphate nitrate
                                (With 26% of nitrogen and 13% of sulfur)
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>UREA</span> - With a nitrogen content of
                                46,2%, urea has the highest concentration of
                                nutrients of all nitrogen fertilizers
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>AN</span> - Concentrated nitrogen source
                                (34,4% N) for agricultural and industrial use
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>CAN</span> - Calcium ammonium nitrate
                                (Highly efficient granular fertilizer with 27%
                                of nitrogen)
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>UAN</span> - Urea Ammonium Nitrate (With
                                32% of nitrogen equally split between nitrate,
                                ammonium and ureic forms of N)
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>AS</span> - Source of ammonium nitrogen
                                (21%) and sulfate sulfur (24%) for universal use
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>NP</span> - Universal granular
                                nitrogen-phosphoric fertilizer (20-20) with
                                additional sulfur for higher efficiency
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>DP</span> - Di-ammonium Phosphate (Light
                                brown, granular phosphate-nitrogen fertilizer
                                for broad P application)
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>MOP</span> - Muriate of potash (The most
                                popular source of potassium globally, offered in
                                both granular and standard forms)
                            </p>
                            <p className="service-content-text-less-margin">
                                <span>NPK</span> (nitrogen, phosphorus, and
                                potassium) are the main ingredients in most
                                fertilizers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="download-button-wrapper">
                    <div className="left-side-space"></div>
                    <div>
                        <button className="download-btn">
                            <div className="row btn-content-row">
                                <a
                                    href="/files//FTOREX COAL OFFER.docx"
                                    download
                                >
                                    download document
                                </a>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="margin-bottom"></div>
            </div>
        </div>
    )
}

export default FertilizerSuppliesPage
