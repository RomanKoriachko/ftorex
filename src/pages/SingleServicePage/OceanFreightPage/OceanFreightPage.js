import React from "react"
import "./OceanFreightPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const OceanFreightPage = () => {
    return (
        <div className="single-service-page ocean-freight-page">
            <PageHeader
                name="Ocean freight"
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
                                Ocean freight
                            </p>
                            <p className="service-content-text">
                                We at Ftorex are cognizant of the significance
                                of ocean freight to your operations, at whatever
                                levels. As a frontrunner in the logistics
                                industry, we provide a variety of services
                                catered to each client's specific requirements.
                                Experts on our team have years of expertise
                                resolving difficult logistical problems, and
                                they collaborate directly with customers to
                                guarantee timely and undamaged delivery. You now
                                have the privilege of knowing more about our
                                services:
                            </p>
                            <p className="service-content-subtitle">
                                What is ocean freight?
                            </p>
                            <p className="service-content-text">
                                Shipments of products over international borders
                                are referred to as ocean freight or sea freight.
                                Shipping items abroad by ocean freight is by far
                                the most common practice. The oceans carry
                                around 90 percent of the world's trade.
                            </p>
                            <p className="service-content-text">
                                It is crucial to periodically assess your
                                shipping options, whether you are new to
                                international shipping or a seasoned pro. If you
                                find yourself wondering, "Does ocean freight
                                make sense for me?" if so, you've come to the
                                right place.
                            </p>
                            <p className="service-content-subtitle">
                                Why Should I Consider Ocean Freight?
                            </p>
                            <p className="service-content-text">
                                When developing our ocean freight solutions, we
                                at Ftorex consider every detail. For the
                                following reasons, you should give serious
                                thought to working with us, whether you need to
                                send perishable items or big cargo:
                            </p>
                            <ul className="service-content-list">
                                <li>
                                    Personalized itineraries for cargo transport
                                </li>
                            </ul>
                            <p className="service-content-text">
                                Ftorex collaborates closely with our customers
                                to develop individualized shipping strategies
                                that take into consideration the particular
                                needs of each individual customer in order to
                                guarantee that their shipments will be delivered
                                on time. We will keep you up to date on the
                                progress of your cargo on a regular basis, and
                                our team of logistics specialists is accessible
                                to answer any questions or address any concerns
                                you may have at any time of the day or night.
                            </p>
                            <ul className="service-content-list">
                                <li>Security</li>
                            </ul>
                            <p className="service-content-text">
                                While transporting goods by sea, security is an
                                additional essential aspect to take into
                                consideration. Theft of cargo and acts of piracy
                                are persistent dangers to the integrity of ocean
                                freight; therefore, companies have a
                                responsibility to adopt appropriate safety
                                measures to guard their shipments. At Ftorex, we
                                collaborate with our customers to develop and
                                execute security measures that are tailored to
                                their specific requirements. These measures may
                                include container sealing, GPS tracking, or
                                insurance coverage.
                            </p>
                            <ul className="service-content-list">
                                <li>Cost-Effective</li>
                            </ul>
                            <p className="service-content-text">
                                Cost is usually a major consideration in any
                                type of international trade. Shipping products
                                through the ocean is more cost-effective than
                                shipping via air for huge loads. Ftorex's ocean
                                freight services are reasonably priced, and the
                                company can tailor its offerings to meet your
                                needs in terms of cost and turnaround time. You
                                can save money and put that into other parts of
                                your company if you ship via ocean.
                            </p>
                            <ul className="service-content-list">
                                <li>Reliable</li>
                            </ul>
                            <p className="service-content-text">
                                The dependability of ocean freight is one of its
                                primary benefits. Ocean freight is generally
                                considered dependable despite potential delays
                                in arrival time depending on the final
                                destination. Here at Ftorex, we use a staff of
                                trained experts who guarantee the timely and
                                secure delivery of your items. We also offer
                                real-time tracking so that companies may check
                                on the status of their shipments at any moment.
                            </p>
                            <ul className="service-content-list">
                                <li>Environment Friendly</li>
                            </ul>
                            <p className="service-content-text">
                                It is generally agreed that shipping goods over
                                the ocean is one of the least harmful forms of
                                transportation for the environment. Ocean
                                freight has a smaller carbon footprint and
                                creates fewer emissions when compared to other
                                modes of transportation, namely air freight. At
                                Ftorex, we are committed to sustainability, and
                                as part of that commitment, we take steps to
                                ensure that the environmental impact of our
                                business activities is kept to a minimum.
                            </p>
                            <p className="service-content-subtitle">
                                Our Services
                            </p>
                            <p className="service-content-text">
                                Here at FTOREX, we provide ocean freight
                                services that are all-encompassing. We have the
                                know-how and equipment to transfer any quantity
                                of items, no matter how big or small. We take
                                care of everything from booking and paperwork to
                                loading and delivery to make sure our customers'
                                shipments go off without a hitch.
                            </p>
                            <ol className="service-content-numbered-list">
                                <li>Booking</li>
                                <p className="service-content-text">
                                    To make scheduling your shipping with us as
                                    easy as possible, we've created a
                                    streamlined booking process. You can make
                                    your reservations whenever it's convenient
                                    for you, whether online or by calling a
                                    member of our knowledgeable staff, who will
                                    gladly answer any questions you may have.
                                </p>
                                <li>Documentation</li>
                                <p className="service-content-text">
                                    When it comes to ocean freight, we at Ftorex
                                    are aware of the significance of maintaining
                                    documentation that is both correct and
                                    up-to-date. Our team of seasoned specialists
                                    will take care of all the essential papers,
                                    such as bills of lading, documents for
                                    customs clearance, and any other paperwork
                                    that may be required to ensure that your
                                    shipment is in compliance with all of the
                                    applicable requirements.
                                </p>
                                <li>Loading</li>
                                <p className="service-content-text">
                                    We are equipped to handle any kind of cargo
                                    because of our cutting-edge infrastructure
                                    and inventory, which includes anything from
                                    large machinery to perishable commodities.
                                    Our loading procedure is meticulously
                                    monitored to guarantee that your items are
                                    loaded in a safe and secure manner, reducing
                                    the likelihood that they will be lost or
                                    damaged while in transit.
                                </p>
                                <li>Delivery</li>
                                <p className="service-content-text">
                                    At Ftorex, we hold that the delivery
                                    component of maritime freight is on par with
                                    the significance of the other components. We
                                    provide a range of convenient delivery
                                    alternatives, such as door-to-door,
                                    port-to-port, and terminal-to-terminal
                                    services, so that your items can be
                                    delivered on time and in pristine condition
                                    to the location of their final destination.
                                </p>
                            </ol>
                            <p className="service-content-subtitle">
                                Comparison Table: Ocean Freight Shipping vs. Air
                                Freight and Road Transportation
                            </p>
                            <p className="service-content-text">
                                The following table compares the ocean freight
                                shipping with air freight and road
                                transportation.
                            </p>
                            <table className="service-content-table">
                                <thead>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell table-header">
                                            Mode of Transportation
                                        </td>
                                        <td className="service-content-table-cell table-header"></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Ocean Freight Shipping
                                        </td>
                                        <td className="service-content-table-cell">
                                            Low-priced, eco-friendly,
                                            high-capacity, risk-free but longer
                                            time for transit
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Air Freight
                                        </td>
                                        <td className="service-content-table-cell">
                                            Shorter travel durations, more
                                            adaptability, but higher prices and
                                            fewer slots
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Road transportation
                                        </td>
                                        <td className="service-content-table-cell">
                                            Customizable, shorter wait times for
                                            local trips, Constraints in
                                            capacity, increased prices for
                                            greater distances, and the
                                            possibility of delays due to traffic
                                            or bad weather
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="service-content-subtitle">
                                Bottom Line
                            </p>
                            <p className="service-content-text">
                                In conclusion, ocean freight is crucial to
                                international trade, and Ftorex is here to
                                assist companies in meeting the many logistical
                                issues that arise when moving goods over the
                                ocean. We have the knowledge and tools to craft
                                an ocean freight solution that is tailored to
                                your specific needs, guaranteeing the safe and
                                timely delivery of your products. We strive to
                                give our customers an easy and stress-free
                                shipping experience by offering a wide variety
                                of services performed by knowledgeable experts.
                                Get in touch with us immediately to find out how
                                our ocean freight services might benefit either
                                your company or you as an individual.
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

export default OceanFreightPage
