import React from 'react'
import './ContactUsPage.scss'
import PageHeader from '../../components/PageHeader/PageHeader'
import MessageForm from '../../components/MessageForm/MessageForm'
import { Animated } from 'react-animated-css'

const ContactUsPage = ({ messageRef }) => {
    return (
        <div className="contacts-page">
            <PageHeader name={'Contact Us'} />
            <section className="contacts-section">
                <div className="container">
                    <div className="row contacts-row">
                        <div className="contact-item contact-item-1">
                            <Animated
                                animationIn="fadeInLeft"
                                isVisible={true}
                                animationInDuration={2000}
                            >
                                <div className="contact-content">
                                    <div className="contact-img"></div>
                                    <p className="contact-item-header">
                                        Call Us
                                    </p>
                                    <p className="contact-item-text">
                                        +1 (786) 707-06-06
                                    </p>
                                    <p className="contact-item-text">
                                        +7 (967) 388-48-88
                                    </p>
                                </div>
                            </Animated>
                        </div>
                        <div className="contact-item contact-item-2">
                            <Animated
                                animationIn="fadeInUp"
                                isVisible={true}
                                animationInDuration={2000}
                            >
                                <div className="contact-content">
                                    <div className="contact-img"></div>
                                    <p className="contact-item-header">
                                        We are Here{' '}
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
                            </Animated>
                        </div>
                        <div className="contact-item contact-item-3">
                            <Animated
                                animationIn="fadeInRight"
                                isVisible={true}
                                animationInDuration={2000}
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
                            </Animated>
                        </div>
                    </div>
                </div>
            </section>
            <MessageForm />
        </div>
    )
}

export default ContactUsPage
