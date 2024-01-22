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
                                Oil & gas equipment
                            </p>
                            <p className="product-content-text">
                                Ftorex is an established business that has made
                                a name for itself as a leading supplier of
                                high-quality oil and gas sector machinery. The
                                company is committed to supplying its customers
                                with cutting-edge and dependable solutions that
                                improve the efficiency of their oil and gas
                                operations. Ftorex provides oil and gas
                                companies with a variety of tools for drilling,
                                production, and processing. The firm has made a
                                name for itself by providing customers with
                                superior goods tailored to their own
                                requirements.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/oil-and-gas-equipment-img.webp"
                                alt=""
                            />
                            <p className="product-content-subtitle">
                                What we offer as a company
                            </p>
                            <p className="product-content-text">
                                Ftorex is committed to developing and improving
                                over time. We have pledged to invest
                                substantially in research and development to
                                stay abreast of the most recent advancements in
                                technology and market trends as well as to
                                continuously look for new ways to improve the
                                quality of our services in order to maintain our
                                position as market leaders. We have the
                                expertise, resources, and understanding to help
                                any company, from a fresh start-up to a global
                                conglomerate, succeed.
                            </p>
                            <p className="product-content-text">
                                One of the main things that sets Ftorex apart
                                from other suppliers of oil and gas equipment is
                                our commitment to providing exceptional customer
                                service. We know how crucial it is to gain and
                                maintain our clients' trust by reliably
                                providing the goods and services they need to
                                run their businesses. As a result, we stay in
                                close contact with our clients in order to fully
                                understand their needs and provide them with
                                specialized solutions.
                            </p>
                            <p className="product-content-text">
                                Our company's main objective is to gain our
                                clients' trust as a dependable partner in
                                assisting them in achieving their own business
                                goals. Our customers have confidence in our team
                                of educated experts to provide cost-effective,
                                safe solutions to their oil industry
                                difficulties.
                            </p>
                            <p className="product-content-text">
                                We only work with suppliers who can guarantee
                                trustworthy oil and gas equipment. Almost any
                                country will have these sellers. We can help you
                                locate the drilling rigs, pumps, valves, and
                                other equipment you need. Additionally, we offer
                                customized solutions and may work together with
                                you to design and create machinery specifically
                                for your business.
                            </p>
                            <p className="product-content-subtitle">
                                Equipment for the Oil and Gas Sector to Take on
                                Future Obstacles
                            </p>
                            <p className="product-content-text">
                                The oil and gas sector, one of the most
                                important sectors of the world economy,
                                continues to encounter challenges in
                                guaranteeing the efficient and safe production,
                                transportation, and refining of its products.
                                Businesses need to spend heavily in advanced
                                gear if they want to keep up with the rising
                                demand for energy. Modern oil and gas equipment
                                from Ftorex helps organizations like these work
                                more effectively while lowering risks. Many
                                difficulties include
                            </p>
                            <ul className="product-content-list">
                                <li>High carbon prints</li>
                            </ul>
                            <p className="product-content-text">
                                The need to increase energy production while
                                decreasing negative effects on the environment
                                is a major obstacle for businesses in the oil
                                and gas industry. In order to maximize energy
                                production from each well while reducing
                                emissions, businesses will need to use
                                cutting-edge technologies and machinery.
                                High-efficiency and low-emission pumps,
                                compressors, and valves are just some of the
                                products that Ftorex is dedicated to supplying
                                to its customers.
                            </p>
                            <ul className="product-content-list">
                                <li>Adherence to Safety Measures</li>
                            </ul>
                            <p className="product-content-text">
                                Companies in the oil and gas industry also have
                                the issue of upholding stringent safety
                                regulations. The machinery employed in this
                                field is expected to be tough, dependable, and
                                resistant to high temperatures and pressures.
                                Equipment such as safety valves, pressure
                                vessels, and pipeline equipment are all
                                available from Ftorex and fulfill these
                                standards. Ftorex's dedication to quality and
                                safety gives its clients the confidence they
                                need to succeed in this competitive field.
                            </p>
                            <ul className="product-content-list">
                                <li>Market Price Fluctuations</li>
                            </ul>
                            <p className="product-content-text">
                                Companies in the oil and gas industry also face
                                the additional difficulty of responding to price
                                and demand swings. This makes it more
                                challenging to invest in new machinery or expand
                                operations, especially during economically
                                unstable periods. In order to help its customers
                                achieve their equipment needs without
                                jeopardizing their financial health, Ftorex
                                provides financing options.
                            </p>
                            <p className="product-content-text">
                                Ftorex's mission is to supply its customers with
                                superior tools that can handle these kinds of
                                pressures. Ftorex provides the safety, security,
                                and dependability that oil and gas businesses
                                want in a partner.
                            </p>
                            <p className="product-content-subtitle">
                                Equipments
                            </p>
                            <p className="product-content-text">
                                Let's explore the top-quality oil and gas
                                equipment offered by Ftorex and how it can help
                                businesses optimize their operations.
                            </p>
                            <ol className="product-content-numbered-list">
                                <li>State-of-the-Art Drilling Equipment</li>
                                <p className="product-content-text">
                                    Ftorex provides a variety of cutting-edge
                                    drilling equipment that improves efficiency
                                    and lowers expenses. Ftorex offers a wide
                                    variety of drilling instruments, from drill
                                    bits to drill pipes and casing, all of which
                                    are designed to perform reliably in today's
                                    complex drilling operations. High-strength
                                    materials and cutting-edge manufacturing
                                    techniques go into the construction of the
                                    company's drilling equipment, guaranteeing
                                    years of reliable service.
                                </p>
                                <li>High-quality, well-completed equipment</li>
                                <p className="product-content-text">
                                    Tubing, casing, and wellheads are just some
                                    of the well completion tools that are
                                    available from Ftorex. Ftorex's premium
                                    products are built to withstand even the
                                    harshest conditions, making them essential
                                    to every well completion operation's
                                    success. The company's well-built completion
                                    tools are built to last and are guaranteed
                                    to function reliably and safely.
                                </p>
                                <li>Advanced Production Equipment</li>
                                <p className="product-content-text">
                                    Ftorex provides a selection of cutting-edge
                                    manufacturing machinery that is optimized
                                    for high output with minimal input costs.
                                    Ftorex offers a wide variety of compressors,
                                    pumps, separators, and heat exchangers, all
                                    of which are designed to work together to
                                    fulfill the specific needs of each
                                    individual client. The factory's machinery
                                    is built for minimum upkeep, maximum
                                    efficiency, and maximum availability.
                                </p>
                                <li>Innovative Pipeline Equipment</li>
                                <p className="product-content-text">
                                    Valves, fittings, and connections are just
                                    some of the pipeline hardware that can be
                                    purchased from Ftorex. The efficient and
                                    secure transport of oil and gas products
                                    relies heavily on these parts. Using
                                    cutting-edge materials and production
                                    methods, Ftorex's pipeline equipment is
                                    built to last and function at its best for
                                    years to come.
                                </p>
                            </ol>
                            <p className="product-content-text">
                                Table: Ftorex's Commitment to Quality and
                                Sustainability
                            </p>
                            <table className="product-content-table">
                                <thead>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell table-header">
                                            Quality
                                        </td>
                                        <td className="product-content-table-cell table-header">
                                            Sustainability
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Prioritization of Safe and Reliable
                                            Practices
                                        </td>
                                        <td className="product-content-table-cell">
                                            Creation of renewable energy sources
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Innovative use of cutting-edge
                                            hardware and supplies
                                        </td>
                                        <td className="product-content-table-cell">
                                            Concentrate on eco-friendly
                                            practices
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Superior quality products developed
                                            and produced to exacting
                                            specifications
                                        </td>
                                        <td className="product-content-table-cell">
                                            Serious dedication to protecting the
                                            environment
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="product-content-subtitle">
                                Conclusion
                            </p>
                            <p className="product-content-text">
                                Equipment that is trustworthy, cutting-edge in
                                design, and of excellent quality is what Ftorex
                                offers to the oil and gas business. Its drilling
                                equipment, production equipment, and processing
                                equipment are all designed to assist customers
                                in operating their projects in a manner that is
                                both safe and as cost-effective as possible. Get
                                in touch with Ftorex right away to obtain
                                additional information regarding their goods and
                                services.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="download-button-wrapper">
                    <div className="left-side-space"></div>
                    {/* <div>
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
                    </div> */}
                </div>
                <div className="margin-bottom"></div>
            </div>
        </div>
    )
}

export default OilAndGasPage
