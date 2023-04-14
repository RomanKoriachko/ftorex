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
                        </div>
                    </StickyBox>
                    <div className="product-container">
                        <div>
                            <p className="product-content-header">Anthracite</p>
                            <p className="product-content-text">
                                Anthracite coal, also known as hard coal, is a
                                type of coal that derives its name from the
                                Greek word ‘anthrakíts’ meaning ‘coal-like’. It
                                is one of the four types of coals along with
                                lignite coal, sub-bituminous coal, and
                                bituminous coal. Anthracite coal is the most
                                compressed and hardest coal available due to the
                                intense pressure and heat it has been subjected
                                to. Its hardness and compressed nature make it
                                an excellent source of heat energy compared to
                                softer, geologically ‘newer’ coal.
                            </p>
                            <p className="product-content-text">
                                According to ISO 11760:2005, anthracite coal is
                                defined as the coal having a mean random
                                vitrinite reflectance equal to or greater than
                                2.0 % but less than 6.0 %, or a mean maximum
                                reflectance less than 8.0 % for geologically
                                unaltered coal.
                            </p>
                            <p className="product-content-text">
                                Anthracite coal was formed from bituminous coal
                                when great pressures developed in the folded
                                rock, a process called ‘Anthracitization’. It
                                was formed during the Carboniferous Age when
                                dense green vegetation that thrived during the
                                tropical climate of the time fossilized. It is
                                the oldest and cleanest type of coal, the rarest
                                and most mature coal, and a hard, compact
                                variety of coal. It has the highest ranking
                                among all four types of coals and has undergone
                                the most metamorphosis. It also has the highest
                                fixed carbon content and the least impurities
                                and the highest energy density among all types
                                of coal.
                            </p>
                            <p className="product-content-text">
                                Anthracite coal typically occurs in old
                                geological formations that have spent the
                                longest time underground, and it accounts for
                                only around 1% of the world’s total coal
                                reserves. The major reserves of anthracite coal
                                are located mainly in China, Vietnam, North
                                Korea, Russia, Ukraine, and the USA.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/products-img-3.jpg"
                                alt=""
                            />
                            <p className="product-content-text">
                                Anthracite coal is associated with strongly
                                deformed sedimentary rocks which were subjected
                                to higher pressures and temperatures, but short
                                of metamorphic conditions, just as bituminous
                                coal is generally associated with less deformed
                                or flat-lying sedimentary rocks. Underground
                                mining techniques are commonly used to extract
                                anthracite coal from deep within the earth.
                            </p>
                            <p className="product-content-text">
                                Inferior coal rejected from anthracite coal
                                mines is called culm, which has less than half
                                the heat value of mined anthracite and higher
                                ash and moisture content. It is often used in
                                fluidized bed combustion (FBC) boilers.
                            </p>
                            <p className="product-content-text">
                                In summary, anthracite coal is a hard and
                                compressed type of coal that is known for its
                                high potential to produce heat energy. Its
                                formation from bituminous coal involves intense
                                pressure and heat, resulting in the highest
                                fixed carbon content and the least impurities
                                among all types of coal. Anthracite coal is the
                                rarest and most mature coal and is mainly found
                                in old geological formations in countries like
                                China, Vietnam, North Korea, Russia, Ukraine,
                                and the USA. Underground mining techniques are
                                used to extract it from deep within the earth.
                                Culm, an inferior coal rejected from anthracite
                                coal mines, is often used in fluidized bed
                                combustion boilers.
                            </p>
                            <p className="product-content-text">
                                Anthracite coal is a hard, dense rock with a
                                jet-black color that is clean to the touch. It
                                is free-burning and non-agglomerating, meaning
                                it does not coke or expand and fuse together
                                when ignited. Anthracite coal has a low ash
                                content and a high ash fusion temperature, and
                                its ignition temperature is typically around 480
                                to 500 degrees Celsius. The moisture content of
                                freshly mined anthracite is usually less than
                                15%.
                            </p>
                            <p className="product-content-text">
                                Compared to bituminous coal, anthracite coal is
                                harder (2.75-3 on the Mohs scale) and has a
                                higher relative density of 1.3-1.4. It also has
                                a semi-metallic luster with a mildly brown
                                reflection and a low Hardgrove grinding index
                                (HGI), requiring less energy for grinding.
                                Anthracite coal is the most brittle of all coal
                                types and is graded into anthracite fines (less
                                than 10mm) and anthracite lumps (10mm to 40mm).
                            </p>
                            <p className="product-content-text">
                                Anthracite coal is categorized into three
                                grades: semi-anthracite or standard grade,
                                anthracite or high grade, and meta-anthracite or
                                ultra-high grade. Anthracite and meta-anthracite
                                are the purest forms of coal, with the highest
                                degree of coalification, the highest carbon and
                                energy content, and the least impurities.
                                Anthracite and meta-anthracite grades are harder
                                than semi-anthracite grade coal and have a
                                higher relative density. The chemical formula
                                for anthracite grade representing 94% carbon is
                                C240H90O4NS. The hydrogen, nitrogen, and oxygen
                                contents in anthracite coal are around 2%,
                                1%-2%, and 1%, respectively. The sulphur content
                                in anthracite coal is typically very low at
                                around 0.6%.
                            </p>
                            <p className="product-content-text">
                                Anthracite coal is the most metamorphosed type
                                of coal, but still represents a low-grade of
                                metamorphism. It ignites with difficulty and
                                burns with a short, blue, and smokeless flame.
                                Typical porosity for anthracite coal is in the
                                range of 5% to 10%. The surface area of
                                anthracite coal is normally greater than 100 sq
                                m per gram of coal.
                            </p>
                            <p className="product-content-text">
                                Anthracite coal produces more heat than many
                                other coals and has a high calorific value on a
                                moist, mineral matter free basis, ranging from
                                6200 kcal/kg to 7900 kcal/kg depending on its
                                carbon content and VM. It is considered
                                ‘non-clinkering’ and free-burning. Anthracite
                                coal produces virtually no smoke or particulate
                                emissions, making it the cleanest burning coal
                                available.
                            </p>
                            <p className="product-content-text">
                                Anthracite coal possesses several qualities that
                                distinguish it from ordinary bituminous coal,
                                making it a superior product. Its pure form of
                                carbon, high calorific value, and clean-burning
                                properties determine its various uses.
                            </p>
                            <p className="product-content-text">
                                In metallurgical coal applications, anthracite
                                coal is used as a cost-effective substitute for
                                coke or coal, especially in processes like
                                sintering, pelletizing, and pulverized coal
                                injection (PCI) in the blast furnace. It serves
                                as a significant factor in cost reduction for
                                steelmaking processes, where it acts as a
                                reducing agent, carburizer, slag foaming, and
                                ladle additions. Additionally, it is used in the
                                production of ferro-alloys, silicon-manganese,
                                calcium-carbide, and silicon-carbide.
                                Standard-grade anthracite is primarily utilized
                                for power generation. It can also be used as a
                                smokeless fuel for domestic purposes and in
                                water purification.
                            </p>
                            <p className="product-content-text">
                                Anthracite coal is also used in various
                                industrial applications, such as charcoal
                                briquettes, glass carbon, and friction
                                materials. It is also added in ground form to
                                plastics and polymers as an additive.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="download-button-wrapper">
                    <div className="left-side-space"></div>
                    <div>
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
                    </div>
                </div>
                <div className="margin-bottom"></div>
            </div>
        </div>
    )
}

export default AnthracitePage
