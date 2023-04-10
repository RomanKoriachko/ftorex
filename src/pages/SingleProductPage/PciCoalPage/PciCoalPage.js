import React from "react"
import "./PciCoalPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const PciCoalPage = () => {
    return (
        <div className="thermal-coal-page single-product-page">
            <PageHeader
                name="PCI Coal"
                subtitle="Our company offers a comprehensive range of services including coal and fertilizer supplies, logistics solutions, customs clearance, ocean freight, and consulting to meet the diverse needs of our customers."
            />
            <div className="content-wrapper"></div>
            <div className="container">
                <div className="links-tablet">
                    <div>Coking coal</div>
                    <div>Thermal coal</div>
                    <div>Anthracite</div>
                    <div>PCI Coal</div>
                    <div>Oil & gas equipment</div>
                    <div>Fertilizer</div>
                    <div>Mining equipment</div>
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
                            <p className="product-content-header">PCI Coal</p>
                            <p className="product-content-text">
                                The use of pulverized coal injection (PCI) in
                                blast furnaces (BF) has become a common practice
                                due to its ability to reduce raw material costs,
                                pollution, and extend the life of ageing coke
                                ovens. Injecting pulverized coal into the BF
                                increases its productivity, reduces the
                                consumption of more expensive coking coals,
                                maintains furnace stability, improves the
                                consistency of the quality of hot metal (HM),
                                and reduces greenhouse gas emissions. The use of
                                PCI also allows furnace operators to adjust the
                                thermal condition of the furnace much faster
                                than adjusting the burden charge from the top.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/products-img-4.jpg"
                                alt=""
                            />
                            <p className="product-content-text">
                                Coking coals are not used for injection in the
                                BF due to their cost, lower availability, and
                                their necessity for the production of coke.
                                Coals used for injection in BF are usually weak
                                coking coals or non-coking coals with low,
                                medium, or high volatile matter (VM) content.
                                Bituminous coal, anthracite coals, or a blend of
                                different coals are commonly used for injection
                                in BF.
                            </p>
                            <p className="product-content-text">
                                The selection of coals for injection in BF is a
                                complicated process that often involves
                                adjustments based on cost savings and the
                                chemical and physical properties of the coal.
                                The required properties are site-specific and
                                depend on various operational factors related to
                                both BF operation and PCI preparation. The
                                relative importance of different aspects of PCI
                                coal quality has varied with the technology's
                                improvement and increased injection rate. Today,
                                there are many criteria used to measure the coal
                                quality to determine the performance of coal
                                used for injection in the BF, both in terms of
                                economic and technical benefits.
                            </p>
                            <p className="product-content-text">
                                Incomplete combustion of coal injected into the
                                blast furnace's raceway generates char, leading
                                to the accumulation of unburned particles in the
                                cohesive zone, dead man, and slag. This
                                accumulation can negatively impact the furnace's
                                gas permeability, increase the dead man's
                                dirtiness, decrease slag viscosity, reduce its
                                desulphurization ability, and ultimately
                                decrease furnace productivity, hot metal
                                quality, and increase the coke rate.
                            </p>
                            <p className="product-content-text">
                                Pulverized coal intended for BF coal injection
                                must meet certain quality standards, including
                                low ash and sulfur content, good grindability
                                and combustibility, strong reactivity, and more.
                                As the amount of coal injection into the BF
                                increases, the quality standards for pulverized
                                coal also increase.
                            </p>
                            <p className="product-content-text">
                                Coal's proximate and ultimate analyses determine
                                its suitability for injection into the blast
                                furnace. Although coals with both low and high
                                VM are used for injection, coals with higher VM
                                provide stronger devolatilization, resulting in
                                higher burnout. Higher fixed carbon (C) content
                                is desirable, while higher ash content increases
                                slag volumes in the furnace. High percentages of
                                S and P in coal can increase the S and P levels
                                in hot metal.
                            </p>
                            <p className="product-content-text">
                                Moisture in coal increases transportation costs
                                and affects the coal's handleability. Coals with
                                poor handling properties can cause blockages
                                during transport to the BF, especially when
                                combined with high coal fines content. Blockages
                                during transport have been linked to the
                                moisture content of pulverized coal. Moisture
                                also affects the energy consumption and output
                                of the pulverizer by increasing the volume and
                                temperature of the air needed for adequate coal
                                drying. A higher content of moisture tends to
                                lower the RAFT and requires more energy for
                                evaporation of the moisture. Although HV coals
                                may have better combustibility than LV ones,
                                they typically have higher moisture contents,
                                necessitating drying before pulverization or
                                blending with lower moisture coals. Total
                                moisture content of less than 10% is preferred
                                for coals used for PCI.
                            </p>
                            <p className="product-content-text">
                                At high rates of coal injection, the injected
                                coal/blend becomes a major source of ash and
                                other impurities. An ash content of less than
                                10% is typically desired because high levels of
                                coal mineral matter can reduce pulverizer
                                performance and throughput, increase wear in
                                pulverizer and conveying pipelines, cause lance
                                blockages, increase flux requirements, and limit
                                the thermal efficiency. Blending coals of widely
                                different ranks requires care when applying the
                                additivity rule for ash content.
                            </p>
                            <p className="product-content-text">
                                The quality of hot metal can be influenced by
                                the constituents present in injection coal ash,
                                which can also affect furnace operation and ash
                                viscosity. High viscosity coal ash at high
                                temperatures can lead to permeability problems
                                in the lower part of the blast furnace,
                                particularly in the combustion zone or on the
                                deadman surface. Inorganic constituents such as
                                Al2O3, SiO2, alkalis (mostly Na and K), Cl, P,
                                and S can impact the coke degradation, sinter
                                disintegration, refractory furnace lining, and
                                product quality. BF slag can help desulphurize,
                                but additional operating costs may arise if coal
                                injection increases S amount in the furnace. It
                                is challenging to remove S and alkalis
                                simultaneously in the BF because S removal
                                requires a basic slag and alkalis require an
                                acidic slag. Ash composition values, including
                                Cl and S contents, are additive for coal blends.
                            </p>
                            <p className="product-content-text">
                                Volatile Matter (VM) is composed of combustible
                                gases (e.g., H2, CH4, and CO), incombustible
                                gases (e.g., CO2 and steam), and condensable
                                volatiles like tar. Coal volatile content can
                                impact char formation, blast momentum, and coke
                                fines generation in the raceway due to coal
                                devolatilization in the hot blast and volatiles
                                liberated in the tuyeres. A higher volume of
                                gases injected into the raceway creates a
                                greater blast momentum and increases the raceway
                                depth. Therefore, before deciding whether to
                                inject low or high volatile coal, several
                                factors, including char formation, blast
                                momentum, and coke fines generation, must be
                                considered.
                            </p>
                            <p className="product-content-text">
                                Low Volatile (LV) coals have higher coke
                                replacement ratios, leading to lower coke rates,
                                but produce less hydrogen for iron ore
                                reduction, lower calorific value (CV), higher
                                RAFT, and lower combustion efficiency than High
                                Volatile (HV) coals. LV coals also produce less
                                off-gas, but burn less efficiently at high
                                injection rates. In contrast, HV coals have
                                superior combustion performance due to higher
                                volatile release, lower ignition temperature,
                                and more reactive chars. However, they also have
                                higher gas volume, which can lead to back
                                pressure problems in the tuyere and are more
                                susceptible to spontaneous combustion, affecting
                                ground handling systems. Inertinite rich LV
                                coals can also produce reactive chars, but
                                unburnt char can reduce bed permeability and
                                lead to C losses through the off gas.
                            </p>
                            <p className="product-content-text">
                                One can adjust the blast temperature and/or
                                oxygen enrichment rate to match the injected
                                coal. However, the amount of VM in coal is a
                                concern for plants with limited O2 enrichment
                                facilities. Medium volatile coals are often
                                considered the best option. Blending low and
                                high volatile coals can optimize the strengths
                                of each type, but caution is needed to apply the
                                additivity rule for VM blends. Moreover, the
                                proximate VM of a coal blend may not reliably
                                guide its combustion behavior if the blend
                                includes widely differing VM coals.
                            </p>
                            <p className="product-content-text">
                                In addition to VM, other important properties
                                for coals used in BF injection include CV,
                                melting characteristics of coal ash,
                                grindability, ignition point, combustion rate,
                                explosibility, length of backfire, and
                                reactivity.
                            </p>
                            <p className="product-content-text">
                                CV affects the coke replacement ratio and
                                furnace stability. Higher CV coals increase the
                                heat flux in the raceway, hence the RAFT. CV
                                typically increases with decreasing VM content
                                and is additive in blends.
                            </p>
                            <p className="product-content-text">
                                Melting/softening characteristics of coal ash
                                are expressed by initial deformation temperature
                                (IDT), softening temperature (ST), and flowing
                                temperature (FT). IDT is a critical
                                characteristic for coal ash, and low IDT values
                                can lead to ash deposition in injection lance
                                and tuyeres. Some BFs need a low IDT to ensure
                                that the slag formed in the furnace is easily
                                tapped. High IDT coals can block the deadman
                                region of the furnace if ash does not melt with
                                the deadman slag. ST or hemispherical
                                temperature (HT) is generally specified instead
                                of IDT for high IDT coals. IDT is a reflection
                                of the coal ash composition. The presence of
                                alkaline oxides acts as fluxes, lowering melting
                                temperatures.{" "}
                            </p>
                            <p className="product-content-text">
                                High S (from pyrite) can lower IDT. HV coal ash
                                is often highly alkaline, and hence melting
                                temperature is lower, making it more likely to
                                cause ash deposition problems than higher rank
                                LV coals. IDTs are not additive for coal blends.
                            </p>
                            <p className="product-content-text">
                                Grindability is measured by Hardgrove Grinding
                                Index (HGI), an index with no unit. HGI is used
                                to select coal grinding equipment and predict
                                capacity, performance, and energy requirement of
                                pulverizers. The smaller the HGI, the harder the
                                coal texture and the less grindable it is.
                                Conversely, the higher the HGI, the easier it is
                                to grind, resulting in lower power consumption
                                and higher throughput of coal in the pulverizer.
                                HGI increases to a maximum with increasing coal
                                rank from subbituminous to medium-rank coals and
                                decreases thereafter as rank increases to
                                anthracite. Soft coals produce a high proportion
                                of fines, which can clog transport lines, while
                                hard (low HGI) coals are difficult to grind,
                                leading to increased operating and maintenance
                                costs. Coals with an HGI between 40 and 70 are
                                generally preferred to minimize breakage during
                                handling and injection. HGIs are generally not
                                additive unless the blend contains
                                petrographically similar coals with similar HGI
                                values. HGI is not always a reliable indicator
                                of grinding performance since coals with similar
                                HGI values may not perform identically in
                                practice.
                            </p>
                            <p className="product-content-text">
                                The ignition point of coal is the temperature at
                                which it combusts. Coals with low ignition
                                points are not safe for pulverizing and
                                injection. The desired ignition point for coals
                                used for pulverized coal injection (PCI) is
                                around 400 degrees Celsius or higher.
                            </p>
                            <p className="product-content-text">
                                When coal is injected into a blast furnace (BF)
                                at a high rate, a decrease in combustion rate is
                                common. This can lead to problems with gas and
                                temperature distribution, as well as a decrease
                                in permeability in the furnace. To prevent these
                                issues, high coal combustion efficiency (also
                                called burnout) is necessary. Coals with higher
                                volatile matter (VM) have improved combustion
                                rates.
                            </p>
                            <p className="product-content-text">
                                The explosibility of coal is determined by
                                measuring the length of flame when dry
                                pulverized coal of one gram with a size under
                                0.074 mm is injected into a fire source at 1050
                                degrees Celsius. Coal explosibility affects the
                                safety of injecting coal into the BF.
                            </p>
                            <p className="product-content-text">
                                The reactivity of coal refers to its ability to
                                react with carbon dioxide (CO2) or water vapor
                                (H2O) under certain conditions. Coals with high
                                reactivity improve combustion rates, increase
                                injection rates, and improve coal to coke
                                substitution ratio.
                            </p>
                            <p className="product-content-text">
                                Coals for injection into the BF are often
                                blended to meet specifications, optimize
                                constituent strengths, and reduce raw material
                                costs. However, blending different types of
                                coal, such as low and high volatile coals, can
                                lead to problems with grinding and combustion
                                behavior. It is important to consider these
                                factors to ensure stable BF operation.
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

export default PciCoalPage
