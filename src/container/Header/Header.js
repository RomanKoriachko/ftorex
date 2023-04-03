import React from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'

const Header = ({ submitRef }) => {
    const scrollDownBtnClick = () => {
        submitRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
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
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'active' : 'notActive'
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/service"
                                className={({ isActive }) =>
                                    isActive ? 'active' : 'notActive'
                                }
                            >
                                Service
                            </NavLink>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    isActive ? 'active' : 'notActive'
                                }
                            >
                                Products
                            </NavLink>
                            <NavLink
                                to="/articles"
                                className={({ isActive }) =>
                                    isActive ? 'active' : 'notActive'
                                }
                            >
                                Articles
                            </NavLink>
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                    isActive ? 'active' : 'notActive'
                                }
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                    <div className="header-btns">
                        <Link to="/">
                            <button
                                className="submit-btn"
                                onClick={() => scrollDownBtnClick()}
                            >
                                <div className="row btn-content-row">
                                    <p>SUBMIT</p>
                                    <div className="btn-arrow"></div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/contacts">
                            <button className="call-btn">
                                <div className="row btn-content-row">
                                    <p>CALL NOW</p>
                                    <div className="btn-arrow"></div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
