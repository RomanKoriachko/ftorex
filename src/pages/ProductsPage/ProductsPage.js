import React from "react"
import "./ProductsPage.scss"
import PageHeader from "../../components/PageHeader/PageHeader"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Animated } from "react-animated-css"

const ProductsPage = () => {
    return (
        <div className="products-page">
            <PageHeader name={"Products"} />
            <div className="container">
                <Tabs>
                    <div className="tabs-tablet">
                        <TabList>
                            <Tab>Coking coal</Tab>
                            <Tab>Thermal coal</Tab>
                            <Tab>Anthracite</Tab>
                            <Tab>PCI Coal</Tab>
                            <Tab>Oil & gas equipment</Tab>
                            <Tab>Fertilizer</Tab>
                            <Tab>Mining equipment</Tab>
                        </TabList>
                    </div>
                    <div className="row tabs-row">
                        <Animated
                            animationIn="fadeInLeft"
                            isVisible={true}
                            animationInDuration={1500}
                        >
                            <div className="tabs-desktop">
                                <TabList>
                                    <Tab>Coking coal</Tab>
                                    <Tab>Thermal coal</Tab>
                                    <Tab>Anthracite</Tab>
                                    <Tab>PCI Coal</Tab>
                                    <Tab>Oil & gas equipment</Tab>
                                    <Tab>Fertilizer</Tab>
                                    <Tab>Mining equipment</Tab>
                                </TabList>
                            </div>
                        </Animated>
                        <div className="tab-container">
                            <TabPanel>
                                <Animated
                                    animationIn="fadeInUp"
                                    isVisible={true}
                                    animationInDuration={800}
                                >
                                    <div>
                                        <p className="tab-content-header">
                                            Coking coal
                                        </p>
                                        <p className="tab-content-text">
                                            Coking coal is a type of coal that
                                            is used in the production of steel.
                                            Also known as metallurgical coal, it
                                            is a high-quality coal that is
                                            valued for its ability to form a
                                            hard and strong coke when heated in
                                            the absence of air. Coking coal is
                                            typically low in sulfur and ash
                                            content, which makes it a desirable
                                            raw material for steel
                                            manufacturers. Due to its importance
                                            in the steel-making process, coking
                                            coal is a vital commodity in the
                                            global economy. As demand for steel
                                            continues to grow, particularly in
                                            developing countries, the demand for
                                            coking coal is also expected to
                                            increase.
                                        </p>
                                        <img
                                            className="tab-content-img"
                                            src="images/products-img-1.jpg"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            INAGLI COKING COAL (GRADE "Kzh")
                                        </p>
                                        <p className="tab-content-subtitle">
                                            contract characteristics:
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-table-img.png"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            DENI DEEP COKING COAL (GRADE "K4")
                                        </p>
                                        <p className="tab-content-subtitle">
                                            contract characteristics:
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-table-img.png"
                                            alt=""
                                        />
                                        <div className="download-button-wrapper">
                                            <button className="download-btn">
                                                <div className="row btn-content-row">
                                                    <p>download document</p>
                                                    <div className="btn-arrow"></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </Animated>
                            </TabPanel>
                            <TabPanel>
                                <Animated
                                    animationIn="fadeInUp"
                                    isVisible={true}
                                    animationInDuration={800}
                                >
                                    <div>
                                        <p className="tab-content-header">
                                            Thermal coal
                                        </p>
                                        <p className="tab-content-text">
                                            Thermal coal is a type of coal that
                                            is primarily used for generating
                                            electricity. It is a combustible
                                            black or brownish-black sedimentary
                                            rock that is mined from the earth's
                                            crust. Thermal coal is widely used
                                            in power plants as a fuel for
                                            producing steam that drives
                                            turbines, which in turn generate
                                            electricity. One of the primary
                                            advantages of thermal coal is that
                                            it is abundant and relatively cheap
                                            compared to other fossil
                                            fuels.Thermal coal is the most
                                            abundant and widely traded type of
                                            coal.
                                        </p>
                                        <img
                                            className="tab-content-img"
                                            src="images/products-img-2.jpg"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            INAGLI COKING COAL (GRADE "Kzh")
                                        </p>
                                        <p className="tab-content-subtitle">
                                            contract characteristics:
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-table-img.png"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            DENI DEEP COKING COAL (GRADE "K4")
                                        </p>
                                        <p className="tab-content-subtitle">
                                            contract characteristics:
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-table-img.png"
                                            alt=""
                                        />
                                        <div className="download-button-wrapper">
                                            <button className="download-btn">
                                                <div className="row btn-content-row">
                                                    <p>download document</p>
                                                    <div className="btn-arrow"></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </Animated>
                            </TabPanel>
                            <TabPanel>
                                <Animated
                                    animationIn="fadeInUp"
                                    isVisible={true}
                                    animationInDuration={800}
                                >
                                    <div>
                                        <p className="tab-content-header">
                                            Anthracite
                                        </p>
                                        <p className="tab-content-text">
                                            Anthracite is a type of coal that is
                                            known for its high carbon content,
                                            low impurities, and superior heating
                                            properties. Anthracite coal is the
                                            highest grade of coal, with a carbon
                                            content ranging from 86% to 98%. Due
                                            to its low impurity levels, it burns
                                            cleaner than other types of coal,
                                            producing fewer emissions.
                                            Anthracite is used mainly for
                                            heating homes and other buildings,
                                            as well as in the production of
                                            steel and other industrial processes
                                            that require high temperatures. It
                                            is also used in water filtration
                                            systems, as its high carbon content
                                            makes it an effective adsorbent for
                                            impurities.
                                        </p>
                                        <img
                                            className="tab-content-img"
                                            src="images/products-img-3.jpg"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            INAGLI COKING COAL (GRADE "Kzh")
                                        </p>
                                        <p className="tab-content-subtitle">
                                            contract characteristics:
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-table-img.png"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            DENI DEEP COKING COAL (GRADE "K4")
                                        </p>
                                        <p className="tab-content-subtitle">
                                            contract characteristics:
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-table-img.png"
                                            alt=""
                                        />
                                        <div className="download-button-wrapper">
                                            <button className="download-btn">
                                                <div className="row btn-content-row">
                                                    <p>download document</p>
                                                    <div className="btn-arrow"></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </Animated>
                            </TabPanel>
                            <TabPanel>
                                <Animated
                                    animationIn="fadeInUp"
                                    isVisible={true}
                                    animationInDuration={800}
                                >
                                    <div>
                                        <p className="tab-content-header">
                                            PCI Coal
                                        </p>
                                        <p className="tab-content-text">
                                            PCI (Pulverized Coal Injection) coal
                                            is a type of coal used in
                                            steelmaking that has been pulverized
                                            into a fine powder and injected into
                                            a blast furnace along with hot air
                                            to create a combustion reaction.
                                            This process helps to reduce the
                                            amount of coke required for the
                                            steelmaking process, resulting in
                                            lower costs and reduced
                                            environmental impact. PCI coal is
                                            typically lower in volatile matter
                                            and higher in carbon content than
                                            traditional thermal coal, which
                                            makes it more suitable for use in
                                            the steelmaking process. It is also
                                            generally less expensive than coking
                                            coal.
                                        </p>
                                        <img
                                            className="tab-content-img"
                                            src="images/products-img-4.jpg"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            INAGLI COKING COAL (GRADE "Kzh")
                                        </p>
                                        <p className="tab-content-subtitle">
                                            contract characteristics:
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-table-img.png"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            DENI DEEP COKING COAL (GRADE "K4")
                                        </p>
                                        <p className="tab-content-subtitle">
                                            contract characteristics:
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-table-img.png"
                                            alt=""
                                        />
                                        <div className="download-button-wrapper">
                                            <button className="download-btn">
                                                <div className="row btn-content-row">
                                                    <p>download document</p>
                                                    <div className="btn-arrow"></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </Animated>
                            </TabPanel>
                            <TabPanel>
                                <Animated
                                    animationIn="fadeInUp"
                                    isVisible={true}
                                    animationInDuration={800}
                                >
                                    <div>
                                        <p className="tab-content-header">
                                            Oil & gas equipment
                                        </p>
                                        <p className="tab-content-text">
                                            Oil and gas equipment refers to the
                                            tools, machinery, and devices used
                                            in the exploration, extraction,
                                            production, refining, and
                                            distribution of oil and gas. Each
                                            piece of equipment serves a specific
                                            purpose and is designed to handle
                                            the unique challenges of the oil and
                                            gas industry, such as extreme
                                            temperatures, high pressures, and
                                            corrosive substances. The
                                            development of new technology and
                                            equipment has allowed for more
                                            efficient and cost-effective methods
                                            of exploration and production.
                                        </p>
                                        <img
                                            className="tab-content-img"
                                            src="images/products-img-5.jpg"
                                            alt=""
                                        />
                                        <div className="download-button-wrapper">
                                            <button className="download-btn">
                                                <div className="row btn-content-row">
                                                    <p>download document</p>
                                                    <div className="btn-arrow"></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </Animated>
                            </TabPanel>
                            <TabPanel>
                                <Animated
                                    animationIn="fadeInUp"
                                    isVisible={true}
                                    animationInDuration={800}
                                >
                                    <div>
                                        <p className="tab-content-header">
                                            Fertilizer
                                        </p>
                                        <p className="tab-content-text">
                                            Fertilizers are chemical compounds
                                            that are used to enrich soil and
                                            enhance plant growth. They provide
                                            essential nutrients such as
                                            nitrogen, phosphorus, and potassium
                                            that are required for plant growth
                                            and development. Fertilizers can be
                                            either organic or inorganic.
                                            Inorganic fertilizers, also known as
                                            chemical fertilizers, are
                                            manufactured by chemical processes
                                            using minerals such as nitrogen,
                                            phosphorus, and potassium.
                                            Fertilizers are widely used in
                                            agriculture to improve crop yields
                                            and increase productivity.
                                        </p>
                                        <img
                                            className="tab-content-img"
                                            src="images/products-img-6.jpg"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            urea fertilizers
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-fertilizer-img-1.jpg"
                                            alt=""
                                        />
                                        <p className="tab-content-header">
                                            (mop) fertilizers
                                        </p>
                                        <img
                                            className="tab-content-table"
                                            src="images/products-fertilizer-img-2.jpg"
                                            alt=""
                                        />
                                        <div className="download-button-wrapper">
                                            <button className="download-btn">
                                                <div className="row btn-content-row">
                                                    <p>download document</p>
                                                    <div className="btn-arrow"></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </Animated>
                            </TabPanel>
                            <TabPanel>
                                <Animated
                                    animationIn="fadeInUp"
                                    isVisible={true}
                                    animationInDuration={800}
                                >
                                    <div>
                                        <p className="tab-content-header">
                                            Mining equipment
                                        </p>
                                        <p className="tab-content-text">
                                            Mining equipment refers to various
                                            types of machinery used in the
                                            extraction of minerals, metals, and
                                            other geological materials from the
                                            earth's surface or subsurface. The
                                            mining equipment industry has been
                                            rapidly developing over the years,
                                            driven by increased demand for
                                            minerals and metals. Advancements in
                                            technology have led to the creation
                                            of more efficient and productive
                                            mining equipment that can extract
                                            resources from deep underground.
                                        </p>
                                        <img
                                            className="tab-content-img"
                                            src="images/products-img-7.jpg"
                                            alt=""
                                        />
                                        <div className="download-button-wrapper">
                                            <button className="download-btn">
                                                <div className="row btn-content-row">
                                                    <p>download document</p>
                                                    <div className="btn-arrow"></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </Animated>
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default ProductsPage
