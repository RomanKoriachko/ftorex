import React, { useState } from 'react'
import './Header.scss'
import SubscribeSection from '../../components/SubscribeSection/SubscribeSection'
import { Link, NavLink } from 'react-router-dom'

const Header = ({ submitRef }) => {
    const [subscribeState, setSubscribeState] = useState('hide')

    const submitBtn = () => {
        if (submitRef.current) {
            submitRef.current?.scrollIntoView({ behavior: 'smooth' })
            closeBurger()
        } else {
            setSubscribeState('show')
            document.body.style.overflow = 'hidden'
            closeBurger()
        }
    }
    const closeSubmitForm = () => {
        setSubscribeState('hide')
        document.body.style.overflow = ''
    }

    // burger-menu
    const [burgerState, setBurgerState] = useState('hide-burger')

    const showBurger = () => {
        setBurgerState('show-burger')
        document.body.style.overflow = 'hidden'
    }
    const closeBurger = () => {
        setBurgerState('hide-burger')
        document.body.style.overflow = ''
    }

    return (
        <>
            <header id="header" className="header">
                <div className="quotation"></div>
                <div className={`burger-menu ${burgerState}`}>
                    <div
                        className="close-burger-img"
                        onClick={() => closeBurger()}
                    ></div>
                    <div className="burger-menu-items">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'active' : 'notActive'
                            }
                            onClick={() => closeBurger()}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? 'active' : 'notActive'
                            }
                            onClick={() => closeBurger()}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/service"
                            className={({ isActive }) =>
                                isActive ? 'active' : 'notActive'
                            }
                            onClick={() => closeBurger()}
                        >
                            Service
                        </NavLink>
                        <NavLink
                            to="/articles"
                            className={({ isActive }) =>
                                isActive ? 'active' : 'notActive'
                            }
                            onClick={() => closeBurger()}
                        >
                            Articles
                        </NavLink>
                        <NavLink
                            to="/contacts"
                            className={({ isActive }) =>
                                isActive ? 'active' : 'notActive'
                            }
                            onClick={() => closeBurger()}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                    <button className="submit-btn" onClick={() => submitBtn()}>
                        <div className="row btn-content-row">
                            <p>SUBMIT</p>
                            <div className="btn-arrow"></div>
                        </div>
                    </button>
                    <Link
                        to="/contacts"
                        className="contacts-btn"
                        onClick={() => closeBurger()}
                    >
                        <button className="call-btn">
                            <div className="row btn-content-row">
                                <p>CALL NOW</p>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </Link>
                </div>
                <div
                    className={`subscribe-bg ${subscribeState}`}
                    onClick={() => closeSubmitForm()}
                ></div>
                <div className={`${subscribeState}`}>
                    <SubscribeSection />
                </div>
                <div className="container">
                    <div className="row header-row">
                        <div className="row logo-and-links">
                            <Link to="/">
                                <img
                                    className="header-logo"
                                    src="/images/logo.svg"
                                    alt=""
                                />
                            </Link>
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
                                    to="/products"
                                    className={({ isActive }) =>
                                        isActive ? 'active' : 'notActive'
                                    }
                                >
                                    Products
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
                            <button
                                className="submit-btn"
                                onClick={() => submitBtn()}
                            >
                                <div className="row btn-content-row">
                                    <p>SUBMIT</p>
                                    <div className="btn-arrow"></div>
                                </div>
                            </button>
                            <Link to="/contacts">
                                <button className="call-btn">
                                    <div className="row btn-content-row">
                                        <p>CALL NOW</p>
                                        <div className="btn-arrow"></div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div
                            className="burger-menu-btn"
                            onClick={() => showBurger()}
                        ></div>
                    </div>
                </div>
            </header>
            <div className="header-overlay"></div>
        </>
    )
}

export default Header
