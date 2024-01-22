import React from "react"
import "./IntroduceSection.scss"
import ScrollDownBtn from "../ScrollDownBtn/ScrollDownBtn"

const IntroduceSection = ({ ref0 }) => {
    const windowHeight = window.innerHeight - 122
    const scrollDownBtnClick = () => {
        window.scrollTo({
            top: windowHeight,
            behavior: "smooth",
        })
    }

    return (
        <section className="introduce-section">
            <div className="section-anker-element" ref={ref0}></div>
            <div className="bg-fixed"></div>
            <div
                className="container introduce-wrapper"
                style={
                    window.innerWidth > 560
                        ? {
                              height: windowHeight,
                          }
                        : {
                              height: "auto",
                          }
                }
            >
                <div className="introduce-text-wrapper">
                    <div className="introduce-content">
                        <p>
                            WELCOME TO FTOREX - YOUR TRUSTED PARTNER FOR
                            RELIABLE SUPPLIES AND EFFICIENT SOLUTIONS!
                        </p>
                        <p>
                            At Ftorex, we specialize in providing top-notch coal
                            and fertilizer supplies, logistics solutions,
                            customs clearance, ocean freight services, and
                            expert consulting to various industries. With our
                            wide range of services and commitment to quality, we
                            strive to be your go-to partner for all your
                            business needs. Whether you're in agriculture,
                            energy, manufacturing, transportation, or trading,
                            Ftorex is here to cater to your requirements.
                            Contact us today and experience the Ftorex advantage
                        </p>
                    </div>
                </div>
                <div
                    className="scroll-btn-tablet"
                    onClick={() => scrollDownBtnClick()}
                >
                    <ScrollDownBtn />
                </div>
            </div>
        </section>
    )
}

export default IntroduceSection
