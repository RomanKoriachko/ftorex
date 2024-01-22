import React from "react"
import "./LogisticSolutionsPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const LogisticSolutionsPage = () => {
    return (
        <div className="single-service-page logistic-solutions-page">
            <PageHeader
                name="Logistic Solutions"
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
                                Logistic Solutions
                            </p>
                            <p className="service-content-text">
                                When it comes to moving goods from one place to
                                another, the right logistics partner can make
                                all the difference. That's where Ftorex comes
                                in, providing a range of solutions designed to
                                make your business stress free. Here are some of
                                the logistics solutions we offer:
                            </p>
                            <p className="service-content-subtitle">
                                Transportation services
                            </p>
                            <p className="service-content-text">
                                Ftorex's transportation services are designed to
                                provide efficient and cost-effective solutions
                                to our clients. Our transportation solutions
                                cover a wide range of industries, including
                                manufacturing, retail, healthcare, and more.
                                With a strong network of logistics partners, we
                                are able to provide customized transportation
                                solutions that meet the specific needs of each
                                client.
                            </p>
                            <p className="service-content-text">
                                At Ftorex, we understand that timely delivery is
                                critical to the success of any business. That's
                                why we offer a variety of transportation
                                options, including air, ocean, and ground
                                transportation.
                            </p>
                            <p className="service-content-text">
                                Our ground transportation solutions include road
                                freight, rail freight, and intermodal
                                transportation. We offer a variety of vehicles,
                                including trucks, vans, and trailers, to
                                transport goods of different sizes and
                                quantities. Our air transportation services
                                include both domestic and international air
                                freight, ensuring speedy and reliable delivery
                                of goods across the globe. We also provide ocean
                                transportation services for clients with bulk or
                                oversized cargo that requires cost-effective
                                shipping options
                            </p>
                            <p className="service-content-text">
                                Our team of logistics experts works closely with
                                clients to determine the most appropriate mode
                                of transportation based on their budget, time
                                frame, and product specifications.
                            </p>
                            <p className="service-content-subtitle">
                                Warehousing services
                            </p>
                            <p className="service-content-text">
                                Ftorex understands the importance of secure and
                                reliable warehousing facilities in the logistics
                                industry. That's why we offer top-notch
                                warehousing solutions that are tailored to meet
                                the specific needs of our clients. Our
                                warehouses are strategically located in key
                                areas, making it easy to access major transport
                                routes and ensuring the efficient movement of
                                goods.
                            </p>
                            <p className="service-content-text">
                                Our warehousing facilities are equipped with
                                state-of-the-art security systems, including
                                24-hour CCTV surveillance and access control
                                systems. This ensures that our clients' goods
                                are kept safe and secure at all times. Our
                                warehouses are also climate-controlled, ensuring
                                that goods are stored in the right conditions,
                                regardless of the season.
                            </p>
                            <p className="service-content-subtitle">
                                Storage solutions
                            </p>
                            <p className="service-content-text">
                                At Ftorex, we understand that different goods
                                require different storage solutions. That's why
                                we offer a variety of storage options, including
                                bulk storage, pallet racking, and pick-and-pack
                                solutions. Our experienced staff is on hand to
                                provide guidance on the most appropriate storage
                                solutions for your specific needs.
                            </p>
                            <p className="service-content-subtitle">
                                Inventory management
                            </p>
                            <p className="service-content-text">
                                When it comes to logistics solutions, efficient
                                and effective inventory management can make all
                                the difference. That's why Ftorex offers a range
                                of top-notch inventory management services as
                                part of our comprehensive logistics solutions.
                            </p>
                            <p className="service-content-text">
                                Our inventory management services are designed
                                to help businesses of all sizes keep track of
                                their inventory levels, monitor stock movements,
                                and optimize their supply chain operations. From
                                real-time inventory tracking to customized
                                reporting and analytics, our inventory
                                management solutions are tailored to meet the
                                specific needs of each of our clients.
                            </p>
                            <p className="service-content-text">
                                Also, we understand that inventory management
                                can be a complex and time-consuming process.
                                That's why we leverage cutting-edge
                                technologies, including RFID and barcoding, to
                                automate inventory tracking and reduce the risk
                                of errors. Our cloud-based inventory management
                                system provides our clients with real-time
                                visibility into their inventory levels, allowing
                                them to make informed decisions and manage their
                                supply chain more efficiently.
                            </p>
                            <p className="service-content-text">
                                But that's not all. Ftorex's inventory
                                management services also include demand
                                forecasting, replenishment planning, and safety
                                stock optimization, which help businesses
                                improve their inventory accuracy, reduce costs,
                                and minimize the risk of stockouts.
                            </p>
                            <p className="service-content-subtitle">
                                Value-added services
                            </p>
                            <p className="service-content-text">
                                Ftorex goes above and beyond the standard
                                offerings of transportation, warehousing, and
                                inventory management. Our goal is to provide a
                                comprehensive suite of services that truly add
                                value to our clients' businesses.
                            </p>
                            <p className="service-content-text">
                                One of the value-added services we offer is
                                packaging and repackaging. We understand that
                                different goods require different types of
                                packaging, and we work closely with our clients
                                to ensure that their products are packaged in
                                the most efficient and cost-effective way
                                possible. Our skilled team can also repackage
                                goods if necessary, ensuring that they are ready
                                for transport to their final destination.
                            </p>
                            <p className="service-content-text">
                                Another service that sets us apart is our order
                                fulfillment capabilities. Our state-of-the-art
                                technology allows us to efficiently pick, pack,
                                and ship products, making the order fulfillment
                                process as smooth as possible for our clients.
                                This means that they can focus on their core
                                business activities, knowing that their orders
                                are being handled with the utmost care and
                                attention to detail.
                            </p>
                            <p className="service-content-text">
                                At Ftorex, we also offer customization services.
                                Whether it's labeling, kitting, or bundling, we
                                can tailor our logistics solutions to meet the
                                unique needs of our clients. This level of
                                customization ensures that their products arrive
                                at their destination exactly as intended, which
                                can be a significant advantage in today's
                                competitive marketplace.
                            </p>
                            <p className="service-content-subtitle">
                                Benefits of using Ftorex
                            </p>
                            <p className="service-content-text">
                                Our strong network of logistics partners is a
                                key factor in providing efficient and
                                cost-effective logistics solutions to their
                                clients. This network of partners spans across
                                various regions and sectors, enabling us to
                                offer tailored solutions that meet the unique
                                needs of each client. Here are some of the
                                benefits of our strong network of logistics
                                partners:
                            </p>
                            <ul className="service-content-list">
                                <li>
                                    Expanded reach: By partnering with logistics
                                    companies across various regions, Ftorex can
                                    provide services to clients in areas that
                                    may have been previously difficult to reach.
                                </li>
                                <li>
                                    Reduced Costs: With a wide network of
                                    logistics partners, Ftorex can negotiate
                                    better rates for their clients, thus
                                    reducing transportation and warehousing
                                    costs.
                                </li>
                                <li>
                                    Flexibility: Ftorex's network of logistics
                                    partners provides the flexibility to scale
                                    operations up or down depending on demand,
                                    without compromising on the quality of
                                    service.
                                </li>
                                <li>
                                    Improved Efficiency: By working with
                                    logistics partners who specialize in
                                    specific sectors or modes of transportation,
                                    Ftorex can provide efficient and streamlined
                                    services that reduce transit times and
                                    minimize delays.
                                </li>
                                <li>
                                    Customized Solutions: With a vast network of
                                    logistics partners, Ftorex can provide
                                    customized solutions that meet the unique
                                    needs of each client, from specialized
                                    packaging to unique storage requirements.
                                </li>
                            </ul>
                            <p className="service-content-text">
                                With a commitment to both efficiency and
                                affordability, We have built a strong network of
                                logistics partners to ensure that clients
                                receive the best possible service. Also, we
                                provide value-added services to help businesses
                                grow and thrive. To take your business to the
                                next level, contact us today
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

export default LogisticSolutionsPage
