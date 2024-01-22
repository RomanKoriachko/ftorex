import React, { useEffect, useState } from "react"
import "./Header.scss"
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection"
import { Link, NavLink } from "react-router-dom"
import { Animated } from "react-animated-css"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { fetchData } from "../../redux/getDataReducer"
import {
    openCallbackForm,
    closeCallbackForm,
} from "../../redux/callbackFormReducer"
import TradingComponent from "components/TradingComponent/TradingComponent"

const Header = ({ submitRef }) => {
    const [subscribeState, setSubscribeState] = useState("hide")

    const submitBtn = () => {
        setSubscribeState("show")
        document.body.style.overflow = "hidden"
        closeBurger()
    }
    const closeSubmitForm = () => {
        setSubscribeState("hide")
        document.body.style.overflow = ""
    }

    const callbackFormState = useAppSelector((state) => state.callbackFormState)
    const dispatch = useAppDispatch()

    const callbackBtn = () => {
        dispatch(openCallbackForm())
        document.body.style.overflow = "hidden"
        closeBurger()
    }
    const closeCalbackForm = () => {
        dispatch(closeCallbackForm())
        document.body.style.overflow = ""
    }

    const closePopup = () => {
        setSubscribeState("hide")
        dispatch(closeCallbackForm())
        closeBurger()
        document.body.style.overflow = ""
    }

    // burger-menu
    const [burgerState, setBurgerState] = useState("hide-burger")

    const showBurger = () => {
        setBurgerState("show-burger")
        document.body.style.overflow = "hidden"
    }
    const closeBurger = () => {
        setBurgerState("hide-burger")
        document.body.style.overflow = ""
    }

    // get data from api

    // const dataState = useAppSelector((state) => state.dataState)

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    return (
        <>
            <header id="header" className="header">
                <TradingComponent />
                <div className={`burger-menu ${burgerState}`}>
                    <div
                        className="close-burger-img"
                        onClick={() => closeBurger()}
                    ></div>
                    <div className="burger-menu-items">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                            onClick={() => closeBurger()}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                            onClick={() => closeBurger()}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                            onClick={() => closeBurger()}
                        >
                            Service
                        </NavLink>
                        <NavLink
                            to="/articles"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                            onClick={() => closeBurger()}
                        >
                            Articles
                        </NavLink>
                        <NavLink
                            to="/contacts"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
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
                    <button className="call-btn" onClick={() => callbackBtn()}>
                        <div className="row btn-content-row">
                            <p>CALL NOW</p>
                            <div className="btn-arrow"></div>
                        </div>
                    </button>
                </div>
                <div
                    className={`subscribe-bg ${subscribeState} ${callbackFormState}`}
                    onClick={() => closePopup()}
                ></div>
                <div className={`${subscribeState}`}>
                    <Animated
                        animationIn="fadeIn"
                        isVisible={true}
                        animationInDuration={300}
                    >
                        <SubscribeSection closeSubmitForm={closeSubmitForm} />
                    </Animated>
                </div>
                <div className={`${callbackFormState}`}>
                    <Animated
                        animationIn="fadeIn"
                        isVisible={true}
                        animationInDuration={300}
                    >
                        <section className="callback-section" ref={submitRef}>
                            <div
                                className="close-popup-btn"
                                onClick={() => closeCalbackForm()}
                            ></div>
                            <div className="container">
                                <div className="row callback-row">
                                    <p className="callback-header">
                                        We will call you back
                                    </p>
                                    <div>
                                        <form
                                            action="https://formsubmit.co/sales@ftorex.ae"
                                            method="POST"
                                        >
                                            <div className="row input-phone-row">
                                                <input
                                                    className="number-input"
                                                    placeholder="Enter your phone number"
                                                    type="text"
                                                    name="number"
                                                    required
                                                />
                                                <button
                                                    className="number-btn"
                                                    type="submit"
                                                >
                                                    Send
                                                </button>
                                            </div>
                                            <p className="input-annotation">
                                                We promise not to spam you
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Animated>
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
                                        isActive ? "active" : "notActive"
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "notActive"
                                    }
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "notActive"
                                    }
                                >
                                    Service
                                </NavLink>
                                <NavLink
                                    to="/articles"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "notActive"
                                    }
                                >
                                    Articles
                                </NavLink>
                                <NavLink
                                    to="/contacts"
                                    className={({ isActive }) =>
                                        isActive ? "active" : "notActive"
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
                            <button
                                className="call-btn"
                                onClick={() => callbackBtn()}
                            >
                                <div className="row btn-content-row">
                                    <p>CALL NOW</p>
                                    <div className="btn-arrow"></div>
                                </div>
                            </button>
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
