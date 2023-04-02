import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="quotation"></div>
            <div className="container">
                <div className="row header-row">
                    <div className="row">
                        <img
                            className="header-logo"
                            src="images/logo.png"
                            alt=""
                        />
                        <div className="header-menu row">
                            <div>Home</div>
                            <div>Service</div>
                            <div>Products</div>
                            <div>Articles</div>
                            <div>Contact Us</div>
                        </div>
                    </div>
                    <div className="header-btns">
                        <button className="submit-btn">
                            <div className="row btn-content-row">
                                <p>SUBMIT</p>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                        <button className="call-btn">
                            <div className="row btn-content-row">
                                <p>CALL NOW</p>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
