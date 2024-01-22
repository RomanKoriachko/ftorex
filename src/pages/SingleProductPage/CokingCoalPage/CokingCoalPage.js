import React from "react"
import "./CokingCoalPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const CokingCoalPage = () => {
    return (
        <div className="coking-coal-page single-product-page">
            <PageHeader
                name="Coking coal"
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
                <div className="links-row">
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
                        <div>
                            <p className="product-content-header">
                                Coking coal
                            </p>
                            <p className="product-content-text">
                                Coking coal, also commonly referred to as
                                metallurgical coal, is a special type of coal
                                that is primarily used in the production of
                                coke, which is an essential element in the
                                process of making steel. When compared to the
                                thermal coal that is used for generating power,
                                coking coal is known to be quite different. It
                                is characterized by its low level of impurities,
                                including ash, nitrogen, and sulfur, and its
                                high carbon content. Hard coking coal, semi-hard
                                coking coal, semi-soft coking coal, and
                                pulverized coal for injection (PCI) are all
                                types of coking coal. These hold true for the
                                various metallurgical coal quality grades, all
                                of which are utilized to create steel.
                            </p>
                            <p className="product-content-subtitle">
                                Reasons Why FTOREX Supplies Coking Coal
                            </p>
                            <p className="product-content-text">
                                When it comes to the mining and supply of coking
                                coal, there are lots of companies that offer
                                this service. However, FTOREX is quite unique in
                                this field as we offer lots of benefits to our
                                customers. Here at FTOREX, we supply coking coal
                                to our clients for several reasons. First, as
                                you must already know, coking coal is a major
                                element in steel production and is quite useful
                                in a wide range of industrial sectors, including
                                transportation, manufacturing, and construction.
                                As a result, it is in high demand, so we get to
                                offer our services and then earn a significant
                                profit alongside.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/coking-coal-page-img-1.webp"
                                alt=""
                            />
                            <p className="product-content-text">
                                Also, this type of coal is a unique resource
                                that requires specialized knowledge and
                                equipment to mine, process, and transport.
                                FTOREX provides you with high-quality coal that
                                meets your standard specifications thanks to our
                                expertise and experience in the field. Our
                                expertise is of the utmost importance for
                                ensuring that the raw material is suitable for
                                its specified use.
                            </p>
                            <p className="product-content-text">
                                Furthermore, experts at FTOREX have a better
                                understanding of the essence of ethical and
                                sustainable practices in the production and
                                mining of coal. We prioritize environmental
                                protection, safety, and responsible social
                                practices while in operations, as this will help
                                ensure the long-term viability of our business.
                                Therefore, you have nothing to worry about, as
                                we will be able to continuously supply you with
                                the necessary quantity demanded.
                            </p>
                            <p className="product-content-subtitle">
                                Mining and Processing of Coking Coal
                            </p>
                            <p className="product-content-text">
                                The entire processing and mining of coking coal
                                involves several stages, and this may vary based
                                on the location and geology of the deposit site.
                                Below is an explanation of the steps involved:
                            </p>
                            <ul className="product-content-list">
                                <li>
                                    Exploration: This initial step is to
                                    determine a coking coal deposit. This can be
                                    done by geological mapping, drilling, and
                                    sampling in an attempt to figure out the
                                    quality, location, and size of the deposit.
                                </li>
                                <li>
                                    Mine Development: Upon discovering a
                                    potential deposit, the site or location must
                                    be adequately prepared for mining activity
                                    to take place. The preparatory steps may
                                    include clearing vegetation, building access
                                    roads, and constructing certain facilities
                                    for equipment and site workers.
                                </li>
                                <li>
                                    Extraction: Generally, this raw material can
                                    be mined using two major techniques;
                                    underground technique or the surface
                                    technique. The underground mining technique
                                    involves the process of digging shafts and
                                    tunnels deep into the earth's surface to
                                    gain access to the coal seam. On the other
                                    hand, surface mining techniques involve the
                                    removal of overburden, also known as the
                                    layer of soil and rock covering the coal
                                    seam, and the use of heavy mining equipment
                                    to extract it.
                                </li>
                                <li>
                                    Crushing and Screening: Once the extraction
                                    has been completed, the coal is then crushed
                                    and screened in order to remove all the
                                    impurities present and also to create a
                                    uniform size for processing.
                                </li>
                                <li>
                                    Washing: The material is then washed to
                                    remove certain impurities, including sulfur
                                    and ash. It is also done to reduce the level
                                    of moisture content. This is done by mixing
                                    it with chemicals and water, and then
                                    agitating it to separate both the pure form
                                    and the impurities.
                                </li>
                                <li>
                                    Coking: After completing the washing
                                    process, the coal is then heated in the
                                    absence of air to produce coke. The entire
                                    process of coking comes in various stages
                                    such as heating, cooling, and quenching, in
                                    order to create high-quality coal suitable
                                    for industrial processes.
                                </li>
                                <li>
                                    Transport: Upon its successful production,
                                    the material is then transported to a steel
                                    mill, where it is used as a reducing agent
                                    in the furnace or as fuel.
                                </li>
                            </ul>
                            <p className="product-content-text">
                                Overall, the whole process of coking coal comes
                                in various stages that require specialized
                                equipment, careful management, and skilled
                                workers to ensure an efficient and safe
                                production.
                            </p>
                            <p className="product-content-subtitle">
                                Uses of Coking Coal
                            </p>
                            <p className="product-content-text">
                                Most people have the idea that this type of coal
                                is only useful in steel production through a
                                technique known as coke-making. One ton of steel
                                requires 770 kg of coal to create, with basic
                                oxygen blast furnaces producing about 70 percent
                                of the world's steel. The issue for the steel
                                industry is to generate this essential good to
                                support sustainable growth while minimizing the
                                production process's overall greenhouse gas
                                emissions. However, that does not seem to be the
                                case. Here at FTOREX, we will be providing you
                                with some of its various other uses in the table
                                below.
                            </p>
                            <table className="product-content-table">
                                <tbody>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Industrial Heating
                                        </td>
                                        <td className="product-content-table-cell">
                                            It can be used as a source of fuel
                                            for industrial heating applications,
                                            including power generation and
                                            cement manufacturing
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Carbon Product
                                        </td>
                                        <td className="product-content-table-cell">
                                            It can be converted to various
                                            carbon-based products, such as
                                            graphite and carbon-fiber, which are
                                            quite useful in the aerospace and
                                            automotive industries.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Chemical Production
                                        </td>
                                        <td className="product-content-table-cell">
                                            It is also used as a raw material
                                            for some chemical productions, such
                                            as coal tar and benzene.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Briquettes
                                        </td>
                                        <td className="product-content-table-cell">
                                            It can be processed into briquettes,
                                            which are used as fuel for cooking
                                            and domestic heating.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="product-content-subtitle">
                                Conclusion
                            </p>
                            <p className="product-content-text">
                                In conclusion, FTOREX is considered a top-tier
                                company when it comes to the manufacturing and
                                delivery of coking coal. We offer our clients
                                around the globe our equipment, experience, and
                                expertise on anything that has to do with this
                                raw material. We offer a comprehensive range of
                                industry requirements for sampling, inspection,
                                and witnessing surveys. Our top-notch laboratory
                                testing facilities are dispersed throughout all
                                of the coal-producing areas to provide short
                                turnaround times and responsive service.
                                Therefore, you have nothing to worry about if
                                you are looking for the right service for you,
                                as we will be providing you with quality
                                products.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="download-button-wrapper">
                    <div className="left-side-space"></div>
                    <div>
                        <button className="download-btn">
                            <div className="row btn-content-row">
                                <a href="/files/FTOREX COAL.pdf" download>
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

export default CokingCoalPage
