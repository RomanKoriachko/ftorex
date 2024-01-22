import React from "react"
import "./OilAndPetroleumPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"
import MapSection from "components/MapSection/MapSection"
import { Link } from "react-router-dom"
import { useAppDispatch } from "redux/hooks"
import { openCallbackForm } from "redux/callbackFormReducer"

const OilAndPetroleumPage = () => {
    const dispatch = useAppDispatch()

    const openForm = () => {
        dispatch(openCallbackForm())
    }
    return (
        <div className="oil-and-petroleum-page single-product-page">
            <PageHeader
                name="Oil & petroleum products"
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
                        <NavLink
                            to="/products/oil_and_petroleum"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Oil & petroleum products</div>
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
                            <NavLink
                                to="/products/oil_and_petroleum"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div>Oil & petroleum products</div>
                            </NavLink>
                        </div>
                    </StickyBox>
                    <div className="product-container">
                        <p className="product-content-header">
                            Oil & petroleum products
                        </p>
                        <p className="product-content-text">
                            Oil and petroleum products constitute a diverse
                            array of vital resources that power and shape our
                            modern world. These products encompass a spectrum of
                            applications, from the robust energy potential of
                            diesel gasoil ultra-low sulphur 10 ppm EN590 and jet
                            fuel JET-A1, which drive transportation and aviation
                            industries, to the versatile applications of
                            liquidified petroleum gas (LPG) and liquidified
                            natural gas (LNG) as efficient and cleaner-burning
                            alternatives.
                        </p>
                        <img
                            className="product-content-img"
                            src="/images/oil_and_petroleum-img-1.jpg"
                            alt=""
                        />
                        <p className="product-content-text">
                            The backbone of this industry lies in the extraction
                            of crude oil, a raw material from which these
                            products are refined. Moreover, oil refinement
                            processes yield valuable byproducts like helium and
                            various forms of sulfur, including gas-derived,
                            technical, and granulated sulfur, serving roles in
                            industrial, medical, and chemical sectors.
                        </p>
                        <div className="oil-and-petroleum-offers">
                            <p className="oil-and-petroleum-offers-title">
                                We can offer you
                            </p>
                            <div className="oil-and-petroleum-offers-items">
                                <div>
                                    <div className="oil-and-petroleum-offers-item">
                                        DIESEL GASOIL ULTRA-LOW SULPHUR 10 PPM
                                        EN590
                                    </div>
                                    <div className="oil-and-petroleum-offers-item">
                                        CRUDE OIL
                                    </div>
                                    <div className="oil-and-petroleum-offers-item">
                                        gas-derived, technical, and
                                        granulated sulfur
                                    </div>
                                    <div className="oil-and-petroleum-offers-item">
                                        HELIUM
                                    </div>
                                </div>
                                <div>
                                    <div className="oil-and-petroleum-offers-item">
                                        LIQUIDIFIED NATURAL GAS LNG
                                    </div>
                                    <div className="oil-and-petroleum-offers-item">
                                        LIQUIDIFIED PETROLEUM GAS LPG
                                    </div>
                                    <div className="oil-and-petroleum-offers-item">
                                        JET FUEL JET-A1
                                    </div>
                                    <div className="oil-and-petroleum-offers-item">
                                        Gasoline
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="product-content-text">
                            <span>
                                Diesel Gasoil Ultra-Low Sulphur 10 PPM EN590
                            </span>
                            : This refined fuel is designed for diesel engines,
                            offering improved combustion efficiency and reduced
                            emissions due to its low sulfur content of 10 parts
                            per million (PPM), meeting stringent environmental
                            standards.
                        </p>
                        <p className="product-content-text">
                            <span>Jet Fuel JET-A1</span>: Specifically
                            formulated for aviation, JET-A1 is a high-quality
                            kerosene-based fuel that powers jet engines,
                            delivering efficient thrust and reliable performance
                            for commercial and military aircraft.
                        </p>
                        <p className="product-content-text">
                            <span>Liquidified Petroleum Gas (LPG)</span>: LPG is
                            a versatile mixture of propane and butane gases,
                            compressed into a liquid form. It's commonly used
                            for heating, cooking, and as a fuel for vehicles due
                            to its portability and lower emissions compared to
                            traditional fuels.
                        </p>
                        <p className="product-content-text">
                            <span>Liquidified Natural Gas (LNG)</span>: LNG is
                            natural gas that has been cooled to a liquid state,
                            significantly reducing its volume for easier storage
                            and transportation. It's used as a cleaner-burning
                            fuel in various applications, including power
                            generation, shipping, and heavy-duty transportation.
                        </p>
                        <p className="product-content-text">
                            <span>Crude Oil</span>: Crude oil is a raw material
                            extracted from the ground and serves as the
                            foundation for many petroleum products. It's a
                            complex mixture of hydrocarbons that undergoes
                            refining processes to yield various fuels and
                            petrochemicals.
                        </p>
                        <p className="product-content-text">
                            <span>Helium</span>: Helium is a lightweight and
                            non-reactive gas obtained during natural gas
                            extraction. It has a wide range of applications,
                            including cryogenics, medical imaging (like MRI
                            machines), and as a coolant in various industrial
                            processes.
                        </p>
                        <p className="product-content-text">
                            <span>
                                Gas-Derived, Technical, and Granulated Sulfur
                            </span>
                            : Sulfur is a byproduct of crude oil and natural gas
                            processing. Gas-derived sulfur is extracted from
                            natural gas and used in various industrial
                            applications, technical sulfur is often used in
                            chemical processes, and granulated sulfur finds use
                            in agricultural settings as a soil amendment and
                            fungicide.
                        </p>
                        <p className="product-content-text">
                            <span>Gasoline</span>: Gasoline, or petrol, is a
                            widely used automotive fuel known for its high
                            energy content. It's the primary fuel for internal
                            combustion engines in cars and motorcycles,
                            providing the energy needed for propulsion.
                        </p>
                    </div>
                </div>
                <div className="margin-bottom"></div>
                <p className="oil-and-petroleum-map-title">
                    Global Oil and Gas Extraction Tracker
                </p>
            </div>
            <MapSection map="https://globalenergymonitor.org/projects/global-oil-gas-extraction-tracker/tracker-map/" />
            <div className="products-bg">
                <div className="container">
                    <p className="products-title">all our Products</p>
                    <div className="products-wrapper">
                        <div className="product-item">
                            <div className="product-box">
                                <p>Coking coal</p>
                                <p>
                                    Coking coal is a type of coal that is used
                                    in the production of steel. Also known as
                                    metallurgical coal, it is a high-quality
                                    coal that is valued for...
                                </p>
                                <div>
                                    <Link to={`/products/coking_coal`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>Thermal coal</p>
                                <p>
                                    Thermal coal is a type of coal that is
                                    primarily used for generating electricity.
                                    It is a combustible black or brownish-black
                                    sedimentary...
                                </p>
                                <div>
                                    <Link to={`/products/thermal_coal`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>Anthracite</p>
                                <p>
                                    Anthracite is a type of coal that is known
                                    for its high carbon content, low impurities,
                                    and superior heating properties. Anthracite
                                    coal...
                                </p>
                                <div>
                                    <Link to={`/products/anthracite`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>PCI Coal</p>
                                <p>
                                    PCI (Pulverized Coal Injection) coal is a
                                    type of coal used in steelmaking that has
                                    been pulverized into a fine powder and
                                    injected into a blast...
                                </p>
                                <div>
                                    <Link to={`/products/pci_coal`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>fertilizer</p>
                                <p>
                                    Fertilizers are chemical compounds that are
                                    used to enrich soil and enhance plant
                                    growth. They provide essential nutrients
                                    such...{" "}
                                </p>
                                <div>
                                    <Link to={`/products/fertilizers`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p className="long-header">
                                    oil & gas equipment
                                </p>
                                <p>
                                    Oil and gas equipment refers to the tools,
                                    machinery, and devices used in the
                                    exploration, extraction, production,
                                    refining...{" "}
                                </p>
                                <div>
                                    <Link
                                        to={`/products/oil_and_gas_equipment`}
                                    >
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>mining equipment</p>
                                <p>
                                    Mining equipment refers to various types of
                                    machinery used in the extraction of
                                    minerals, metals, and other geological
                                    materials...{" "}
                                </p>
                                <div>
                                    <Link to={`/products/mining_equipment`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product-item product-item-contact">
                            <div className="product-box">
                                <p>
                                    Contact us and we will offer you the best
                                    cooperation option
                                </p>
                                <div>
                                    <button
                                        className="contact-btn"
                                        onClick={() => openForm()}
                                    >
                                        <div className="row btn-content-row">
                                            <p>CALL NOW</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OilAndPetroleumPage
