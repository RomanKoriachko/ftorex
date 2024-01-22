import React, { useState } from "react"
import "./Footer.scss"
import MessageForm from "../../components/MessageForm/MessageForm"
import { Link } from "react-router-dom"
import { Animated } from "react-animated-css"

const Footer = ({ messageRef }) => {
    const [messageState, setMessageState] = useState("hide")

    const writeToUsBtn = () => {
        setMessageState("show")
        document.body.style.overflow = "hidden"
    }
    const closeWriteToUsForm = () => {
        setMessageState("hide")
        document.body.style.overflow = ""
    }

    return (
        <footer className="footer">
            <div
                className={`subscribe-bg ${messageState}`}
                onClick={() => closeWriteToUsForm()}
            ></div>
            <div className={`container ${messageState}`}>
                <Animated
                    animationIn="fadeIn"
                    isVisible={true}
                    animationInDuration={300}
                >
                    <MessageForm closeWriteToUsForm={closeWriteToUsForm} />
                </Animated>
            </div>
            <div className="container">
                <div className="row footer-row">
                    <div className="footer-item-header">
                        <p className="big-header">
                            DISCUSSION NOW TO COLLABORATE
                        </p>
                        <button
                            className="footer-btn"
                            onClick={() => writeToUsBtn()}
                        >
                            <div className="row btn-content-row">
                                <p>Write to us</p>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </div>
                    <div className="footer-links-row">
                        <div className="footer-item-text">
                            <div className="footer-column-header">Company</div>
                            <div className="footer-column-item">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="footer-column-item">
                                <Link to="/products">Products</Link>
                            </div>
                            <div className="footer-column-item">
                                <Link to="/services">Service</Link>
                            </div>
                            <div className="footer-column-item">
                                <Link to="/articles">Articles</Link>
                            </div>
                            <div className="footer-column-item">
                                <Link to="/contacts">Contact Us</Link>
                            </div>
                        </div>
                        <div className="footer-item-text">
                            <div className="footer-column-header">Service</div>
                            <div className="footer-column-item">
                                <Link to="/services/coal_supplies">
                                    Coal supplies
                                </Link>
                            </div>
                            <div className="footer-column-item">
                                <Link to="/services/fertilizer_supplies">
                                    Fertilizer supplies
                                </Link>
                            </div>
                            <div className="footer-column-item">
                                <Link to="/services/ocean_freight">
                                    Ocean freight
                                </Link>
                            </div>
                            <div className="footer-column-item">
                                <Link to="/services/customs_clearance">
                                    Customs Clearance
                                </Link>
                            </div>
                            <div className="footer-column-item">
                                <Link to="/services/consulting">
                                    Consulting
                                </Link>
                            </div>
                        </div>
                        <div className="footer-item-text">
                            <div className="footer-column-header">
                                Social Media
                            </div>
                            <div className="footer-column-item">
                                <a
                                    href="https://www.linkedin.com/company/ftorex/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Linkedin
                                </a>
                                <a
                                    href="https://twitter.com/ftorex_tm"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Twitter
                                </a>
                                <p className="press-links-title">
                                    press about us
                                </p>
                                <a
                                    href="https://www.khaleejtimes.com/kt-network/fueling-the-future-how-anthracite-is-taking-over-the-energy-industry"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="press-link press-link-1"></div>
                                </a>
                                <a
                                    href="https://www.benzinga.com/23/07/33137165/chinas-rising-coal-consumption-consequences-for-global-markets"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="press-link press-link-2"></div>
                                </a>
                                <a
                                    href="https://www.forexlive.com/Education/coal-goes-digital-harnessing-online-technologies-to-streamline-trading-20230613/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="press-link press-link-3"></div>
                                </a>
                                <a
                                    href="https://www.nasdaq.com/articles/ais-potential-role-in-the-coal-industry"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="press-link press-link-4"></div>
                                </a>
                            </div>
                        </div>
                        <div className="footer-item-text">
                            <p className="footer-column-header">Contact</p>
                            <p className="footer-contacts-item-1">
                                +1 (786) 707-06-06
                            </p>
                            <div className="adress-wrapper row">
                                <div className="flag us-flag"></div>
                                <div>
                                    <p className="footer-contacts-item-2">
                                        US OFFICE:
                                    </p>
                                    <div className="footer-contacts-item-2">
                                        <p>
                                            1916 W Gray St, #318, Houston, TX
                                            USA 77019
                                        </p>
                                        <p>+1 (786) 707-0606</p>
                                        <p>sales@ftorex.us</p>
                                        <p className="bold-text">
                                            www.ftorex.us
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="adress-wrapper row">
                                <div className="flag uae-flag"></div>
                                <div>
                                    <p className="footer-contacts-item-2">
                                        UAE OFFICE:
                                    </p>
                                    <div className="footer-contacts-item-2">
                                        <p>
                                            M05-0190 Unique Adventure Business
                                            Centre, Building PR1005, Port Saeed,
                                            Dubai, UAE
                                        </p>
                                        <p>+971 58 304 4155</p>
                                        <p>sales@ftorex.ae</p>
                                        <p className="bold-text">
                                            www.ftorex.ae
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright">
                    FTOREX © 2015-2024, All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
