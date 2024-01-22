import React from "react"
import "./CoalSuppliesPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const CoalSuppliesPage = () => {
    return (
        <div className="single-service-page coal-supplies-page">
            <PageHeader
                name="Coal supplies"
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
                                Coal supplies
                            </p>
                            <p className="service-content-text">
                                Ftorex is an industry leader that provides
                                premium coal to its customers. They are
                                considered one of the greatest coal providers on
                                the market due to their dedication to quality,
                                dependability, and client happiness.
                            </p>
                            <p className="service-content-text">
                                Coal is used in numerous processes, such as
                                those involved in producing electricity, cement,
                                and steel. Coal is an essential source of
                                energy, so businesses constantly need a
                                dependable provider. Forex is useful for this
                                purpose.
                            </p>
                            <p className="service-content-text">
                                The coal supplied by Ftorex comes from only the
                                world's finest mines, guaranteeing only the
                                finest product for their customers. The company
                                has made long-term commitments to coal mines,
                                which has allowed them to secure a reliable
                                supply at competitive prices.
                            </p>
                            <p className="service-content-subtitle">
                                The Indispensable Usefulness of Coal
                            </p>
                            <p className="service-content-text">
                                It's impossible to overestimate coal's
                                significance in the energy sector and its
                                undeniable value. Let's take a look at coal's
                                applications and the ways in which Ftorex's coal
                                supply service can aid commercial enterprises.
                                Coal has been utilized for ages as a reliable
                                source of energy due to its adaptability. It's
                                used to produce energy, heat buildings, and
                                power factories. Coal is also an integral part
                                of making steel and cement, both of which are
                                extensively used in building and maintaining
                                modern infrastructure.
                            </p>
                            <p className="service-content-text">
                                Coal's value comes from the fact that it can
                                generate power cheaply and effectively. In
                                contrast to renewable energy sources like solar
                                or wind, coal is a stable power generator that
                                can maintain a continuous output of energy. Coal
                                is a cheap and readily available energy source
                                for many countries because of its abundance.
                            </p>
                            <p className="service-content-text">
                                There are many advantages to Ftorex's coal
                                supply service for enterprises. To begin, the
                                coal the company supplies is of the highest
                                grade and conforms to all applicable
                                regulations. This guarantees that commercial
                                operations won't be slowed down by poor fuel
                                quality. Second, businesses can rest assured
                                that they will have access to the coal they need
                                when they need it because of Ftorex's dependable
                                and prompt coal delivery service. For
                                capital-intensive businesses like steel and
                                cement manufacturing, this is crucial.
                            </p>
                            <p className="service-content-text">
                                Thirdly, the price of Ftorex's coal supply
                                service is very reasonable. Through its
                                longstanding partnerships with coal mines and
                                transport firms, the company is able to provide
                                its customers with preferential prices.
                                Companies with constant fuel needs will benefit
                                the most from this, as they will save money by
                                buying coal from Ftorex.
                            </p>
                            <p className="service-content-subtitle">
                                How is coal formed?
                            </p>
                            <p className="service-content-text">
                                It takes millions of years for coal to develop,
                                making it a nonrenewable energy source. It is a
                                type of organic sedimentary rock that originated
                                from the decomposition of ancient plant matter
                                in wet environments. Coal production starts with
                                the accumulation of dead plants. Peat, the
                                precursor to coal, is produced when organic
                                matter decays. Peat consists of partially
                                decayed plant materials and has a brown,
                                soil-like appearance. When peat is buried under
                                sediment and other things, the weight and
                                temperature of the enclosing rock and soil
                                eventually turn it into coal. Peatification and
                                coalification are the two key stages in the coal
                                production process. The process of peatification
                                is mostly driven by bacterial activity. Coal is
                                a fossil fuel that may be burned to provide
                                energy, but its combustion also releases large
                                amounts of carbon dioxide, a major contributor
                                to man-made global warming.
                            </p>
                            <p className="service-content-subtitle">
                                Major Ftorex Coal Supplies
                            </p>
                            <p className="service-content-text">
                                Ftorex's primary coal offerings include:
                            </p>
                            <ol className="service-content-numbered-list">
                                <li>Metallurgical coal</li>
                                <p className="service-content-text">
                                    Steel mills require metallurgical coal, also
                                    called coking coal. It's essential because
                                    it offers the carbon and energy required to
                                    make steel, two essential components. The
                                    reduced levels of ash and sulfur in
                                    metallurgical coal make it a preferable fuel
                                    source for the steel industry.
                                </p>
                                <li>Thermal Coal</li>
                                <p className="service-content-text">
                                    Thermal coal is almost exclusively put to
                                    use in power plants. It's burned in plants
                                    to generate power. In poor nations where
                                    coal is the predominant source of
                                    electricity generation, thermal coal is
                                    still an important part of the energy mix
                                    despite its lower energy content compared to
                                    metallurgical coal.
                                </p>
                                <li>Anthracite</li>
                                <p className="service-content-text">
                                    Because of its high carbon concentration and
                                    low volatile matter level, anthracite is a
                                    special kind of coal. It is commonly used
                                    for heating in both homes and businesses due
                                    to its high heating value and low ash
                                    content. Anthracite is also a key ingredient
                                    in the smelting of metals like iron and
                                    steel.
                                </p>
                                <li>Petroleum Coke</li>
                                <p className="service-content-text">
                                    Petcoke, short for petroleum coke, is a
                                    byproduct of the oil refining process.
                                    Cement factories and power plants frequently
                                    employ this solid substance as a fuel
                                    source. Because of its low price and high
                                    calorific value, petcoke is increasingly
                                    being considered a viable fuel source for
                                    energy-intensive businesses.
                                </p>
                                <li>PCI Coal</li>
                                <p className="service-content-text">
                                    Pulverized coal injection coal (PCI coal) is
                                    a key ingredient in the steelmaking process.
                                    This coal is reduced to a powder before
                                    being mixed with iron ore and other
                                    ingredients in a blast furnace. Using PCI
                                    coal instead of metallurgical coal can cut
                                    down on expenses and boost productivity in
                                    the steel industry.
                                </p>
                            </ol>
                            <p className="service-content-text">
                                Table: Industries That Use Coal
                            </p>
                            <table className="service-content-table">
                                <thead>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell table-header">
                                            Industy
                                        </td>
                                        <td className="service-content-table-cell table-header">
                                            Description
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Steel Production
                                        </td>
                                        <td className="service-content-table-cell">
                                            Blast furnaces use coal as fuel to
                                            transform iron ore into steel.
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Power Generation
                                        </td>
                                        <td className="service-content-table-cell">
                                            Power plants mostly use coal as a
                                            fuel source to produce energy.
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Cement Production
                                        </td>
                                        <td className="service-content-table-cell">
                                            To generate the high temperatures
                                            required for the chemical reactions
                                            that change raw materials into
                                            cement, coal is utilized as a fuel
                                            in cement kilns.
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Chemical Manufacturing
                                        </td>
                                        <td className="service-content-table-cell">
                                            The chemical and industrial sectors
                                            rely heavily on coal.
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Paper Manufacturing
                                        </td>
                                        <td className="service-content-table-cell">
                                            Paper mills and the pulp used in the
                                            process require steam, which is
                                            produced using coal.
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Transportation
                                        </td>
                                        <td className="service-content-table-cell">
                                            Coal is widely used as a fuel source
                                            for locomotives like trains, and
                                            ships.
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Pharmaceutical Manufacturing
                                        </td>
                                        <td className="service-content-table-cell">
                                            Coal is burned to create steam,
                                            which is then used to sterile
                                            equipments and provide the heat
                                            necessary for the synthesis of
                                            certain compounds used in
                                            pharmaceuticals.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="service-content-subtitle">
                                Conclusion
                            </p>
                            <p className="service-content-text">
                                When it comes to coal supply, few companies can
                                match the quality, dependability, and
                                competitive pricing offered by Ftorex. Because
                                of their dedication to their customers' needs,
                                the organization has established itself as a
                                market leader. Industries that use coal as their
                                primary energy source will find Ftorex's coal
                                supplies to be of the highest quality, and the
                                company's knowledge in the sector will make them
                                your go-to for all things coal.
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

export default CoalSuppliesPage
