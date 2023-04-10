import React from "react"
import "./ThermalCoalPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const ThermalCoalPage = () => {
    return (
        <div className="thermal-coal-page single-product-page">
            <PageHeader
                name="Thermal coal"
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
                            <p className="product-content-header">
                                Thermal coal
                            </p>
                            <p className="product-content-text">
                                Thermal coal, also known as non-coking coal,
                                steam coal, or boiler coal, is a type of
                                bituminous coal used for combustion in furnaces
                                to generate heat energy due to its high
                                calorific value. Unlike coking coal, it is not
                                used in the production of coke. Thermal coal is
                                characterized by higher volatile matter and
                                lower carbon content, and its gross calorific
                                value is greater than 5700 kcal/kg on an
                                ash-free but moist basis.
                            </p>
                            <p className="product-content-text">
                                The primary use of thermal coal is to generate
                                steam for electricity production in boilers. It
                                is also used in some ironmaking processes, such
                                as the production of direct reduced iron and hot
                                metal. However, the quality of thermal coal
                                varies widely, with no fixed chemical formula
                                due to its complex, heterogeneous nature. Its
                                constituents include carbon, oxygen, hydrogen,
                                sulphur, nitrogen, ash, chlorine, and sodium,
                                and the organic molecule's chemical structure
                                depends on the coal's rank.
                            </p>
                            <img
                                className="product-content-img"
                                src="/images/products-img-2.jpg"
                                alt=""
                            />

                            <p className="product-content-text">
                                The performance of thermal coal in a furnace is
                                influenced by its properties, including mineral
                                matter, impurities, and reactivity, all of which
                                affect combustion efficiency, reliability, and
                                availability. The ash-forming material can cause
                                slagging and fouling deposits, and coal
                                properties affect furnace operating and
                                maintenance costs, as well as waste disposal
                                costs. Thus, the value of thermal coal is
                                largely dependent on its various properties,
                                with beneficial properties resulting in cost
                                savings and detrimental properties resulting in
                                cost increases.
                            </p>
                            <p className="product-content-text">
                                The cost of thermal coal is linked to its
                                heating value, which is determined by the
                                combustible matter, mainly carbon and hydrogen,
                                and how they react during combustion. The ash,
                                volatile matter, and moisture contents also
                                affect furnace efficiency. Therefore,
                                determining the correct heating value is crucial
                                for the economical operation of the furnace.
                            </p>
                            <p className="product-content-text">
                                The analysis of thermal coal can be classified
                                into two types: ultimate and proximate. The
                                ultimate analysis provides information on the
                                elemental chemical constituents of thermal coal,
                                including C, H2, O2, S, N2, and Cl. This
                                information is essential for calculating the
                                amount of air needed for combustion, the
                                composition of combustion gases, and the design
                                of flue gas ducts. The different constituents of
                                thermal coal have varying effects on coal
                                combustion, so it is crucial to understand them
                                in detail. For example, high sulfur content can
                                cause clinkering and slagging tendencies,
                                corrode equipment, and limit flue gas exit
                                temperature.
                            </p>
                            <p className="product-content-text">
                                The proximate analysis of thermal coal
                                determines the percentages of fixed carbon,
                                volatile matter, moisture, and ash in the coal.
                                Fixed carbon is the main heat generator during
                                burning and provides a rough estimate of the
                                coal's heating value. Volatile matter
                                contributes to the heating value of coal and
                                affects flame length and ease of ignition. Ash
                                is an impurity that does not burn and affects
                                the design of furnace grates, combustion volume,
                                pollution control devices, and ash handling
                                plants. Moisture increases transportation,
                                handling, and storage costs and decreases the
                                heat content per kilogram of coal. It can also
                                cause heat loss due to evaporation and
                                superheating of vapor.
                            </p>
                            <p className="product-content-text">
                                The moisture content of coal can be divided into
                                inherent moisture, which is trapped within the
                                coal's structure, and exogenous moisture, which
                                is external to the coal. The amount of moisture
                                in coal affects the heating required to dry it
                                before use, and changes in moisture content can
                                alter the proportion of other coal constituents
                                and the coal's calorific value.
                            </p>
                            <p className="product-content-text">
                                The volatile matter content of thermal coal is
                                critical for both furnace and ironmaking use, as
                                it determines the burn rate of the coal. Coals
                                with high volatile matter content are easy to
                                ignite but may not be as preferred as those with
                                moderately high volatile matter content. Coal
                                with low volatile matter content may be
                                difficult to ignite, although it contains more
                                energy per unit volume.
                            </p>
                            <p className="product-content-text">
                                Ash is the residue left after coal combustion,
                                and its percentage is measured as a percentage
                                of the air-dried coal sample. Higher ash content
                                implies higher transportation and handling costs
                                per unit of energy, and it is typically disposed
                                of as waste.
                            </p>
                            <p className="product-content-text">
                                The calorific value, or CV, of thermal coal is
                                the measure of its potential energy that can be
                                converted into heat energy upon combustion. This
                                value varies depending on factors such as the
                                coal's geological age, formation, ranking, and
                                source. The CV is expressed in two ways, gross
                                CV (GCV) and net CV (NCV), to account for the
                                presence of moisture in the coal. GCV is also
                                known as high heating value (HHV), while NCV is
                                also known as low heating value (LHV). The
                                relationship between NCV and GCV at a constant
                                volume is expressed by the equation NCV = (GCV –
                                0.206H)*[(100-TM)/(100-IM)] – 0.023TM, where H
                                represents the percentage of H2, TM represents
                                the percentage of total moisture, and IM
                                represents the percentage of inherent moisture
                                or air-dried moisture. Both NCV and GCV are
                                measured in kilocalories per kilogram (kcal/kg).
                            </p>
                            <p className="product-content-text">
                                The relationship between GCV and NCV based on
                                ultimate analysis is given by the equation ‘NCV
                                in kcal/kg = GCV – 50.6*%H – 5.85*%M – 0.191*%O
                                where H, M, O represent the values of H2,
                                moisture, and O2 in the coal. The CV of coal can
                                be determined either by calculating from
                                chemical analysis or by burning a sample in a
                                calorimeter. The CV obtained by a calorimeter is
                                the GCV. Calculation of the CV of coal based on
                                proximate analysis gives a rough estimate and is
                                generally used to determine the grade of coal.
                                The formula adopted for this is ‘useful heat
                                value of coal in kcal/kg = 8900 – 138*(M + A)’
                                where M represents the percentage of moisture
                                content and A represents the percentage of ash
                                content.
                            </p>
                            <p className="product-content-text">
                                The ultimate analysis gives a more accurate CV
                                of thermal coal. The formula used for this is
                                ‘GCV of coal in kcal/kg = (355*% C + 1148*%H +
                                95*% S – 145*% O)/4.1868’. Here, C, H, S, O
                                represent the percentage figures obtained in the
                                ultimate analysis of coal for C, H2, S, and O2.
                                When coal burns, the moisture in the coal
                                evaporates and takes away some heat of
                                combustion, which is not available to the
                                furnace for heating. The CV determined by
                                calorimeter is higher than that obtainable under
                                most working conditions in a furnace by an
                                amount equal to the latent heat of vaporization
                                of water. In general, higher CV coal requires
                                less coal in the furnace but generally comes at
                                a higher cost due to greater washing and
                                processing by the producer. This cost is offset
                                by lower logistics, storage, and ash disposal
                                costs.
                            </p>
                            <p className="product-content-text">
                                The grindability, ignition temperature, and ash
                                fusion temperature (AFT) are other important
                                properties of thermal coal.
                            </p>
                            <p className="product-content-text">
                                Prior to being fired into a furnace, thermal
                                coal undergoes grinding, which can be a costly
                                process. The behaviour of the coal during
                                grinding is known as its grindability, measured
                                by the Hardgrove Grinding Index (HGI). HGI is an
                                index that predicts the capacity, performance,
                                energy requirement of pulverizers, and
                                determines the particle size of the grind
                                produced. A higher HGI indicates easier
                                grinding, lower power consumption, and higher
                                throughput of coal in the pulverizer, whereas a
                                lower HGI indicates a harder coal texture and
                                increased operating and maintenance costs. The
                                size distribution of the coal resulting from
                                grinding can affect its combustibility and
                                handleability in the bins and transfer lines.
                            </p>
                            <p className="product-content-text">
                                The ignition temperature of coal is the
                                temperature at which it combusts. Coals with low
                                ignition points are unsafe for long storage and
                                pulverizing.
                            </p>
                            <p className="product-content-text">
                                The ash fusion temperature (AFT) is used to
                                evaluate the slagging tendency during coal
                                combustion. The ash fusion test is performed in
                                a reducing atmosphere and helps assess the
                                combined effect the ash forming minerals have on
                                ash softening properties at different
                                temperature levels. Higher levels of AFT prevent
                                ash from depositing on the furnace floor and
                                walls.
                            </p>
                            <p className="product-content-text">
                                Pollutants emitted from thermal coal combustion
                                depend on various factors including the fuel's
                                rank and composition, the type and size of the
                                furnace, firing conditions, load, type of
                                control technologies, and level of equipment
                                maintenance. The major pollutants of concern are
                                particulate matter (PM), sulphur oxides (SOx),
                                and nitrogen oxides (NOx), while some unburned
                                combustibles such as carbon monoxide (CO) and
                                numerous organic compounds are generally emitted
                                even under proper furnace operating conditions.
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

export default ThermalCoalPage
