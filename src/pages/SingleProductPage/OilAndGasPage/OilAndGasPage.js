import React from "react"
import "./OilAndGasPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const OilAndGasPage = () => {
    return (
        <div className="oil-and-gas-page single-product-page">
            <PageHeader
                name="Oil & gas equipment"
                subtitle="Our company offers a comprehensive range of services including coal and fertilizer supplies, logistics solutions, customs clearance, ocean freight, and consulting to meet the diverse needs of our customers."
            />
            <div className="content-wrapper"></div>
            <div className="container">
                <div className="links-tablet-wrapper">
                    <div className="links-tablet">
                        <NavLink
                            to="/products/coking_coal"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Coking coal</div>
                        </NavLink>
                        <NavLink
                            to="/products/thermal_coal"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Thermal coal</div>
                        </NavLink>
                        <NavLink
                            to="/products/anthracite"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Anthracite</div>
                        </NavLink>
                        <NavLink
                            to="/products/pci_coal"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>PCI Coal</div>
                        </NavLink>
                        <NavLink
                            to="/products/oil_and_gas_equipment"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Oil & gas equipment</div>
                        </NavLink>
                        <NavLink
                            to="/products/fertilizers"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Fertilizer</div>
                        </NavLink>
                        <NavLink
                            to="/products/mining_equipment"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Mining equipment</div>
                        </NavLink>
                    </div>
                </div>
                <div className="row links-row">
                    <StickyBox offsetTop={150} offsetBottom={20}>
                        <div className="links-desktop">
                            <NavLink
                                to="/products/coking_coal"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="product-link">Coking coal</div>
                            </NavLink>
                            <NavLink
                                to="/products/thermal_coal"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="product-link">Thermal coal</div>
                            </NavLink>
                            <NavLink
                                to="/products/anthracite"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="product-link">Anthracite</div>
                            </NavLink>
                            <NavLink
                                to="/products/pci_coal"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="product-link">PCI Coal</div>
                            </NavLink>
                            <NavLink
                                to="/products/oil_and_gas_equipment"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="product-link">
                                    Oil & gas equipment
                                </div>
                            </NavLink>
                            <NavLink
                                to="/products/fertilizers"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="product-link">Fertilizer</div>
                            </NavLink>
                            <NavLink
                                to="/products/mining_equipment"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="product-link">
                                    Mining equipment
                                </div>
                            </NavLink>
                        </div>
                    </StickyBox>
                    <div className="product-container">
                        <div>
                            <p className="product-content-header">
                                Oil & gas equipment
                            </p>
                            <p className="product-content-text">
                                Oil and gas equipment refers to the tools,
                                machinery, and devices used in the exploration,
                                extraction, production, refining, and
                                distribution of oil and gas. Each piece of
                                equipment serves a specific purpose and is
                                designed to handle the unique challenges of the
                                oil and gas industry, such as extreme
                                temperatures, high pressures, and corrosive
                                substances. The development of new technology
                                and equipment has allowed for more efficient and
                                cost-effective methods of exploration and
                                production.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/products-img-5.jpg"
                                alt=""
                            />
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

export default OilAndGasPage
