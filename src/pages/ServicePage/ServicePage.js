import React from 'react'
import ScrollDownBtn from '../../components/ScrollDownBtn/ScrollDownBtn'
import './ServicePage.scss'

const ServicePage = () => {
    return (
        <div className="service-page">
            <section className="preview-section">
                <div className="container">
                    <div className="preview-bg">
                        <p className="service-header">Service</p>
                        <div className="scroll-btn">
                            <ScrollDownBtn />
                        </div>
                    </div>
                </div>
            </section>
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
            <section className="message-section">
                <p className="message-header">Send us a Message​</p>
                <form
                    className="message-form"
                    action="https://formsubmit.co/mazaxaka.tyt@gmail.com"
                    method="POST"
                >
                    <div className="row input-row">
                        <input
                            className="message-input"
                            type="text"
                            name="Name"
                            placeholder="Enter your name .."
                        />
                        <input
                            className="message-input"
                            placeholder="*Enter your mail .."
                            name="Email"
                            type="email"
                            required
                        />
                    </div>
                    <div className="row input-row">
                        <input
                            className="message-input"
                            name="Adress"
                            type="text"
                            placeholder="Enter Adress .."
                        />
                        <input
                            className="message-input"
                            placeholder="Enter Subject .."
                            name="Subject"
                            type="text"
                        />
                    </div>
                    <textarea
                        className="message-textarea"
                        name="Message"
                        placeholder="*Enter you massage .."
                        required
                    ></textarea>
                    <button className="message-btn" type="submit">
                        <div className="row btn-content-row">
                            <p>send a letter</p>
                            <div className="btn-arrow"></div>
                        </div>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default ServicePage
