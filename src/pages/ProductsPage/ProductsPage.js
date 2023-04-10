import React from "react"
import "./ProductsPage.scss"
import PageHeader from "../../components/PageHeader/PageHeader"
import { Helmet } from "react-helmet"
import MessageForm from "../../components/MessageForm/MessageForm"

const ProductsPage = () => {
    return (
        <div className="products-page">
            <Helmet>
                <title>Products</title>
                <meta
                    name="description"
                    content="FTOREX International trading company focused in procurement of coking, thermal, anthracite, PCI coals, as well as fertilizer worldwide. The major goal is to provide the price directly from manufacturers."
                />
            </Helmet>
            <PageHeader
                name={"Products"}
                subtitle={
                    "Our company offers a comprehensive range of services including coal and fertilizer supplies, logistics solutions, customs clearance, ocean freight, and consulting to meet the diverse needs of our customers."
                }
            />
            <section className="products-page-section">
                <div className="container">
                    <div className="products-wrapper">
                        <div className="product-item">
                            <div className="product-box">
                                <p>Coking coal</p>
                                <p>
                                    Coking coal is a type of coal that is used
                                    in the production of steel. Also known as
                                    metallurgical coal, it is a high-quality
                                    coal that is valued for...
                                </p>
                                <div>
                                    <button className="info-btn">
                                        <div className="row btn-content-row">
                                            <p>View info</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>Thermal coal</p>
                                <p>
                                    Thermal coal is a type of coal that is
                                    primarily used for generating electricity.
                                    It is a combustible black or brownish-black
                                    sedimentary...
                                </p>
                                <div>
                                    <button className="info-btn">
                                        <div className="row btn-content-row">
                                            <p>View info</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>Anthracite</p>
                                <p>
                                    Anthracite is a type of coal that is known
                                    for its high carbon content, low impurities,
                                    and superior heating properties. Anthracite
                                    coal...
                                </p>
                                <div>
                                    <button className="info-btn">
                                        <div className="row btn-content-row">
                                            <p>View info</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>PCI Coal</p>
                                <p>
                                    PCI (Pulverized Coal Injection) coal is a
                                    type of coal used in steelmaking that has
                                    been pulverized into a fine powder and
                                    injected into a blast...
                                </p>
                                <div>
                                    <button className="info-btn">
                                        <div className="row btn-content-row">
                                            <p>View info</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>fertilizer</p>
                                <p>
                                    Fertilizers are chemical compounds that are
                                    used to enrich soil and enhance plant
                                    growth. They provide essential nutrients
                                    such...{" "}
                                </p>
                                <div>
                                    <button className="info-btn">
                                        <div className="row btn-content-row">
                                            <p>View info</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p className="long-header">
                                    oil & gas equipment
                                </p>
                                <p>
                                    Oil and gas equipment refers to the tools,
                                    machinery, and devices used in the
                                    exploration, extraction, production,
                                    refining...{" "}
                                </p>
                                <div>
                                    <button className="info-btn">
                                        <div className="row btn-content-row">
                                            <p>View info</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-box">
                                <p>mining equipment</p>
                                <p>
                                    Mining equipment refers to various types of
                                    machinery used in the extraction of
                                    minerals, metals, and other geological
                                    materials...{" "}
                                </p>
                                <div>
                                    <button className="info-btn">
                                        <div className="row btn-content-row">
                                            <p>View info</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-item product-item-contact">
                            <div className="product-box">
                                <p>
                                    Contact us and we will offer you the best
                                    cooperation option
                                </p>
                                <div>
                                    <button className="contact-btn">
                                        <div className="row btn-content-row">
                                            <p>CALL NOW</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MessageForm />
                </div>
            </section>
        </div>
    )
}

export default ProductsPage
