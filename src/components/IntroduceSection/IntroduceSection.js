import React from "react"
import "./IntroduceSection.scss"
import ScrollDownBtn from "../ScrollDownBtn/ScrollDownBtn"

const IntroduceSection = () => {
    const windowHeight = window.innerHeight - 122
    const scrollDownBtnClick = () => {
        window.scrollTo({
            top: windowHeight,
            behavior: "smooth",
        })
    }

    return (
        <section className="introduce-section">
            <div
                className="container introduce-wrapper"
                style={{
                    height: windowHeight,
                }}
            >
                <div className="introduce-text-wrapper">
                    <div className="introduce-content">
                        <p>Achieve a profitable business with us</p>
                        <p>
                            We are proffesional team, specialized in providing
                            procurement and supply of minerals, materials,
                            equipment and specialized services for all kinds of
                            manufacturing and commercial companies worldwide
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
