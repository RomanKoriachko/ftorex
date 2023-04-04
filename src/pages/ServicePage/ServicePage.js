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
                                At FTOREX, we prioritize quality and
                                sustainability, and we work with manufacturers
                                who share our commitment to these values. We
                                believe that responsible sourcing and ethical
                                business practices are essential for building
                                long-term relationships with our customers and
                                ensuring the continued success of our business.
                            </p>
                            <p className="item-text">
                                Overall, FTOREX Commercial Broker LLC is a
                                reliable and reputable supplier of coking coal
                                to customers worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="row paragraph-row">
                        <div>
                            <p className="item-header">Fertilizer supplies</p>
                            <p className="item-text">
                                At FTOREX, we prioritize quality and
                                sustainability, and we work with manufacturers
                                who share our commitment to these values. We
                                believe that responsible sourcing and ethical
                                business practices are essential for building
                                long-term relationships with our customers and
                                ensuring the continued success of our business.
                            </p>
                            <p className="item-text">
                                Overall, FTOREX Commercial Broker LLC is a
                                reliable and reputable supplier of coking coal
                                to customers worldwide.
                            </p>
                        </div>
                        <img src="images/supplies-img-2.png" alt="" />
                    </div>
                    <div className="row paragraph-row">
                        <img src="images/supplies-img-3.png" alt="" />
                        <div>
                            <p className="item-header">Logistic Solutions</p>
                            <p className="item-text">
                                At FTOREX, we prioritize quality and
                                sustainability, and we work with manufacturers
                                who share our commitment to these values. We
                                believe that responsible sourcing and ethical
                                business practices are essential for building
                                long-term relationships with our customers and
                                ensuring the continued success of our business.
                            </p>
                            <p className="item-text">
                                Overall, FTOREX Commercial Broker LLC is a
                                reliable and reputable supplier of coking coal
                                to customers worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="row paragraph-row">
                        <div>
                            <p className="item-header">Customs Clearance</p>
                            <p className="item-text">
                                At FTOREX, we prioritize quality and
                                sustainability, and we work with manufacturers
                                who share our commitment to these values. We
                                believe that responsible sourcing and ethical
                                business practices are essential for building
                                long-term relationships with our customers and
                                ensuring the continued success of our business.
                            </p>
                            <p className="item-text">
                                Overall, FTOREX Commercial Broker LLC is a
                                reliable and reputable supplier of coking coal
                                to customers worldwide.
                            </p>
                        </div>
                        <img src="images/supplies-img-4.png" alt="" />
                    </div>
                    <div className="row paragraph-row">
                        <img src="images/supplies-img-5.png" alt="" />
                        <div>
                            <p className="item-header">Ocean freight</p>
                            <p className="item-text">
                                At FTOREX, we prioritize quality and
                                sustainability, and we work with manufacturers
                                who share our commitment to these values. We
                                believe that responsible sourcing and ethical
                                business practices are essential for building
                                long-term relationships with our customers and
                                ensuring the continued success of our business.
                            </p>
                            <p className="item-text">
                                Overall, FTOREX Commercial Broker LLC is a
                                reliable and reputable supplier of coking coal
                                to customers worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="row paragraph-row">
                        <div>
                            <p className="item-header">Consulting</p>
                            <p className="item-text">
                                At FTOREX, we prioritize quality and
                                sustainability, and we work with manufacturers
                                who share our commitment to these values. We
                                believe that responsible sourcing and ethical
                                business practices are essential for building
                                long-term relationships with our customers and
                                ensuring the continued success of our business.
                            </p>
                            <p className="item-text">
                                Overall, FTOREX Commercial Broker LLC is a
                                reliable and reputable supplier of coking coal
                                to customers worldwide.
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
