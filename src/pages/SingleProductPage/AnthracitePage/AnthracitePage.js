import React from "react"
import "./AnthracitePage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const AnthracitePage = () => {
    return (
        <div className="anthracite-page single-product-page">
            <PageHeader
                name="Anthracite"
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
                            <p className="product-content-header">Anthracite</p>
                            <p className="product-content-text">
                                Anthracite coal is considered a special type of
                                coal that has a low ash content, a high carbon
                                content, and a top-notch burning property. It is
                                formed from the remains of ancient plants and
                                trees that grew in swampy areas a long time ago.
                                Anthracite is then produced from the
                                metamorphosis of bituminous coal under high
                                temperatures and pressure. It is characterized
                                by its high carbon content, which ranges between
                                86% and 98%, making it a very efficient fuel as
                                it produces more energy per ton when compared to
                                various other types of coal.
                            </p>
                            <p className="product-content-subtitle">
                                Where Can I Buy Anthracite Cole and What is it
                                Used For?
                            </p>
                            <p className="product-content-text">
                                At FTOREX, our mission is to provide our clients
                                with top-quality products and also deliver the
                                best value for their money. Here, you will see
                                that we offer you the best selection of
                                anthracite coal and, at the same time, provide
                                you with the best price for a high-quality
                                product. At FTOREX, we have various anthracite
                                coals available, and they will be delivered
                                straight to your doorstep. No matter your
                                location, you can be sure to trust us with your
                                anthracite coal purchase.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/anthracite-page-img-1.webp"
                                alt=""
                            />
                            <p className="product-content-text">
                                In the world today, anthracite coal can be used
                                for various purposes, mainly for heating and
                                energy production. Below are some of the common
                                uses of anthracite:
                            </p>
                            <ul className="product-content-list">
                                <li>
                                    Home Heating: It is used as a major source
                                    of heat in both commercial and residential
                                    heating systems. Considering the fact that
                                    it burns longer and hotter than other
                                    varieties of coal, it is a great choice to
                                    consider as it produces a steady heat output
                                    with a considerably low ash content. This
                                    type of coal is used in boilers, stoves,
                                    furnaces, and various other heating
                                    appliances.
                                </li>
                                <li>
                                    Electrical Generation: This type of coal is
                                    also used in the generation of electricity
                                    in power plants. It is burned in boilers to
                                    produce steam, which drives turbines that
                                    produce electricity. Thanks to its massive
                                    energy and low ash content, it is quite
                                    reliable when it comes to power generation.
                                </li>
                                <li>
                                    Industrial Processes: It is known to be
                                    quite useful in industrial processes
                                    including cement production, steelmaking,
                                    and lots more. This coal can be used as
                                    either a raw material for the production of
                                    carbon-based products or as fuel.
                                </li>
                                <li>
                                    Water Filtration: It is also used as a
                                    filter medium in large water treatment
                                    plants. Due to its porous structure, it is
                                    quite effective as a filter for the removal
                                    of water impurities.
                                </li>
                            </ul>
                            <p className="product-content-subtitle">
                                History of Anthracite Coal Mining
                            </p>
                            <p className="product-content-text">
                                In order for you to have a better understanding
                                of anthracite, here at FTOREX, we have performed
                                in-depth research on this type of coal.
                                Anthracite coal mining has since been part of
                                the northeastern part of the United States,
                                where it is mostly mined. The first mining site
                                in the region was established in 1790, after
                                which it became quite popular in the region as a
                                source of fuel.
                            </p>
                            <p className="product-content-text">
                                Generally, the mining process for anthracite is
                                done through certain methods, including
                                room-and-pillar or longwall mining. These
                                techniques involve the excavation of coal seams
                                that are located far below the earth's surface,
                                after which the coal is extracted with the use
                                of special equipment. In the past, the mining of
                                anthracite coal has held significant economic
                                importance for the region, as it has helped
                                provide job opportunities for locals in the
                                area. However, it has also had a negative impact
                                on the environmental aspect of the region, which
                                includes dangerous working conditions as well as
                                social and economic inequality.
                            </p>
                            <p className="product-content-subtitle">
                                Types of Anthracite Coal
                            </p>
                            <p className="product-content-text">
                                In order to know which coal to get from FTOREX,
                                it is important to be familiar with some of the
                                various types of anthracite coal available on
                                the market. Generally, there are 3 major types
                                of coal: semi-anthracite (standard grade),
                                anthracite (high grade), and meta-anthracite
                                (ultra-high grade). Let’s take a closer look at
                                each of them:
                            </p>
                            <ul className="product-content-list">
                                <li>
                                    Standard Grade: This is known to be the most
                                    common variant of anthracite coal, and it
                                    has an approximate carbon content of between
                                    86 and 88 percent. It is mostly used as fuel
                                    industrially and also for home heating.
                                </li>
                                <li>
                                    High Grade: The carbon content for this
                                    variant is between 89 percent and 93
                                    percent. The high-grade type is used for
                                    industrial applications that need a higher
                                    heat rate as well as a longer burning time.
                                </li>
                                <li>
                                    Ultra-High Grade: This variant comes with
                                    the highest quality anthracite coal and a CC
                                    of more than 94 percent. It is used in
                                    special applications, including steelmaking
                                    and various other processes that require the
                                    use of high temperatures.
                                </li>
                            </ul>
                            <p className="product-content-subtitle">
                                Advantages and Disadvantages of Anthracite Coal
                            </p>
                            <p className="product-content-text">
                                When it comes to anthracite coal, most people
                                don’t seem to be conversant with some of the
                                pros and cons associated with it. FTOREX has
                                helped put together some of the advantages and
                                disadvantages of using it.
                            </p>
                            <table className="product-content-table">
                                <thead>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell table-header">
                                            Advantages
                                        </td>
                                        <td className="product-content-table-cell table-header">
                                            Disadvantages
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            High energy content
                                        </td>
                                        <td className="product-content-table-cell">
                                            Higher cost
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Low ash content
                                        </td>
                                        <td className="product-content-table-cell">
                                            Risk of environmental population
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Abundant supply
                                        </td>
                                        <td className="product-content-table-cell">
                                            Risk of accident and injuries to
                                            miners
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Low emission rate
                                        </td>
                                        <td className="product-content-table-cell"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="product-content-subtitle">
                                What to Look Forward to in Anthracite
                            </p>
                            <p className="product-content-text">
                                You must have been wondering what FTOREX sees in
                                this unique type of coal that has made us
                                provide it to you at your demand. Although its
                                future is quite uncertain, there are certain
                                areas where we hope to see its positive impact.
                            </p>
                            <ul className="product-content-list">
                                <li>Advancement in Clean Coal Technology:</li>
                            </ul>
                            <p className="product-content-text">
                                Considering the recent increase in concern
                                regarding climatic changes, there is an urgent
                                need to focus on clean coal technology that
                                could help lower the impact of burning coal on
                                the environment. In order to lower greenhouse
                                gas emissions, this could entail creating power
                                plants that are more effective and burn cleaner
                                and developing carbon capture and storage
                                technology.
                            </p>
                            <ul className="product-content-list">
                                <li>Shift in Market Demand</li>
                            </ul>
                            <p className="product-content-text">
                                In subsequent years, following the diversion of
                                various countries from fossil fuels to renewable
                                sources of energy, the need for anthracite coal
                                might shift. However, there is the possibility
                                of it finding a market, especially in industries
                                that deal with the production of steel.
                            </p>
                            <p className="product-content-subtitle">
                                Conclusion
                            </p>
                            <p className="product-content-text">
                                In conclusion, the major benefit of anthracite
                                coal in this present environmental state is the
                                fact that it is smokeless. By getting your coal
                                from FTOREX, you are helping to reduce the
                                number of harmful substances that are being
                                released into the atmosphere. Therefore, go
                                ahead and contact us for your next anthracite
                                coal purchase.
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

export default AnthracitePage
