import React from "react"
import "./MiningEquipmentPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const MiningEquipmentPage = () => {
    return (
        <div className="mining-page single-product-page">
            <PageHeader
                name="Mining equipment"
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
                                Mining equipment
                            </p>
                            <p className="product-content-text">
                                The mining industry is vital and has a major
                                impact on economies all around the world. Mining
                                is the practice of digging underground in search
                                of minerals, metals, and other geological
                                resources. The technique is time-consuming and
                                difficult to accomplish without the use of
                                specialized tools. The importance of
                                cutting-edge mining machinery cannot be
                                overstated in light of the ever-increasing
                                demand for raw materials. Since its inception,
                                Ftorex has been a forerunner in the mining
                                equipment market by consistently delivering
                                innovative products and services to its clients.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/mining-equipment-img.webp"
                                alt=""
                            />
                            <p className="product-content-subtitle">
                                The Backbone of Mining Procedures
                            </p>
                            <p className="product-content-text">
                                The success of every mining operation depends on
                                the availability of specialized mining
                                equipment. Mining machinery is the workhorse
                                upon which the extraction of minerals, metals,
                                and other resources from the earth is built.
                                This machinery is essential to the mining
                                process. Exploration is the first step in the
                                mining process. This is where geologists locate
                                promising mineral deposits. In order to assess
                                the quantity and quality of mineral resources at
                                a prospective site, mining corporations perform
                                surveys. Mining operations can then be planned
                                and the right machinery chosen with the use of
                                this data.
                            </p>
                            <p className="product-content-text">
                                The mining process, the mine's location, and the
                                minerals being mined all play a role in
                                determining the machinery used. Mining
                                operations employ a wide variety of tools, from
                                simple hand tools to complex machines designed
                                to excavate and transport massive amounts of
                                material.
                            </p>
                            <p className="product-content-subtitle">
                                Why is mining equipment important?
                            </p>
                            <p className="product-content-text">
                                Any mining operation would fail without the
                                necessary mining equipment. It's incredibly
                                important since it helps keep mines safe,
                                productive, and efficient. The term "mining
                                equipment" refers to a vast variety of machines,
                                tools, and transportation vehicles utilized in
                                the mining industry. Mining would be risky,
                                time-consuming, and inefficient if not for this
                                gear.
                            </p>
                            <p className="product-content-subtitle">
                                At Ftorex
                            </p>
                            <p className="product-content-text">
                                Ftorex recognizes the difficulties inherent in
                                today's dynamic mining industry. Mining firms
                                face a variety of challenges in today's market,
                                including but not limited to: environmental
                                regulation; commodity price volatility; and
                                safety concerns; and labor disputes. For this
                                reason, we have made it our mission to offer
                                cutting-edge, dependable mining machinery for
                                our customers.
                            </p>
                            <p className="product-content-text">
                                Every item we sell reflects our dedication to
                                new technologies and providing exceptional
                                service to our customers. From crushers and
                                mills to screens and conveyors, we have it all
                                for the mining industry. We also provide
                                ventilation systems, roof bolters, and
                                continuous miners, all of which are used in
                                underground mines. Our equipment's longevity and
                                dependability are two of its greatest strengths.
                                We have designed our products to work reliably
                                in the extreme conditions that are present in
                                mining operations. As a result, our customers
                                can spend less time and money on upkeep and more
                                time doing what they do best: mining for
                                precious metals and minerals.
                            </p>
                            <p className="product-content-text">
                                We offer a variety of services to complement our
                                high-quality goods and assist our customers in
                                getting the most out of their mining endeavors.
                                When it comes to selecting, installing, and
                                maintaining your equipment, our team of
                                engineers and technicians has you covered. To
                                make sure our clients' operators can use our
                                machinery safely and effectively, we also
                                provide training sessions.
                            </p>
                            <p className="product-content-text">
                                Ftorex is dedicated to sustainability and
                                minimizing the negative effects of mining on the
                                surrounding ecosystem. Our machinery is
                                environmentally friendly in that it uses less
                                energy and produces fewer greenhouse gases. In
                                addition to our environmental consulting
                                services, we also provide water and waste
                                management solutions to our business clients.
                            </p>
                            <p className="product-content-subtitle">
                                Maintaining Mining Equipment for Longevity
                            </p>
                            <p className="product-content-text">
                                Companies in the mining industry typically make
                                substantial investments in mining equipment.
                                Mining firms want to maximize their return on
                                investment, so they take care of their machinery
                                and keep it running well. If you want your
                                mining equipment to last as long as possible,
                                follow these guidelines:
                            </p>
                            <ol className="product-content-numbered-list">
                                <li>
                                    Prevent major issues from getting out of
                                    hand by doing regular inspections. The
                                    mining industry can save money on repairs
                                    and reduce equipment downtime if problems
                                    are detected early.
                                </li>
                                <li>
                                    Manufacturers of mining machinery typically
                                    include instructions on how frequently to do
                                    maintenance. When mining businesses adhere
                                    to these schedules, their machinery
                                    functions at maximum efficiency with minimal
                                    downtime.
                                </li>
                                <li>
                                    Staff training is essential for the safe and
                                    effective use of any piece of machinery.
                                    Mining businesses can save money in the long
                                    run by investing in training programs that
                                    lower the likelihood of accidents, shorten
                                    the amount of time equipment is out of
                                    commission, and increase its useful life.
                                </li>
                                <li>
                                    To guarantee that mining equipment functions
                                    efficiently and lasts as long as possible,
                                    it is important to use high-quality
                                    replacement components. Ftorex stocks a vast
                                    inventory of replacement components for
                                    mining machinery, allowing operators to keep
                                    their machines in peak condition.
                                </li>
                            </ol>
                            <p className="product-content-text">
                                Major Types of Mining Equipment
                            </p>
                            <table className="product-content-table">
                                <thead>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell table-header">
                                            Equipment
                                        </td>
                                        <td className="product-content-table-cell table-header">
                                            Uses
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Excavators
                                        </td>
                                        <td className="product-content-table-cell">
                                            Powerful machinery used to transport
                                            or remove a lot of earth
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Loaders
                                        </td>
                                        <td className="product-content-table-cell">
                                            Machines and tools used to load
                                            cargo into trucks and other vehicles
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Crushers
                                        </td>
                                        <td className="product-content-table-cell">
                                            Machines that break down hefty rocks
                                            and materials into smaller pieces
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Drills
                                        </td>
                                        <td className="product-content-table-cell">
                                            Tools used to drill holes in the
                                            ground for mining
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Dump trucks
                                        </td>
                                        <td className="product-content-table-cell">
                                            Vehicles specifically built to haul
                                            massive rocks and dirt
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Bulldozers
                                        </td>
                                        <td className="product-content-table-cell">
                                            Heavy machinery for moving dirt and
                                            rubble
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="product-content-subtitle">
                                Choosing the Right Partner for Your Mining
                                Equipment
                            </p>
                            <p className="product-content-text">
                                It is critical for a mining company to find a
                                reliable supplier of mining machinery. If you
                                want your mining business to go off without a
                                hitch, you need to make sure you're getting
                                supplies from a provider you can trust. Ftorex
                                is dedicated to ensuring the success of our
                                customers by offering them cutting-edge tools
                                and resources. We take great pleasure in our
                                dedication to ensuring the complete happiness of
                                each and every one of our customers, and our
                                team of professionals is always here to help.
                            </p>
                            <p className="product-content-subtitle">
                                Conclusion
                            </p>
                            <p className="product-content-text">
                                In conclusion, mining equipment is crucial to
                                the mining industry because it makes it possible
                                for miners to more effectively and safely
                                extract minerals from the earth. For varied
                                mining operations, Ftorex offers a variety of
                                top-notch mining equipment. Its machinery is
                                comprised of high-quality materials to ensure
                                durability and lifespan and is built to
                                specifically fit the requirements of each mining
                                operation. Ftorex is the company to choose if
                                you work in the mining business and are seeking
                                dependable mining equipment. To find out more
                                about our selection of mining equipment and how
                                we can help your mining operation, get in touch
                                with us right now.
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

export default MiningEquipmentPage
