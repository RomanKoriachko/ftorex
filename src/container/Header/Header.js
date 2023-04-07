import React, { useEffect, useState } from "react"
import "./Header.scss"
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection"
import { Link, NavLink } from "react-router-dom"
import { Animated } from "react-animated-css"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { fetchData } from "../../redux/getDataReducer"
import Marquee from "react-fast-marquee"

const Header = ({ submitRef }) => {
    const [subscribeState, setSubscribeState] = useState("hide")

    const submitBtn = () => {
        if (submitRef.current) {
            submitRef.current?.scrollIntoView({ behavior: "smooth" })
            closeBurger()
        } else {
            setSubscribeState("show")
            document.body.style.overflow = "hidden"
            closeBurger()
        }
    }
    const closeSubmitForm = () => {
        setSubscribeState("hide")
        document.body.style.overflow = ""
    }

    const [callbackFormState, setCallbackFormState] = useState("hide")
    const callbackBtn = () => {
        setCallbackFormState("show")
        document.body.style.overflow = "hidden"
        closeBurger()
    }
    const closeCalbackForm = () => {
        setCallbackFormState("hide")
        document.body.style.overflow = ""
    }

    const closePopup = () => {
        setSubscribeState("hide")
        setCallbackFormState("hide")
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

    const dataState = useAppSelector((state) => state.dataState)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData())
        // localStorage.setItem("data", JSON.stringify(dataState[0].data.rates))
    }, [])

    // if (dataState) {
    //     localStorage.setItem("data", JSON.stringify(dataState[0].data.rates))
    // }

    const raw = localStorage.getItem("data")
    let localData = {}
    if (raw) {
        localData = JSON.parse(raw)
    }

    return (
        <>
            <header id="header" className="header">
                <Marquee className="quotation" gradient={false}>
                    {dataState.length > 0 ? (
                        <div className="row">
                            <p className="quotation-item">
                                Brent Crude Oil:{" "}
                                {dataState[0].data.rates.BRENTOIL.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Cocoa:{" "}
                                {dataState[0].data.rates.COCOA.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Newcastle Coal Futures:{" "}
                                {dataState[0].data.rates.COAL.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Arabica Coffee:{" "}
                                {dataState[0].data.rates.COFFEE.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Corn: {dataState[0].data.rates.CORN.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Cotton:{" "}
                                {dataState[0].data.rates.COTTON.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Crude Palm Oil:{" "}
                                {dataState[0].data.rates.CPO.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Ethanol:{" "}
                                {dataState[0].data.rates.ETHANOL.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Lumber:{" "}
                                {dataState[0].data.rates.LUMBER.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Natural Gas:{" "}
                                {dataState[0].data.rates.NG.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Rice: {dataState[0].data.rates.RICE.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Rubber:{" "}
                                {dataState[0].data.rates.RUBBER.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Soybeans:{" "}
                                {dataState[0].data.rates.SOYBEAN.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Sugar:{" "}
                                {dataState[0].data.rates.SUGAR.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                WTI Crude Oil:{" "}
                                {dataState[0].data.rates.WTIOIL.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Wheat:{" "}
                                {dataState[0].data.rates.WHEAT.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Silver (Troy Ounce):{" "}
                                {dataState[0].data.rates.XAG.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Gold (Troy Ounce):{" "}
                                {dataState[0].data.rates.XAU.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Palladium (Troy Ounce):{" "}
                                {dataState[0].data.rates.XPD.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Platinum (Troy Ounce):{" "}
                                {dataState[0].data.rates.XPT.toFixed(5)}
                            </p>
                            <p className="quotation-item">
                                Rhodium (Troy Ounce):{" "}
                                {dataState[0].data.rates.XRH.toFixed(5)}
                            </p>
                        </div>
                    ) : undefined}
                </Marquee>
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
                            to="/service"
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
                                    to="/service"
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
