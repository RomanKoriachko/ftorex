import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row footer-row">
                    <div className="footer-item-header">
                        <p className="big-header">
                            DISCUSSION NOW TO COLLABORATE
                        </p>
                        <Link to="/contacts">
                            <button className="footer-btn">
                                <div className="row btn-content-row">
                                    <p>Write to us</p>
                                    <div className="btn-arrow"></div>
                                </div>
                            </button>
                        </Link>
                    </div>
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
                        <p className="footer-column-item">Coal supplies</p>
                        <p className="footer-column-item">
                            Fertilizer supplies
                        </p>
                        <p className="footer-column-item">Ocean freight</p>
                        <p className="footer-column-item">Customs Clearance</p>
                        <p className="footer-column-item">Consulting</p>
                    </div>
                    <div className="footer-item-text">
                        <p className="footer-column-header">Social Media</p>
                        <p className="footer-column-item">Facebook</p>
                        <p className="footer-column-item">Linkedin</p>
                    </div>
                    <div className="footer-item-text">
                        <p className="footer-column-header">Contact</p>
                        <p className="footer-contacts-item-1">+52 9473 8374</p>
                        <p className="footer-contacts-item-1">
                            sales@ftorex.ae
                        </p>
                        <p className="footer-contacts-item-2">
                            3233 W Dallas St, Houston TX 77019
                        </p>
                        <p className="footer-contacts-item-2">
                            M05-0190 Unique Adventure Business Centre,  Building
                            PR1005, Port Saeed, Dubai, UAE
                        </p>
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
