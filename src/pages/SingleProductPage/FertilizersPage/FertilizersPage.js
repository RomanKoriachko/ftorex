import React from "react"
import "./FertilizersPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const FertilizersPage = () => {
    return (
        <div className="mining-page single-product-page">
            <PageHeader
                name="Fertilizers"
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
                                Fertilizers
                            </p>
                            <p className="product-content-text">
                                We partner with companies across the world to
                                establish and maintain strong relationships that
                                allow us to source the highest quality
                                fertilizer available.
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>MAP</span> - Monoammonium Phosphate
                                (Universal granular phosphate-nitrogen
                                fertilizer)
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>ASN</span> - Ammonium sulphate nitrate
                                (With 26% of nitrogen and 13% of sulfur)
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>UREA</span> - With a nitrogen content of
                                46,2%, urea has the highest concentration of
                                nutrients of all nitrogen fertilizers
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>AN</span> - Concentrated nitrogen source
                                (34,4% N) for agricultural and industrial use
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>CAN</span> - Calcium ammonium nitrate
                                (Highly efficient granular fertilizer with 27%
                                of nitrogen)
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>UAN</span> - Urea Ammonium Nitrate (With
                                32% of nitrogen equally split between nitrate,
                                ammonium and ureic forms of N)
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>AS</span> - Source of ammonium nitrogen
                                (21%) and sulfate sulfur (24%) for universal use
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>NP</span> - Universal granular
                                nitrogen-phosphoric fertilizer (20-20) with
                                additional sulfur for higher efficiency
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>DP</span> - Di-ammonium Phosphate (Light
                                brown, granular phosphate-nitrogen fertilizer
                                for broad P application)
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>MOP</span> - Muriate of potash (The most
                                popular source of potassium globally, offered in
                                both granular and standard forms)
                            </p>
                            <p className="product-content-text-less-margin">
                                <span>NPK</span> (nitrogen, phosphorus, and
                                potassium) are the main ingredients in most
                                fertilizers.
                            </p>
                            <img
                                className="product-content-table-img"
                                src="/images/products-img-8.jpg"
                                alt=""
                            />
                            <p className="product-content-table-name">
                                Mop Pink Granular 60%
                            </p>
                            <img
                                className="product-content-table-img"
                                src="/images/fertilizers-img-1.jpg"
                                alt=""
                            />
                            <p className="product-content-table-name">
                                Mop Pink standard 60%
                            </p>
                            <img
                                className="product-content-table-img"
                                src="/images/fertilizers-img-2.jpg"
                                alt=""
                            />
                            <p className="product-content-table-name">
                                Mop white standard 60%
                            </p>
                            <img
                                className="product-content-table-img"
                                src="/images/fertilizers-img-3.jpg"
                                alt=""
                            />
                            <p className="product-content-table-name">
                                Mop white standard 62%
                            </p>
                            <img
                                className="product-content-table-img"
                                src="/images/fertilizers-img-4.jpg"
                                alt=""
                            />
                            <p className="product-content-table-name">
                                Mop white fine 62% (Grade a)
                            </p>
                            <img
                                className="product-content-table-img"
                                src="/images/fertilizers-img-5.jpg"
                                alt=""
                            />
                            <p className="product-content-table-name">
                                Mop white fine 60%
                            </p>
                            <img
                                className="product-content-table-img"
                                src="/images/fertilizers-img-6.jpg"
                                alt=""
                            />
                            <p className="product-content-table-name">
                                Mop white fine 62% (grade b)
                            </p>
                            <img
                                className="product-content-table-img"
                                src="/images/fertilizers-img-7.jpg"
                                alt=""
                            />
                            <p className="product-content-table-name">
                                Potassium chloride pellets
                            </p>
                            <img
                                className="product-content-table-img"
                                src="/images/fertilizers-img-8.jpg"
                                alt=""
                            />
                            <p className="product-content-table-name">urea</p>
                            <img
                                className="product-content-table-img"
                                src="/images/fertilizers-img-9.jpg"
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
            </div>
        </div>
    )
}

export default FertilizersPage
