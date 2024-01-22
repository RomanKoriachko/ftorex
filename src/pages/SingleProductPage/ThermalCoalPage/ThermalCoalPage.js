import React from "react"
import "./ThermalCoalPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const ThermalCoalPage = () => {
    return (
        <div className="thermal-coal-page single-product-page">
            <PageHeader
                name="Thermal coal"
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
                        <div>
                            <p className="product-content-header">
                                Thermal coal
                            </p>
                            <p className="product-content-text">
                                Thermal coal, also commonly referred to as steam
                                coal, is a type of coal that is used as a source
                                of fuel for the generation of electricity in
                                thermal power plants. However, due to the high
                                levels of carbon and sulfur, it also plays a
                                significant role in greenhouse gas emissions and
                                global warming. Before being delivered to power
                                plants, thermal coal is treated to remove
                                impurities after being extracted from
                                underground or surface mines.
                            </p>
                            <p className="product-content-subtitle">
                                Formation and Geology of Thermal Coal
                            </p>
                            <p className="product-content-text">
                                Thermal coal is a sedimentary rock that forms
                                from the remains of ancient plants and trees
                                that were buried and subjected to high
                                temperatures and pressure for a long period of
                                time. The whole process of formation begins with
                                the accumulation of organic matter in a swampy
                                environment, where the dead plant materials
                                settle and are then covered with various layers
                                of sediment, including clay and sand.
                            </p>
                            <p className="product-content-text">
                                As time passes, the weight of the overlying
                                sediments compresses and heats these materials,
                                taking away water and other volatile compounds
                                and increasing the carbon concentration. The
                                entire process of coalification is quite
                                gradual, and the resulting coal can range in
                                quality from lignite to anthracite.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/thermal-coal-img-1.webp"
                                alt=""
                            />
                            <p className="product-content-text">
                                Geologically, deposits for this material are
                                discovered in sedimentary basins that are known
                                to be hundreds of meters deep and can span
                                thousands of square kilometers. These basins are
                                mostly formed due to tectonic activity, which
                                includes the subsidence of a continental shelf
                                or the formation of a rift valley in which a
                                depression is created where sediment can then
                                accumulate.
                            </p>
                            <p className="product-content-subtitle">
                                Properties and Characteristics of Thermal Coal
                            </p>
                            <p className="product-content-text">
                                It has been established above that the primary
                                use of steam coal is for power generation at
                                thermal plants. Some of its properties include:
                            </p>
                            <table className="product-content-table">
                                <tbody>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Carbon Content
                                        </td>
                                        <td className="product-content-table-cell">
                                            Thermal coal is known to have a high
                                            CC, which can range from 60 to 90
                                            percent, making it an effective
                                            source for electricity.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Heating Value
                                        </td>
                                        <td className="product-content-table-cell">
                                            It has a relatively high heating
                                            value. This simply means that it has
                                            the ability to produce a massive
                                            amount of energy when burned, and
                                            this value can range from between 24
                                            and 29 megajoules.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Moisture Content
                                        </td>
                                        <td className="product-content-table-cell">
                                            It comes with a low moisture content
                                            of about 5 to 15%. This makes it
                                            convenient for transport and
                                            storage.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Volatile Matter
                                        </td>
                                        <td className="product-content-table-cell">
                                            This refers to the total gases and
                                            other compounds that are released
                                            upon heating it. The volatile matter
                                            content of steam coal can range from
                                            20 to 40 percent.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Ash Content
                                        </td>
                                        <td className="product-content-table-cell">
                                            It has a high ash content, which
                                            ranges from 5 to 25%. This can be a
                                            major challenge when combusting, as
                                            the ash can come together and block
                                            the power plant equipment.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Sulfur Content
                                        </td>
                                        <td className="product-content-table-cell">
                                            The sulfur present in this material
                                            can be emitted as SO2 (sulfur
                                            dioxide) when burned. When the
                                            environment is exposed to a high
                                            level of sulfur content, there is a
                                            risk of environmental issues such as
                                            air pollution and acid rain.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Density
                                        </td>
                                        <td className="product-content-table-cell">
                                            Steam coal has a high energy content
                                            per unit volume, making it an
                                            efficient and cost-effective source
                                            of energy production.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="product-content-subtitle">
                                How FTOREX Comply with Regulations and Policies
                                Related to Thermal Coal
                            </p>
                            <p className="product-content-text">
                                There are various ways in which FTOREX complies
                                with regulations and policies that have to do
                                with thermal coal, and these include:
                            </p>
                            <ul className="product-content-list">
                                <li>
                                    Monitoring and Reporting: Here at FTOREX, we
                                    tend to monitor our operations and emissions
                                    to ensure compliance with the necessary
                                    regulations and policies and equally report
                                    regularly on our safety performance as well
                                    as various other key indicators.
                                </li>
                                <li>
                                    Technology Investment: In order to improve
                                    energy efficiency, minimize environmental
                                    impacts, and reduce emissions, FTOREX
                                    invests in new technologies and equipment,
                                    such as the installation of scrubbers used
                                    in the removal of pollutants, the use of
                                    efficient turbines and boilers, and lots
                                    more.
                                </li>
                                <li>
                                    Stakeholder Engagement: Also, FTOREX engages
                                    with various stakeholders, including locam
                                    communities, regulators, and environmental
                                    organizations, to have a better knowledge of
                                    the concerns and priorities to look into and
                                    to develop strategies for mitigating these
                                    concerns.
                                </li>
                                <li>
                                    Supply Chain Management: We work with
                                    suppliers and clients to ensure that
                                    everything is put in place when it comes to
                                    the demand and supply of thermal coal, and
                                    to promote sustainability throughout the
                                    supply chain.
                                </li>
                                <li>
                                    Risk Management: FTOREX conducts risk
                                    assessments in order to identify and
                                    mitigate risks related to all that has to do
                                    with steam coal, making it easier for
                                    clients to get the most out of their
                                    resources.
                                </li>
                            </ul>
                            <p className="product-content-subtitle">
                                Market Trend and Prices of Steam Coal
                            </p>
                            <p className="product-content-text">
                                The market for thermal coal has undergone
                                considerable changes recently as a result of the
                                industry's increased competition from natural
                                gas and renewable energy sources, as well as
                                growing worries about the effects of climate
                                change on the environment. The following are
                                some of the major developments and prices in the
                                thermal coal market:
                            </p>
                            <ul className="product-content-list">
                                <li>
                                    Increasing Competition: Natural gas, which
                                    is frequently more adaptable and more
                                    cost-effective, as well as renewable energy
                                    sources, which are more cost-competitive
                                    with thermal coal, are both putting pressure
                                    on the thermal coal business.
                                </li>
                                <li>
                                    Price Volatility: Over the past couple of
                                    years, the price of this type of coal has
                                    been quite volatile, as it reflects the
                                    changes occurring in its supply and demand,
                                    along with the political and economic
                                    factors that affect it.
                                </li>
                                <li>
                                    Shift in Production: The thermal coal
                                    industry is undergoing a shift in its
                                    production, with a declining production rate
                                    in certain regions, such as the USA, while
                                    there is an increased production rate in
                                    regions such as Russia, Australia, and
                                    Indonesia.
                                </li>
                                <li>
                                    Focus on Higher-Quality Coal: Higher-quality
                                    thermal coal is increasingly in demand due
                                    to its rising efficiency and reduced
                                    emissions compared to lower-quality coal. As
                                    a result, FTOREX is competing more fiercely
                                    to offer coal of greater quality, and
                                    investments are being made to upgrade and
                                    modernize existing mines and infrastructure.
                                </li>
                            </ul>
                            <p className="product-content-subtitle">
                                Conclusion
                            </p>
                            <p className="product-content-text">
                                In conclusion, thermal coal remains an important
                                source of energy for many countries around the
                                world. However, it is crucial that you source
                                your thermal coal from FTOREX, as we prioritize
                                safety, environmental responsibility, and
                                compliance with regulations and policies. By
                                choosing to work with FTOREX, you can be sure
                                that your energy needs are met in a sustainable
                                and responsible manner and that you contribute
                                to a cleaner and healthier future for all.
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

export default ThermalCoalPage
