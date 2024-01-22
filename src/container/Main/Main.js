import React, { useRef, useState } from "react"
import "./Main.scss"
import IndicatorsSection from "../../components/IndicatorsSection/IndicatorsSection"
import IntroduceSection from "../../components/IntroduceSection/IntroduceSection"
import ProductsSection from "../../components/ProductsSection/ProductsSection"
import ServicesSection from "../../components/ServicesSection/ServicesSection"
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection"
import MapSection from "../../components/MapSection/MapSection"
import ArticlesSection from "../../components/ArticlesSection/ArticlesSection"
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection"
import ScrollDownBtn from "../../components/ScrollDownBtn/ScrollDownBtn"

const Main = ({ submitRef }) => {
    const ref0 = useRef(null)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)

    const ref7 = useRef(null)
    const ref8 = useRef(null)
    const ref9 = useRef(null)
    const ref10 = useRef(null)
    const ref11 = useRef(null)
    const ref12 = useRef(null)

    const [scrollBtnClass, setScrollBtnClass] = useState("show")

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 3800 || window.innerWidth < 992) {
            setScrollBtnClass("hide")
        } else {
            setScrollBtnClass("show")
        }
    })

    const scrollDown = () => {
        if (
            window.scrollY <
            ref7.current?.getBoundingClientRect().height - 50
        ) {
            window.scrollTo({
                top: window.innerHeight - 122,
                behavior: "smooth",
            })
            // console.log("ref0")
        } else if (
            window.scrollY <=
            ref7.current?.getBoundingClientRect().height +
                ref8.current?.getBoundingClientRect().height -
                1
        ) {
            ref2.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            // console.log("ref1")
        } else if (
            window.scrollY <=
            ref7.current?.getBoundingClientRect().height +
                ref8.current?.getBoundingClientRect().height +
                ref9.current?.getBoundingClientRect().height -
                1
        ) {
            ref3.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            // console.log("ref2")
        } else if (
            window.scrollY <=
            ref7.current?.getBoundingClientRect().height +
                ref8.current?.getBoundingClientRect().height +
                ref9.current?.getBoundingClientRect().height +
                ref10.current?.getBoundingClientRect().height -
                1
        ) {
            ref4.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            // console.log("ref3")
        } else if (
            window.scrollY <=
            ref7.current?.getBoundingClientRect().height +
                ref8.current?.getBoundingClientRect().height +
                ref9.current?.getBoundingClientRect().height +
                ref10.current?.getBoundingClientRect().height +
                ref11.current?.getBoundingClientRect().height -
                1
        ) {
            ref5.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            // console.log("ref4")
        } else if (
            window.scrollY <=
            ref7.current?.getBoundingClientRect().height +
                ref8.current?.getBoundingClientRect().height +
                ref9.current?.getBoundingClientRect().height +
                ref10.current?.getBoundingClientRect().height +
                ref11.current?.getBoundingClientRect().height +
                ref12.current?.getBoundingClientRect().height -
                1
        ) {
            ref6.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            // console.log("ref5")
        }
    }

    return (
        <main className="main">
            <div
                onClick={scrollDown}
                className={`scroll-btn-fixed ${scrollBtnClass}`}
            >
                <ScrollDownBtn />
            </div>
            <div ref={ref7}>
                <IntroduceSection ref0={ref0} />
            </div>
            <div className="anker-element" ref={ref8}>
                <ProductsSection ref1={ref1} />
            </div>
            <div className="anker-element" ref={ref9}>
                <IndicatorsSection ref2={ref2} />
            </div>
            <div className="anker-element" ref={ref10}>
                <ServicesSection ref3={ref3} />
                <SubscribeSection submitRef={submitRef} />
            </div>
            <div className="anker-element" ref={ref11}>
                <AboutUsSection ref4={ref4} />
            </div>
            <div className="anker-element bg-color" ref={ref12}>
                <MapSection ref5={ref5} />
            </div>
            <div className="anker-element">
                <ArticlesSection ref6={ref6} />
            </div>
        </main>
    )
}

export default Main
