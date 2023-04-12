import React from "react"
import "./CustomsClearancePage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const CustomsClearancePage = () => {
    return (
        <div className="single-service-page">
            <PageHeader
                name="Customs Clearance"
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
                                Customs Clearance
                            </p>
                            <p className="service-content-text">
                                FTOREX COMMERCIAL BROKER LLC is the
                                International progressive and dynamic developing
                                company incorporated in Houston, TX USA as well
                                as Dubai, UAE. The major goal of our business is
                                the Coking Coal overseas supplying to our
                                customers with the direct contract and price
                                provided by Major Manufacturers. Our partners
                                widely represented by countries of Southeast
                                Asia as well the Middle East. We offer several
                                grades of high colorific value coal with
                                different specifications. We carefully analyze
                                requirements of our customers in order, to
                                supply with suitable coals:
                            </p>
                            <p className="service-page-subtitle">
                                METALLURGICAL COAL (COKING COAL)
                            </p>
                            <p className="service-content-text">
                                Used in the process of creating coke necessary
                                for iron and steel-making. We supply
                                Metallurgical Coal to vast industries across
                                geographies.
                            </p>
                            <p className="service-page-subtitle">
                                THERMAL COAL
                            </p>
                            <p className="service-content-text">
                                Also known as steam coal, is used for power and
                                heat generation. We supply Thermal Coal ranging
                                from 5000 NAR to 6500 NAR
                            </p>
                            <p className="service-page-subtitle">ANTHRACITE</p>
                            <p className="service-content-text">
                                A hard, compact variety of coal that has a sub
                                metallic lustre. It bears the highest carbon
                                content and least impurities among all major
                                types of coal.
                            </p>
                            <p className="service-page-subtitle">
                                PETROLEUM COKE
                            </p>
                            <p className="service-content-text">
                                The solid non-volatile carbon residue left after
                                the refinement of petroleum. It is used as a
                                source of energy, or as a source of carbon for
                                industrial usage.
                            </p>
                            <p className="service-content-text">
                                The payment method such as an Irrevocable,
                                Non-transferable DLC is a subject to
                                negotiation. Our company able to provide the
                                procurement and delivery service to whom it may
                                concern, as FOB, CFR, DAP basis.
                            </p>
                            <div className="download-button-wrapper">
                                <button className="download-btn">
                                    <div className="row btn-content-row">
                                        <a href="/files//FTOREX.pdf" download>
                                            download document
                                        </a>
                                        <div className="btn-arrow"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="margin-bottom"></div>
            </div>
        </div>
    )
}

export default CustomsClearancePage
