import React from "react"
import "./CustomsClearancePage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const CustomsClearancePage = () => {
    return (
        <div className="single-service-page customs-clearance-page">
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
                                Customs clearance is a crucial step for any
                                company doing business internationally. To
                                facilitate the movement of products across
                                international boundaries, the appropriate
                                paperwork must be submitted and all applicable
                                regulations must be met. Popular among its many
                                international trade-related offerings is customs
                                clearance with the help of Ftorex. Customs
                                clearance may be a daunting process for those
                                who are unfamiliar with the rules and
                                regulations that govern it, especially for those
                                who are just starting out in the realm of
                                international trade. Companies sometimes use
                                specialized organizations like Ftorex to handle
                                customs clearance on their behalf due to the
                                difficulty and length of the procedure.
                            </p>
                            <p className="service-content-subtitle">
                                What is customs clearance?
                            </p>
                            <p className="service-content-text">
                                The process of submitting all of the appropriate
                                documentation and declarations to clear goods
                                through customs in order to import or export
                                them legally across borders is known as customs
                                clearance. Because of the potential for huge
                                monetary fines or even the seizure of products,
                                it is an essential component of international
                                trade. If customs regulations are violated, the
                                consequences can be very serious. By working
                                with a customs broker for imports and exports,
                                customs clearance is streamlined even further.
                            </p>
                            <p className="service-content-subtitle">
                                Who is a customs broker?
                            </p>
                            <p className="service-content-text">
                                A customs broker is a person with legal
                                authority to represent the interests of
                                importers and exporters before customs
                                officials. A customs broker's primary role is to
                                ease the movement of products across
                                international borders by coordinating the
                                customs clearance procedure and ensuring
                                compliance with all relevant laws. Importers and
                                exporters can greatly benefit from the advice of
                                customs brokers due to their extensive
                                understanding of trade legislation, tariffs, and
                                other customs-related difficulties.
                            </p>
                            <p className="service-content-subtitle">
                                Processes involved in customs clearance
                            </p>
                            <p className="service-content-text">
                                Customs clearance procedures may change
                                according on the type of imports being made, the
                                countries of origin and destination, the means
                                of conveyance, and other factors. However, the
                                following steps are typical during customs
                                clearance:
                            </p>
                            <ol className="service-content-numbered-list">
                                <li>Getting Ready to Pass Customs</li>
                                <p className="service-content-text">
                                    It is essential to have all paperwork in
                                    order before transporting items to the port
                                    of entry. The commodities, the country of
                                    origin, and the country of destination can
                                    all affect the paperwork that must be
                                    submitted. Commercial invoices, bills of
                                    lading, packing lists, and certificates of
                                    origin may all be required.
                                </p>
                                <li>Examination of cargo</li>
                                <p className="service-content-text">
                                    Customs officers will inspect your shipment
                                    once it reaches the border. The goal of the
                                    inspection is to ensure the detection of any
                                    restricted or banned items, the legitimacy
                                    of the paperwork, and the determination of
                                    the appropriate amount of customs duties and
                                    taxes to be paid. Physical inspection, x-ray
                                    screening, and other methods of inspection
                                    may be used, depending on the type of cargo.
                                </p>
                                <li>Taxes and duties due</li>
                                <p className="service-content-text">
                                    Customs officers will determine the amount
                                    of duties and taxes due based on the value
                                    of your shipment. The total amount of duties
                                    and taxes due will be calculated based on
                                    the merchandise's value, the tariff rates
                                    for those goods, and any exemptions or
                                    special treatment provided by trade
                                    agreements. You can either pay your duties
                                    and taxes to customs authorities in person
                                    or through an authorized agency.
                                </p>
                                <li>Delivery and clearance through customs</li>
                                <p className="service-content-text">
                                    Your shipment will be released from customs,
                                    and you will be able to schedule delivery
                                    once all applicable fees and taxes have been
                                    paid. The importer, exporter, or a
                                    third-party logistics company may be
                                    responsible for arranging delivery,
                                    depending on the terms of your transaction.
                                    It is crucial that your goods are
                                    transported in accordance with all
                                    applicable laws and standards.
                                </p>
                                <p className="service-content-text">
                                    Preparing the required papers, complying
                                    with all applicable regulations, and working
                                    with seasoned customs brokers and logistics
                                    suppliers are all crucial for a streamlined
                                    and trouble-free operation. Ftorex has
                                    professionals on staff that are well-versed
                                    in customs clearance procedures and can
                                    assist you in getting your goods to their
                                    destination on time and in accordance with
                                    all rules and regulations.
                                </p>
                            </ol>
                            <p className="service-content-subtitle">
                                Benefits of Outsourcing Customs Clearance to
                                Ftorex
                            </p>
                            <p className="service-content-text">
                                Now is the time to find out what you will gain
                                with us at Ftorex:
                            </p>
                            <ul className="service-content-list">
                                <li>
                                    Expertise and knowledge: It can be
                                    challenging for businesses to stay abreast
                                    of the ever-evolving customs regulations.
                                    Ftorex employs a staff of customs clearance
                                    specialists who are well-versed in current
                                    policies and processes. This guarantees a
                                    smooth customs clearance process with no
                                    unnecessary delays or penalties.
                                </li>
                                <li>
                                    Time-saving: Clearing customs may be a
                                    time-consuming process, especially for
                                    businesses with limited experience in
                                    international trade. You can focus on other
                                    elements of your business while Ftorex
                                    handles this one for you. Ftorex will take
                                    care of everything involved in customs
                                    clearance, from paperwork to coordinating
                                    with government agencies, so that you can
                                    focus on running your business.
                                </li>
                                <li>
                                    Cost-effective: Any company, no matter how
                                    big or small, can benefit from Ftorex's
                                    customs clearing outsourcing services.
                                    Ftorex offers a variety of services to meet
                                    customers' goals and budgets, and their
                                    knowledge and experience can be invaluable
                                    in avoiding mistakes and unnecessary
                                    setbacks.
                                </li>
                                <li>
                                    Effective risk management: If there is a
                                    mistake in the customs clearance process,
                                    the shipment could be delayed or even
                                    confiscated. Ftorex follows a strict process
                                    to make sure all paperwork and procedures
                                    are done right and on time, minimizing the
                                    possibility of mistakes and maximizing the
                                    likelihood of regulatory compliance.
                                </li>
                                <li>
                                    Logistical efficiency: Delays or mistakes in
                                    customs clearance, only one segment of the
                                    logistics chain, can have far-reaching
                                    consequences. If you have Ftorex handle your
                                    customs clearance, you can be assured that
                                    your shipments will arrive on time and in
                                    full compliance with all applicable laws.
                                </li>
                            </ul>
                            <p className="service-content-text">
                                Businesses can avoid unnecessary distractions
                                and assure on-time delivery of their products by
                                outsourcing customs clearance to specialists.
                            </p>
                            <p className="service-content-text">
                                Advantages and Disadvantages of Following Due
                                Process of Custom Clearance
                            </p>
                            <p className="service-content-text">
                                Following due process of custom clearance has
                                its advantages and disadvantages, as highlighted
                                in the table below:
                            </p>
                            <table className="service-content-table">
                                <thead>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell table-header">
                                            Advantages
                                        </td>
                                        <td className="service-content-table-cell table-header">
                                            Disadvantages
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Keeps you in line with the law
                                        </td>
                                        <td className="service-content-table-cell">
                                            Time-consuming process
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Decreases the potential for monetary
                                            sanctions
                                        </td>
                                        <td className="service-content-table-cell">
                                            Can be difficult to understand.
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Increases one's standing in the eyes
                                            of one's clients and business
                                            associates
                                        </td>
                                        <td className="service-content-table-cell">
                                            Expertise and familiarity with rules
                                            are prerequisites.
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Helps prevent theft of ideas and
                                            other forms of intellectual property
                                            infringement
                                        </td>
                                        <td className="service-content-table-cell">
                                            May cause setbacks and extra
                                            expenditures.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="service-content-subtitle">
                                Conclusion
                            </p>
                            <p className="service-content-text">
                                Customs clearance is an essential process for
                                any business engaged in international trade. By
                                outsourcing it to experienced firms like Ftorex,
                                businesses can ensure that their goods are
                                cleared quickly and efficiently, allowing for
                                seamless international trade. With their
                                expertise and knowledge, Ftorex can help
                                businesses navigate complex customs regulations
                                and processes, saving them time and money while
                                reducing the risk of financial penalties or the
                                seizure of goods. Get in touch with Ftorex right
                                away to find out how their customs clearing
                                services might benefit you.
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

export default CustomsClearancePage
