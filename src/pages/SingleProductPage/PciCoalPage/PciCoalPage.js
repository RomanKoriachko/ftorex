import React from "react"
import "./PciCoalPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const PciCoalPage = () => {
    return (
        <div className="pci-coal-page single-product-page">
            <PageHeader
                name="PCI Coal"
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
                            <p className="product-content-header">PCI Coal</p>
                            <p className="product-content-text">
                                Pulverized coal injection coal is a type of coal
                                that is mostly used in the process of steel
                                production as a supplementary fuel. In this
                                process, finely ground coal is injected into a
                                blast furnace along with the main fuel, mostly
                                metallurgical coal. The substance injected is
                                then combusted, resulting in the release of
                                energy, which helps increase the total
                                temperature of the furnace and facilitate the
                                reduction of iron oxide to iron. The particles
                                present are suspended in the hot air, after
                                which they are transported to the furnace
                                through a network of pipes.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/pci-page-img-1.webp"
                                alt=""
                            />
                            <p className="product-content-subtitle">
                                Major Characteristics of PCI Coal
                            </p>
                            <p className="product-content-text">
                                When it comes to getting this raw material at
                                FTOREX, it is essential that you are familiar
                                with some of the characteristics to look out
                                for. Pulverized coal injection was initially
                                introduced in the 1960s as a means of reducing
                                the cost and, at the same time, improving the
                                efficiency of its industrial procedures. The
                                technology was first built in Japan, where the
                                scarcity of coking coal and the high cost of
                                coke made it of utmost importance to look for
                                other options.
                            </p>
                            <p className="product-content-text">
                                After this, the technology was then implemented
                                by various other steel producing nations of the
                                world, such as China, South Korea, and India.
                                Apart from the fact that it is quite useful in
                                blast furnaces, there are various other places
                                where it is applicable, which include pulverized
                                coal-fired boilers and power plants. With all
                                this being said, the table below gives a
                                detailed explanation of some of the key
                                qualities of PCI coal.
                            </p>
                            <table className="product-content-table">
                                <thead>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell table-header">
                                            Characteristics
                                        </td>
                                        <td className="product-content-table-cell table-header">
                                            Description
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Particle Size
                                        </td>
                                        <td className="product-content-table-cell">
                                            It comes in a relatively small size,
                                            ranging from between 10 and 50
                                            microns. This characteristic makes
                                            it easy for it to be injected into
                                            the blast furnace and burned
                                            efficiently.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Composition
                                        </td>
                                        <td className="product-content-table-cell">
                                            Its composition can vary based on
                                            where it is gotten from. However, it
                                            comes with a relatively low ash
                                            content and a high volatile matter
                                            content, making it a cleaner-burning
                                            fuel compared to others.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Calorific Value
                                        </td>
                                        <td className="product-content-table-cell">
                                            This type of coal has a low
                                            calorific value when compared with
                                            the other forms of coal.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Reactivity
                                        </td>
                                        <td className="product-content-table-cell">
                                            It is highly reactive and can react
                                            rapidly with oxygen n the furnace to
                                            give off heat and reduce iron oxide
                                            to iron.
                                        </td>
                                    </tr>
                                    <tr className="product-content-table-row">
                                        <td className="product-content-table-cell">
                                            Handling Properties
                                        </td>
                                        <td className="product-content-table-cell">
                                            Due to the fact that it is a fine
                                            powder, it can be quite challenging
                                            to handle and transport. Special
                                            equipment and storage facilities are
                                            needed to prevent dust explosions
                                            and ensure that it is delivered in a
                                            proper quantity.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="product-content-subtitle">
                                Reasons Why You Should Get Your PCI Coal From
                                FTOREX
                            </p>
                            <p className="product-content-text">
                                If you are in one way or another involved in the
                                steelmaking process, then you must be aware of
                                the fact that PCI coal is a major element needed
                                for production. Therefore, it is essential that
                                you get it from a reliable and reputable source.
                                Here are some of the reasons why you should get
                                your PCI coal from FTOREX:
                            </p>
                            <ul className="product-content-list">
                                <li>
                                    Quality Assurance: FTOREX has put in place
                                    quality control measures to ensure that our
                                    PCI coal meets the required standards and
                                    specifications. We perform regular analysis
                                    and testing of the coal to confirm its
                                    composition in order to provide our clients
                                    with the best possible service. Also, we
                                    check to ensure that it is suitable for use
                                    when undergoing the production of steel.
                                </li>
                                <li>
                                    Consistency: PCI coal gotten from FTOREX is
                                    known to have consistent characteristics and
                                    properties, which can assist in making
                                    quality performance in the industrial
                                    process. By getting your coal from FTOREX,
                                    the variability that occurs during the whole
                                    procedure is reduced to the barest minimum,
                                    as is the risk of quality issues.
                                </li>
                                <li>
                                    Reliability: FTOREX provides you with a
                                    reliable supply chain and delivery system to
                                    ensure that the material is delivered on
                                    time and in the appropriate quantity and
                                    quality. This will help in lowering downtime
                                    and production delays due to challenges
                                    faced by the supply chain.
                                </li>
                                <li>
                                    Compliance with Regulation: FTOREX complies
                                    with relevant regulations and standards
                                    governing the production, use, and
                                    transportation of PCI coal. With that in
                                    mind, you can be certain that it is produced
                                    and used in an environmentally responsible
                                    way. Also, it is important to note that the
                                    health and wellbeing of all employees of
                                    FTOREX are adequately protected.
                                </li>
                                <li>
                                    Technical Support: FTOREX provides steel
                                    producers with the necessary technical
                                    support needed for them to optimize their
                                    use of PCI coal, such as assistance with
                                    their selection, monitoring, injection
                                    rates, and analysis of coal performance.
                                </li>
                            </ul>
                            <p className="product-content-subtitle">
                                Benefits of Using Pulverized Coal Injection
                            </p>
                            <p className="product-content-text">
                                There are lots of benefits associated with
                                making use of PCI coal gotten from FTOREX. Here,
                                we will be discussing the way and manner in
                                which it impacts the steel making process, along
                                with the advantages that it offers when compared
                                to others.
                            </p>
                            <ul className="product-content-list">
                                <li>
                                    Cost Savings: One of the major advantages of
                                    using this raw material is that it is cost
                                    saving. This type of coal is typically less
                                    expensive than other options, such as coke
                                    or metallurgical coal. With PCI, steel
                                    producers can reduce their overall cost of
                                    fuel.
                                </li>
                                <li>
                                    Increased Productivity: It can also help
                                    increase the productivity of the work done
                                    in the burning chamber, and this can result
                                    in a more efficient use of resources.
                                </li>
                                <li>
                                    Reduced Environmental Impact: Another
                                    benefit is that PCI coal helps reduce the
                                    constant demand for more expensive fuel in
                                    the environment, which can be quite harmful
                                    if not managed properly. Due to the fact
                                    that it burns in a controlled chamber, it
                                    produces fewer emissions than other coal
                                    types.
                                </li>
                                <li>
                                    Improved Flexibility: This type of coal is a
                                    versatile fuel that can be used in various
                                    applications, such as as a supplementary
                                    fuel for power plants.
                                </li>
                            </ul>
                            <p className="product-content-subtitle">
                                Conclusion
                            </p>
                            <p className="product-content-text">
                                Pulverized coal injection is a technique that
                                deals with blowing massive amounts of coal
                                granules directly into the blast furnaces of
                                steel mills and pellet plants. Here at FTOREX,
                                we provide you with top-notch PCI either for
                                pellet plant applications or for met coke
                                replacement in blast furnaces. Our products are
                                quality as we work together with major
                                producers, thereby enabling us to ensure the
                                consistency of the quality of our product and
                                swift delivery of this material to our clients.
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

export default PciCoalPage
