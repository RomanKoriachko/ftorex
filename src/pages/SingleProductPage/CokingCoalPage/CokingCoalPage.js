import React from "react"
import "./CokingCoalPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const CokingCoalPage = () => {
    return (
        <div className="coking-coal-page single-product-page">
            <PageHeader
                name="Coking coal"
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
                            <p className="product-content-header">
                                Coking coal
                            </p>
                            <p className="product-content-text">
                                Metallurgical coal, also known as coking coal,
                                is a type of coal that is used in steelmaking
                                and foundry processes. It is classified into
                                categories such as hard coking coal, semi-hard
                                coking coal, semi-soft coking coal, and coal for
                                pulverized coal injection (PCI), based on their
                                different quality grades. Compared to thermal
                                coal used for power generation, coking coal
                                contains more carbon, less ash, and less
                                moisture.
                            </p>
                            <p className="product-content-text">
                                Hard coking coal is a crucial ingredient in the
                                production of strong coke, and is used in coke
                                ovens. Semi-soft coking coal, also known as
                                medium/weak coking coal, is used in coal blends
                                with hard coking coal. Coal for PCI, which is
                                injected directly into the blast furnace, is
                                used for its heat value and to reduce the
                                consumption of coke per ton of hot metal.
                            </p>
                            <p className="product-content-text">
                                Hard coking coals (HCC)
                            </p>
                            <p className="product-content-text">
                                Medium coking coal (MCC)
                            </p>
                            <p className="product-content-text">
                                Semi-soft coking coal (SSCC) Pulverized coal for
                            </p>
                            <p className="product-content-text">
                                injection (PCI) coal
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/products-img-1.jpg"
                                alt=""
                            />
                            <p className="product-content-text">
                                Blends of metallurgical coals are formulated
                                from a variety of different ranks, types, and
                                grades of coals, sourced from different sources.
                                The purpose of these blends is to produce the
                                highest quality coke at the lowest possible cost
                                while protecting the coke ovens during the
                                carbonization process. The term metallurgical
                                coal is a broader term that includes all coals
                                used in steelmaking and foundry processes.
                            </p>
                            <p className="product-content-text">
                                The properties of coking coals
                            </p>
                            <p className="product-content-text">
                                Preparing coking coals for charging into coke
                                ovens incurs significant costs. The coal's
                                crushing behavior can be determined using the
                                'Hardgrove grindability index' (HGI), which
                                indicates the expected crushing behavior of the
                                coal. A soft coal with a high HGI allows for
                                higher throughput with the same or lower power
                                requirement. The size distribution of the coal
                                is also important as it can impact on the coal's
                                handleability in the bins/silos and transfer
                                conveyors. Petrographic analysis is a useful
                                tool for predicting coking coal properties. This
                                analysis involves identifying macerals, which
                                are microscopically distinct organic entities in
                                coal. The macerals are then grouped into
                                reactive, semi-inert, and inert categories based
                                on their behavior during carbonization. The
                                coal's rank is determined by measuring the
                                reflectance and calculating the strength of the
                                binding materials created through carbonization
                                of reactives. Using these characteristics, the
                                strength (rank) and inert indices of the coking
                                coals are calculated. Coke of high stability can
                                be produced from coal blends with an optimum
                                ratio of reactive components to inert
                                components. The reactive components contribute
                                fluidity to the coal and act as binders, while
                                the inert components (either organic or
                                inorganic) act as fillers in the formation of
                                the coke structure.
                            </p>
                            <p className="product-content-text">
                                Macerals are microscopically recognizable
                                organic constituents of coal, identified based
                                on their reflectance and morphology. Bituminous
                                coal, of which coking coal is a part, is
                                generally composed of three major maceral
                                groups: vitrinite, exinite, and inertinite.
                            </p>
                            <p className="product-content-text">
                                Vitrinite is the predominant maceral constituent
                                in nearly all coals, originating from the woody
                                tissue of plants. It is the most abundant of the
                                macerals and matures the most uniformly
                                throughout the coalification process. The
                                reflectance of vitrinite in plane polarized
                                light is frequently used as the decisive
                                indicator of coal rank. Vitrinite is
                                quantitatively the most important maceral,
                                accounting for 60% to 80% of most worked coals.
                                It is primarily responsible for the
                                characteristic coking behavior of higher rank
                                bituminous coals. Vitrinite is the predominant
                                reactive binder forming the wall and pore
                                structure of coke, acting as the adhesive
                                necessary to assimilate and bond the aggregate
                                that originates with the inertinite group. Other
                                important characteristics of coking coal are
                                also described below.
                            </p>
                            <p className="product-content-text">
                                Macerals are examined microscopically to obtain
                                maceral analysis, which is a volumetric
                                distribution of macerals in a coal sample.
                                Vitrinite and exinite are particularly important
                                due to their higher reactivity compared to other
                                species of coal. The analysis is conducted by
                                setting a small block of fine coal into epoxy
                                material and polishing one face, then examining
                                multiple points on the polished face (at least
                                500) under a microscope to record the observed
                                maceral species as a percentage.
                            </p>
                            <p className="product-content-text">
                                Vitrinite reflectance, also known as mean
                                maximum reflectance (MMR), is used to determine
                                coal rank. It is measured by the percentage of
                                light reflected off the vitrinite maceral at
                                500x magnification in oil immersion. Low
                                volatile coking coals typically have MMR values
                                in the range of 1.42% to 1.75%, while medium and
                                high volatile coking coals have values in the
                                ranges of 1.05% to 1.4% and 0.70% to 1.02%,
                                respectively.
                            </p>
                            <p className="product-content-text">
                                Rank is determined through petrography, which
                                quantifies the amount of light reflected off the
                                coal as its "reflectance" (R). Higher
                                reflectance indicates a higher coal rank.
                            </p>
                            <p className="product-content-text">
                                Coal hardness is classified as weak, semi-soft
                                coking, semi-hard, or hard coking coal, and the
                                hardness of produced coke increases the value of
                                the coal.
                            </p>
                            <p className="product-content-text">
                                Calorific value is the amount of chemical energy
                                stored in a coal, which is released as thermal
                                energy upon combustion, and is directly related
                                to coal rank. It is measured in kilo-calories.
                            </p>
                            <p className="product-content-text">
                                Moisture content is determined by heating an
                                air-dried coal sample at 105-110°C under
                                specific conditions until a constant weight is
                                obtained.
                            </p>
                            <p className="product-content-text">
                                Ash is the inorganic residue remaining after the
                                coal is completely burned. Increased ash (or
                                mineral matter) reduces coke yield, increases
                                slag volume in the blast furnace, and consumes
                                more coke during smelting in the blast furnace.
                            </p>
                            <p className="product-content-text">
                                Ash fusion temperature (AFT) refers to the
                                temperature at which the behavior of ash changes
                                as it is heated. The AFT is determined by
                                heating cones of ground and pressed ash in both
                                oxidizing and reducing atmospheres.
                            </p>
                            <p className="product-content-text">
                                Volatile matter (VM) includes all substances
                                other than moisture that are released as gas and
                                vapor during combustion. The VM is measured by
                                heating the coal and measuring the loss of
                                weight at 105 degrees Celsius (when the moisture
                                content is removed), and then again at 950
                                degrees Celsius (when the VM is burned off). VM
                                is usually an indicator of coal rank, but it
                                also shows the amount of volatile substances in
                                the coal that gasify and are released during the
                                coking process, thus affecting the coke yield.
                                The coal with higher VM results in lower coke
                                yield after carbonization, while coal with lower
                                VM has a higher rank.
                            </p>
                            <p className="product-content-text">
                                Plasticity is the ability of coal to melt, bond
                                and become plastic when heated, and then
                                re-solidify into coke. It indicates the initial
                                softening, chemical reaction, gas liberation,
                                and re-solidification process within the coke
                                oven. Plasticity is an important requirement in
                                the coal blend and is required for the strength
                                of the end product coke. The fluidity of the
                                plastic stage plays a significant role in
                                determining the proportions of coal used in a
                                blend.
                            </p>
                            <p className="product-content-text">
                                Fluidity is measured by Gieseler plastometer,
                                which heats fine coal (not pulverized) slowly
                                and measures its fluidity as it melts and passes
                                through its plastic range. The results are
                                expressed as maximum fluidity in "dial divisions
                                per minute" (ddpm). The initial softening
                                temperature, maximum fluidity temperature, and
                                re-solidification temperature are also recorded.
                                The plastic range, which is the temperature
                                range during which the coal is in a plastic
                                state, is also important. Although all coking
                                tests are sensitive to oxidation, the Gieseler
                                plastometer test is the most sensitive.
                            </p>
                            <p className="product-content-text">
                                Maximum dilatation measures the expanding and
                                contracting characteristics of coal. The test is
                                carried out in Audibert-Arnu dilatometer, where
                                finely crushed coal is compressed into a pencil
                                and then heated slowly. As the coal passes
                                through its plastic range, the pencil initially
                                contracts and then expands. The measurements
                                taken are the "maximum contraction" and "maximum
                                dilation (expansion)", both expressed as a
                                percentage of the initial pencil length. The
                                maximum contraction is always positive, and the
                                maximum dilation is positive when the pencil
                                increases in length from the initial length, and
                                negative when the pencil decreases in length.
                                The temperature of initial softening and maximum
                                dilation is also recorded. Results from this
                                test are very sensitive to coal oxidation.
                            </p>
                            <p className="product-content-text">
                                The Gray-King coke type test is a
                                straightforward method for determining coking
                                properties. Coal is finely crushed and then
                                heated in a glass retort, with the resulting
                                coke residue's shape, texture, and appearance
                                compared to standards to give a letter rating.
                                The Gray-King coke type values range from 'A'
                                (no coking characteristics) to 'G', then 'G1' to
                                'G9' (excellent coking properties).
                            </p>
                            <p className="product-content-text">
                                Another test that assesses the plastic
                                properties of coal is the Free Swelling Index
                                (FSI), also known as the Crucible Swelling
                                Number (CSN). However, this test has limited
                                quantitative value as it is primarily a
                                threshold test. The FSI test involves heating a
                                gram of coal in a crucible to 800°C and visually
                                comparing the resulting coke button to a
                                standard chart of shapes and sizes to determine
                                the FSI value on a scale of one to nine (Fig 2).
                                Hard coking coal typically has FSI values above
                                4 (normally in the range of 4-6), medium coking
                                coal in the range of 2-4, and weak coking coal
                                in the range of 1-2.
                            </p>
                            <p className="product-content-text">
                                Several other rheological tests are available,
                                including the Roga index, the G caking index,
                                and the Sapozhnikov plastometer. The sole-heated
                                oven test, the pressure oven test, and the
                                movable oven wall test are also classified as
                                rheological tests but are intended to measure
                                the performance of formulated blends in terms of
                                contraction away from the oven walls, the
                                pressure exerted against the oven walls, and the
                                quality of coke expected to be produced,
                                respectively.
                            </p>
                            <p className="product-content-text">
                                The quality of coking coal is determined by
                                considering its chemical elements, ash content,
                                moisture, coking properties, and strength. The
                                most important chemical elements in coking coal
                                include sulphur, phosphorus, and alkalis (such
                                as sodium and potassium), which should have a
                                low percentage in the coal.
                            </p>
                            <p className="product-content-text">
                                Parameters used to evaluate the coking
                                properties of coal can be categorized into three
                                main characteristics: (i) parameters describing
                                the quantity and quality of liquid matter during
                                the coking process, including maximum plastic
                                layer thickness, maximum fluidity, and maximum
                                dilatation, (ii) parameters focusing on coke
                                profiles and geometry, such as free swelling
                                index and Gray-King index, and (iii) parameters
                                related to the ability of the coal to combine
                                inertinite matter and form coke.
                            </p>
                            <div className="download-button-wrapper">
                                <button className="download-btn">
                                    <div className="row btn-content-row">
                                        <a href="/files//FTOREX.pdf" download>
                                            download document
                                        </a>
                                        <div className="btn-arrow"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CokingCoalPage
