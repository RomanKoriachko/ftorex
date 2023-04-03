import React from 'react'
import './ProductsPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const ProductsPage = () => {
    return (
        <div className="products-page">
            <PageHeader name={'Products'} />
            <div className="container">
                <Tabs>
                    <div className="row tabs-row">
                        <TabList>
                            <Tab>Coking coal</Tab>
                            <Tab>Thermal coal</Tab>
                            <Tab>Anthracite</Tab>
                            <Tab>PCI Coal</Tab>
                            <Tab>Oil & gas equipment</Tab>
                            <Tab>Fertilizer</Tab>
                            <Tab>Mining equipment</Tab>
                        </TabList>
                        <div className="tab-container">
                            <TabPanel>
                                <div>
                                    <p className="tab-content-header">
                                        Coking coal
                                    </p>
                                    <p className="tab-content-text">
                                        Our specialists search for the goods and
                                        suppliers you need all over the world.
                                        Verification of the creditworthiness of
                                        the supplier, product quality control,
                                        control of timely shipments,
                                        export/import documentation. With
                                        business connections in Southeast Asia,
                                        Europe, North/South America and the
                                        Middle East, FTOREX offers you the best
                                        service at competitive prices. Tell us
                                        the name of the product, and we will do
                                        all the work for you and deliver your
                                        goods to the specified address on time
                                        and on the best terms.
                                    </p>
                                    <img
                                        src="images/products-img-1.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        INAGLI COKING COAL (GRADE "Kzh")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        DENI DEEP COKING COAL (GRADE "K4")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <button className="download-btn">
                                        <div className="row btn-content-row">
                                            <p>download document</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <p className="tab-content-header">
                                        Thermal coal
                                    </p>
                                    <p className="tab-content-text">
                                        Our specialists search for the goods and
                                        suppliers you need all over the world.
                                        Verification of the creditworthiness of
                                        the supplier, product quality control,
                                        control of timely shipments,
                                        export/import documentation. With
                                        business connections in Southeast Asia,
                                        Europe, North/South America and the
                                        Middle East, FTOREX offers you the best
                                        service at competitive prices. Tell us
                                        the name of the product, and we will do
                                        all the work for you and deliver your
                                        goods to the specified address on time
                                        and on the best terms.
                                    </p>
                                    <img
                                        src="images/products-img-1.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        INAGLI COKING COAL (GRADE "Kzh")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        DENI DEEP COKING COAL (GRADE "K4")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <button className="download-btn">
                                        <div className="row btn-content-row">
                                            <p>download document</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <p className="tab-content-header">
                                        Anthracite
                                    </p>
                                    <p className="tab-content-text">
                                        Our specialists search for the goods and
                                        suppliers you need all over the world.
                                        Verification of the creditworthiness of
                                        the supplier, product quality control,
                                        control of timely shipments,
                                        export/import documentation. With
                                        business connections in Southeast Asia,
                                        Europe, North/South America and the
                                        Middle East, FTOREX offers you the best
                                        service at competitive prices. Tell us
                                        the name of the product, and we will do
                                        all the work for you and deliver your
                                        goods to the specified address on time
                                        and on the best terms.
                                    </p>
                                    <img
                                        src="images/products-img-1.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        INAGLI COKING COAL (GRADE "Kzh")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        DENI DEEP COKING COAL (GRADE "K4")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <button className="download-btn">
                                        <div className="row btn-content-row">
                                            <p>download document</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <p className="tab-content-header">
                                        PCI Coal
                                    </p>
                                    <p className="tab-content-text">
                                        Our specialists search for the goods and
                                        suppliers you need all over the world.
                                        Verification of the creditworthiness of
                                        the supplier, product quality control,
                                        control of timely shipments,
                                        export/import documentation. With
                                        business connections in Southeast Asia,
                                        Europe, North/South America and the
                                        Middle East, FTOREX offers you the best
                                        service at competitive prices. Tell us
                                        the name of the product, and we will do
                                        all the work for you and deliver your
                                        goods to the specified address on time
                                        and on the best terms.
                                    </p>
                                    <img
                                        src="images/products-img-1.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        INAGLI COKING COAL (GRADE "Kzh")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        DENI DEEP COKING COAL (GRADE "K4")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <button className="download-btn">
                                        <div className="row btn-content-row">
                                            <p>download document</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <p className="tab-content-header">
                                        Oil & gas equipment
                                    </p>
                                    <p className="tab-content-text">
                                        Our specialists search for the goods and
                                        suppliers you need all over the world.
                                        Verification of the creditworthiness of
                                        the supplier, product quality control,
                                        control of timely shipments,
                                        export/import documentation. With
                                        business connections in Southeast Asia,
                                        Europe, North/South America and the
                                        Middle East, FTOREX offers you the best
                                        service at competitive prices. Tell us
                                        the name of the product, and we will do
                                        all the work for you and deliver your
                                        goods to the specified address on time
                                        and on the best terms.
                                    </p>
                                    <img
                                        src="images/products-img-1.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        INAGLI COKING COAL (GRADE "Kzh")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        DENI DEEP COKING COAL (GRADE "K4")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <button className="download-btn">
                                        <div className="row btn-content-row">
                                            <p>download document</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <p className="tab-content-header">
                                        Fertilizer
                                    </p>
                                    <p className="tab-content-text">
                                        Our specialists search for the goods and
                                        suppliers you need all over the world.
                                        Verification of the creditworthiness of
                                        the supplier, product quality control,
                                        control of timely shipments,
                                        export/import documentation. With
                                        business connections in Southeast Asia,
                                        Europe, North/South America and the
                                        Middle East, FTOREX offers you the best
                                        service at competitive prices. Tell us
                                        the name of the product, and we will do
                                        all the work for you and deliver your
                                        goods to the specified address on time
                                        and on the best terms.
                                    </p>
                                    <img
                                        src="images/products-img-1.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        INAGLI COKING COAL (GRADE "Kzh")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        DENI DEEP COKING COAL (GRADE "K4")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <button className="download-btn">
                                        <div className="row btn-content-row">
                                            <p>download document</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <p className="tab-content-header">
                                        Mining equipment
                                    </p>
                                    <p className="tab-content-text">
                                        Our specialists search for the goods and
                                        suppliers you need all over the world.
                                        Verification of the creditworthiness of
                                        the supplier, product quality control,
                                        control of timely shipments,
                                        export/import documentation. With
                                        business connections in Southeast Asia,
                                        Europe, North/South America and the
                                        Middle East, FTOREX offers you the best
                                        service at competitive prices. Tell us
                                        the name of the product, and we will do
                                        all the work for you and deliver your
                                        goods to the specified address on time
                                        and on the best terms.
                                    </p>
                                    <img
                                        src="images/products-img-1.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        INAGLI COKING COAL (GRADE "Kzh")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <p className="tab-content-header">
                                        DENI DEEP COKING COAL (GRADE "K4")
                                    </p>
                                    <p className="tab-content-subtitle">
                                        contract characteristics:
                                    </p>
                                    <img
                                        src="images/products-img-2.png"
                                        alt=""
                                    />
                                    <button className="download-btn">
                                        <div className="row btn-content-row">
                                            <p>download document</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default ProductsPage
