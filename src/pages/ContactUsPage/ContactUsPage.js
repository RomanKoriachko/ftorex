import React from "react"
import "./ContactUsPage.scss"
import PageHeader from "../../components/PageHeader/PageHeader"
import MessageForm from "../../components/MessageForm/MessageForm"
import { AnimationOnScroll } from "react-animation-on-scroll"
import { Helmet } from "react-helmet"

const ContactUsPage = ({ messageRef }) => {
    return (
        <div className="contacts-page">
            <Helmet>
                <title>Contact Us</title>
                <meta
                    name="description"
                    content="FTOREX International trading company focused in procurement of coking, thermal, anthracite, PCI coals, as well as fertilizer worldwide. The major goal is to provide the price directly from manufacturers."
                />
            </Helmet>
            <PageHeader name={"Contact Us"} />
            <section className="contacts-section">
                <div className="container">
                    <div className="row contacts-row contact-row-desktop">
                        <div className="contact-item contact-item-1">
                            <AnimationOnScroll
                                animateIn="animate__backInLeft"
                                duration={1.5}
                                animateOnce={true}
                            >
                                <div className="contact-content">
                                    <div className="contact-img"></div>
                                    <p className="contact-item-header">
                                        Call Us
                                    </p>
                                    <div className="row flag-and-number">
                                        <div className="usa-flag"></div>
                                        <p className="contact-item-text">
                                            +1 (786) 707-06-06
                                        </p>
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="contact-item contact-item-2">
                            <AnimationOnScroll
                                animateIn="animate__backInUp"
                                duration={1.5}
                                animateOnce={true}
                            >
                                <div className="contact-content">
                                    <div className="contact-img"></div>
                                    <p className="contact-item-header">
                                        We are Here{" "}
                                    </p>
                                    <p className="contact-item-text">
                                        <span>UAE:</span> Building PR1005, Port
                                        Saeed, Dubai
                                    </p>
                                    <p className="contact-item-text">
                                        <span>USA:</span> 1916 W Gray St, #318,
                                        Houston, TX USA 77019
                                    </p>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="contact-item contact-item-3">
                            <AnimationOnScroll
                                animateIn="animate__backInRight"
                                duration={1.5}
                                animateOnce={true}
                            >
                                <div className="contact-content">
                                    <div className="contact-img"></div>
                                    <p className="contact-item-header">
                                        Write Us Anytime
                                    </p>
                                    <p className="contact-item-text">
                                        Sales department: sales@ftorex.ae
                                    </p>
                                    <p
                                        className="contact-item-text"
                                        ref={messageRef}
                                    >
                                        Main office: office@ftorex.ae 
                                    </p>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="row contacts-row contact-row-mobile">
                        <div className="contact-item contact-item-1">
                            <AnimationOnScroll
                                animateIn="animate__backInUp"
                                duration={1}
                                animateOnce={true}
                            >
                                <div className="contact-content">
                                    <div className="contact-img"></div>
                                    <p className="contact-item-header">
                                        Call Us
                                    </p>
                                    <div className="row flag-and-number">
                                        <div className="usa-flag"></div>
                                        <p className="contact-item-text">
                                            +1 (786) 707-06-06
                                        </p>
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="contact-item contact-item-2">
                            <AnimationOnScroll
                                animateIn="animate__backInUp"
                                duration={1}
                                animateOnce={true}
                            >
                                <div className="contact-content">
                                    <div className="contact-img"></div>
                                    <p className="contact-item-header">
                                        We are Here{" "}
                                    </p>
                                    <p className="contact-item-text">
                                        <span>UAE:</span> Building PR1005, Port
                                        Saeed, Dubai
                                    </p>
                                    <p className="contact-item-text">
                                        <span>USA:</span> 3233 W Dallas St,
                                        Houston TX 77019
                                    </p>
                                </div>
                            </AnimationOnScroll>
                        </div>
                        <div className="contact-item contact-item-3">
                            <AnimationOnScroll
                                animateIn="animate__backInUp"
                                duration={1}
                                animateOnce={true}
                            >
                                <div className="contact-content">
                                    <div className="contact-img"></div>
                                    <p className="contact-item-header">
                                        Write Us Anytime
                                    </p>
                                    <p className="contact-item-text">
                                        Sales department: sales@ftorex.ae
                                    </p>
                                    <p
                                        className="contact-item-text"
                                        ref={messageRef}
                                    >
                                        Main office: office@ftorex.ae 
                                    </p>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </div>
            </section>
            <MessageForm />
        </div>
    )
}

export default ContactUsPage
