import React from 'react'
import './ServicePage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import MessageForm from '../../components/MessageForm/MessageForm'

const ServicePage = ({ messageRef }) => {
    return (
        <div className="service-page">
            <PageHeader name={'Service'} />
            <section className="supplies-section">
                <div className="container">
                    <p className="supplies-header">
                        Ftorex is a global coal industry company designed to
                        establish and develop a Coal Business, Engineering &
                        General Purpose
                    </p>
                    <div className="row paragraph-row">
                        <img src="images/supplies-img-1.png" alt="" />
                        <div>
                            <p className="item-header">Coal supplies</p>
                            <p className="item-text">
                                Our company offers coal supplies for various
                                industries that require this fossil fuel as an
                                energy source. We provide both thermal and
                                coking coal of different grades and
                                specifications to meet the needs of our clients.
                                We ensure the quality of the coal we supply, and
                                we source it from reliable and trusted
                                suppliers. We also offer flexible delivery
                                options and competitive pricing.
                            </p>
                        </div>
                    </div>
                    <div className="row paragraph-row">
                        <div>
                            <p className="item-header">Fertilizer supplies</p>
                            <p className="item-text">
                                Ftorex provides various types of fertilizers to
                                meet the needs of agriculture and other related
                                industries. We offer a range of fertilizers,
                                including nitrogen, phosphate, and potash-based
                                fertilizers, as well as micronutrients. We
                                ensure the quality of the fertilizers we supply,
                                and we source them from trusted suppliers. We
                                also provide flexible delivery options and
                                competitive pricing.
                            </p>
                        </div>
                        <img src="images/supplies-img-2.png" alt="" />
                    </div>
                    <div className="row paragraph-row">
                        <img src="images/supplies-img-3.png" alt="" />
                        <div>
                            <p className="item-header">Logistic Solutions</p>
                            <p className="item-text">
                                We offer logistic solutions to facilitate the
                                movement of goods from one place to another. Our
                                logistic solutions include transportation,
                                warehousing, inventory management, and other
                                value-added services. We have a strong network
                                of logistics partners that enable us to provide
                                efficient and cost-effective solutions to our
                                clients.
                            </p>
                        </div>
                    </div>
                    <div className="row paragraph-row">
                        <div>
                            <p className="item-header">Customs Clearance</p>
                            <p className="item-text">
                                Our company provides customs clearance services
                                to facilitate the import and export of goods. We
                                have a team of experts who handle all
                                customs-related formalities and ensure
                                compliance with all regulations. We provide
                                hassle-free customs clearance services to our
                                clients.
                            </p>
                        </div>
                        <img src="images/supplies-img-4.png" alt="" />
                    </div>
                    <div className="row paragraph-row">
                        <img src="images/supplies-img-5.png" alt="" />
                        <div>
                            <p className="item-header">Ocean freight</p>
                            <p className="item-text">
                                Our company offers ocean freight services to
                                facilitate the movement of goods via sea. We
                                provide end-to-end ocean freight services,
                                including booking, documentation, loading, and
                                delivery. We have partnerships with various
                                shipping lines, which enable us to provide
                                cost-effective and reliable services.
                            </p>
                        </div>
                    </div>
                    <div className="row paragraph-row">
                        <div>
                            <p className="item-header">Consulting</p>
                            <p className="item-text">
                                We provide consulting services to help our
                                clients make informed decisions related to their
                                businesses. Our consulting services cover
                                various areas, including market research,
                                feasibility studies, strategy development, and
                                business planning. We have a team of experts who
                                provide customized solutions to our clients
                                based on their specific needs and requirements.
                            </p>
                        </div>
                        <img src="images/supplies-img-6.png" alt="" />
                    </div>
                </div>
            </section>
            <MessageForm messageRef={messageRef} />
        </div>
    )
}

export default ServicePage
