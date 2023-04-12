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

    const [scrollBtnClass, setScrollBtnClass] = useState("show")

    window.addEventListener("scroll", function () {
        // console.log(window.scrollY)
        if (window.scrollY >= 4000 || window.innerWidth < 992) {
            setScrollBtnClass("hide")
        } else {
            setScrollBtnClass("show")
        }
    })
    // window.addEventListener("resize", function () {
    //     if (window.innerWidth <= 992) {
    //         setScrollBtnClass("hide")
    //     } else {
    //         setScrollBtnClass("show")
    //     }
    // })

    // if (window.innerWidth <= 992) {
    //     setScrollBtnClass("hide")
    // } else {
    //     setScrollBtnClass("show")
    // }

    // const scrollDown = () => {
    //     if (window.scrollY + 122 < window.innerHeight) {
    //         ref1.current?.scrollIntoView({
    //             block: "nearest",
    //             behavior: "smooth",
    //         })
    //     } else if (
    //         window.scrollY + 122 <=
    //         ref2.current.getBoundingClientRect().top + window.pageYOffset
    //     ) {
    //         ref2.current?.scrollIntoView({
    //             block: "nearest",
    //             behavior: "smooth",
    //         })
    //     } else if (
    //         window.scrollY + 122 <=
    //         ref3.current.getBoundingClientRect().top + window.pageYOffset
    //     ) {
    //         ref3.current?.scrollIntoView({
    //             block: "nearest",
    //             behavior: "smooth",
    //         })
    //     } else if (
    //         window.scrollY + 122 <=
    //         ref4.current.getBoundingClientRect().top + window.pageYOffset
    //     ) {
    //         ref4.current?.scrollIntoView({
    //             block: "nearest",
    //             behavior: "smooth",
    //         })
    //     } else if (
    //         window.scrollY + 122 <=
    //         ref5.current.getBoundingClientRect().top + window.pageYOffset
    //     ) {
    //         ref5.current?.scrollIntoView({
    //             block: "nearest",
    //             behavior: "smooth",
    //         })
    //     } else if (
    //         window.scrollY + 122 <=
    //         ref6.current.getBoundingClientRect().top + window.pageYOffset
    //     ) {
    //         ref6.current?.scrollIntoView({
    //             block: "nearest",
    //             behavior: "smooth",
    //         })
    //     }
    // }
    const scrollDown = () => {
        if (ref0.current?.getBoundingClientRect().top > -530) {
            ref1.current?.scrollIntoView({
                block: "center",
                behavior: "smooth",
            })
        } else if (window.scrollY >= 750 && window.scrollY < 1408) {
            ref2.current?.scrollIntoView({
                block: "center",
                behavior: "smooth",
            })
        } else if (window.scrollY >= 1408 && window.scrollY < 1940) {
            ref3.current?.scrollIntoView({
                block: "center",
                behavior: "smooth",
            })
        } else if (window.scrollY >= 1940 && window.scrollY < 2643) {
            ref4.current?.scrollIntoView({
                block: "center",
                behavior: "smooth",
            })
        } else if (window.scrollY >= 2643 && window.scrollY < 3200) {
            ref5.current?.scrollIntoView({
                block: "center",
                behavior: "smooth",
            })
        } else if (window.scrollY >= 3200 && window.scrollY < 4148) {
            ref6.current?.scrollIntoView({
                block: "nearest",
                behavior: "smooth",
            })
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
            <div ref={ref0}>
                <IntroduceSection />
            </div>
            <div className="anker-element" ref={ref1}>
                <ProductsSection />
            </div>
            <div className="anker-element" ref={ref2}>
                <IndicatorsSection />
            </div>
            <div className="anker-element" ref={ref3}>
                <ServicesSection />
            </div>
            <div className="anker-element" ref={ref4}>
                <AboutUsSection />
            </div>
            <div className="anker-element" ref={ref5}>
                <MapSection />
            </div>
            <div className="anker-element" ref={ref6}>
                <ArticlesSection />
            </div>
            <SubscribeSection submitRef={submitRef} />
        </main>
    )
}

export default Main
