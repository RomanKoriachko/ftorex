import React, { useState } from 'react'
import './Footer.scss'
import MessageForm from '../../components/MessageForm/MessageForm'
import { Link } from 'react-router-dom'

const Footer = ({ messageRef }) => {
    const [messageState, setMessageState] = useState('hide')

    const writeToUsBtn = () => {
        if (messageRef.current) {
            messageRef.current?.scrollIntoView({ behavior: 'smooth' })
        } else {
            setMessageState('show')
            document.body.style.overflow = 'hidden'
        }
    }
    const closeWriteToUsForm = () => {
        setMessageState('hide')
        document.body.style.overflow = ''
    }

    return (
        <footer className="footer">
            <div
                className={`subscribe-bg ${messageState}`}
                onClick={() => closeWriteToUsForm()}
            ></div>
            <div className={`container ${messageState}`}>
                <MessageForm />
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
                    <div className="row footer-links-row">
                        <div className="footer-item-text">
                            <p className="footer-column-header">Company</p>
                            <p className="footer-column-item">
                                <Link to="/">Home</Link>
                            </p>
                            <p className="footer-column-item">
                                <Link to="/products">Products</Link>
                            </p>
                            <p className="footer-column-item">
                                <Link to="/service">Service</Link>
                            </p>
                            <p className="footer-column-item">
                                <Link to="/articles">Articles</Link>
                            </p>
                            <p className="footer-column-item">
                                <Link to="/contacts">Contact Us</Link>
                            </p>
                        </div>
                        <div className="footer-item-text">
                            <p className="footer-column-header">Service</p>
                            <p className="footer-column-item">
                                <Link to="/service">Coal supplies</Link>
                            </p>
                            <p className="footer-column-item">
                                <Link to="/service">Fertilizer supplies</Link>
                            </p>
                            <p className="footer-column-item">
                                <Link to="/service">Ocean freight</Link>
                            </p>
                            <p className="footer-column-item">
                                <Link to="/service">Customs Clearance</Link>
                            </p>
                            <p className="footer-column-item">
                                <Link to="/service">Consulting</Link>
                            </p>
                        </div>
                        <div className="footer-item-text">
                            <p className="footer-column-header">Social Media</p>
                            <p className="footer-column-item">
                                <a href="https://www.linkedin.com/in/ftorex-tm-3339b7239/">
                                    Linkedin
                                </a>
                            </p>
                        </div>
                        <div className="footer-item-text">
                            <p className="footer-column-header">Contact</p>
                            <p className="footer-contacts-item-1">
                                +1 (786) 707-06-06
                            </p>
                            <p className="footer-contacts-item-1">
                                sales@ftorex.ae
                            </p>
                            <p className="footer-contacts-item-2">
                                3233 W Dallas St, Houston TX 77019
                            </p>
                            <p className="footer-contacts-item-2">
                                M05-0190 Unique Adventure Business Centre, 
                                Building PR1005, Port Saeed, Dubai, UAE
                            </p>
                        </div>
                    </div>
                </div>
                <p className="copyright">
                    FTOREX © 2015-2023, All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
