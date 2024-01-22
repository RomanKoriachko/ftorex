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
import { Helmet } from "react-helmet-async"
import PetroleumSection from "components/PetroleumSection/PetroleumSection"
import PressSection from "components/PressSection/PressSection"

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

    const refWrapper1 = useRef(null)
    const refWrapper2 = useRef(null)
    const refWrapper3 = useRef(null)
    const refWrapper4 = useRef(null)
    const refWrapper5 = useRef(null)
    const refWrapper6 = useRef(null)
    const refWrapper7 = useRef(null)
    const refWrapper8 = useRef(null)
    const refWrapper9 = useRef(null)

    const [scrollBtnClass, setScrollBtnClass] = useState("show")

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 5200 || window.innerWidth < 992) {
            setScrollBtnClass("hide")
        } else {
            setScrollBtnClass("show")
        }
    })

    const scrollDown = () => {
        if (
            window.scrollY <
            refWrapper1.current?.getBoundingClientRect().height - 50
        ) {
            window.scrollTo({
                top: window.innerHeight - 122,
                behavior: "smooth",
            })
            console.log("ref0")
        } else if (
            window.scrollY <=
            refWrapper1.current?.getBoundingClientRect().height +
                refWrapper2.current?.getBoundingClientRect().height -
                1
        ) {
            ref2.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            console.log("ref1")
        } else if (
            window.scrollY <=
            refWrapper1.current?.getBoundingClientRect().height +
                refWrapper2.current?.getBoundingClientRect().height +
                refWrapper3.current?.getBoundingClientRect().height -
                1
        ) {
            ref3.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            console.log("ref2")
        } else if (
            window.scrollY <=
            refWrapper1.current?.getBoundingClientRect().height +
                refWrapper2.current?.getBoundingClientRect().height +
                refWrapper3.current?.getBoundingClientRect().height +
                refWrapper4.current?.getBoundingClientRect().height -
                1
        ) {
            ref4.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            console.log("ref3")
        } else if (
            window.scrollY <=
            refWrapper1.current?.getBoundingClientRect().height +
                refWrapper2.current?.getBoundingClientRect().height +
                refWrapper3.current?.getBoundingClientRect().height +
                refWrapper4.current?.getBoundingClientRect().height +
                refWrapper5.current?.getBoundingClientRect().height -
                1
        ) {
            ref5.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            console.log("ref4")
        } else if (
            window.scrollY <=
            refWrapper1.current?.getBoundingClientRect().height +
                refWrapper2.current?.getBoundingClientRect().height +
                refWrapper3.current?.getBoundingClientRect().height +
                refWrapper4.current?.getBoundingClientRect().height +
                refWrapper5.current?.getBoundingClientRect().height +
                refWrapper6.current?.getBoundingClientRect().height -
                1
        ) {
            ref6.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            console.log("ref5")
        } else if (
            window.scrollY <=
            refWrapper1.current?.getBoundingClientRect().height +
                refWrapper2.current?.getBoundingClientRect().height +
                refWrapper3.current?.getBoundingClientRect().height +
                refWrapper4.current?.getBoundingClientRect().height +
                refWrapper5.current?.getBoundingClientRect().height +
                refWrapper6.current?.getBoundingClientRect().height +
                refWrapper7.current?.getBoundingClientRect().height -
                1
        ) {
            ref7.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            console.log("ref6")
        } else if (
            window.scrollY <=
            refWrapper1.current?.getBoundingClientRect().height +
                refWrapper2.current?.getBoundingClientRect().height +
                refWrapper3.current?.getBoundingClientRect().height +
                refWrapper4.current?.getBoundingClientRect().height +
                refWrapper5.current?.getBoundingClientRect().height +
                refWrapper6.current?.getBoundingClientRect().height +
                refWrapper7.current?.getBoundingClientRect().height +
                refWrapper8.current?.getBoundingClientRect().height -
                1
        ) {
            ref8.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            console.log("ref7")
        } else if (
            window.scrollY <=
            refWrapper1.current?.getBoundingClientRect().height +
                refWrapper2.current?.getBoundingClientRect().height +
                refWrapper3.current?.getBoundingClientRect().height +
                refWrapper4.current?.getBoundingClientRect().height +
                refWrapper5.current?.getBoundingClientRect().height +
                refWrapper6.current?.getBoundingClientRect().height +
                refWrapper7.current?.getBoundingClientRect().height +
                refWrapper8.current?.getBoundingClientRect().height +
                refWrapper9.current?.getBoundingClientRect().height -
                1
        ) {
            ref9.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
            })
            console.log("ref8")
        } else {
            console.log("else")
        }
    }

    return (
        <main className="main">
            <Helmet>
                <title>FTOREX | HOME</title>
                <meta
                    name="description"
                    content="FTOREX International trading company focused in procurement of coking, thermal, anthracite, PCI coals, as well as fertilizer worldwide. The major goal is to provide the price directly from manufacturers."
                />
            </Helmet>
            <div
                onClick={scrollDown}
                className={`scroll-btn-fixed ${scrollBtnClass}`}
            >
                <ScrollDownBtn />
            </div>
            <div ref={refWrapper1}>
                <IntroduceSection ref0={ref0} />
            </div>
            <div className="anker-element" ref={refWrapper2}>
                <ProductsSection ref1={ref1} />
            </div>
            <div className="anker-element" ref={refWrapper3}>
                <PetroleumSection ref2={ref2} />
            </div>
            <div className="anker-element" ref={refWrapper4}>
                <IndicatorsSection ref3={ref3} />
            </div>
            <div className="anker-element" ref={refWrapper5}>
                <ServicesSection ref4={ref4} />
                <SubscribeSection submitRef={submitRef} />
            </div>
            <div className="anker-element" ref={refWrapper6}>
                <AboutUsSection ref5={ref5} />
            </div>
            <div className="anker-element" ref={refWrapper7}>
                <PressSection ref6={ref6} />
            </div>
            <div className="anker-element bg-color" ref={refWrapper8}>
                <MapSection
                    ref7={ref7}
                    map="https://greeninfo-network.github.io/mine-tracker/"
                />
            </div>
            <div className="anker-element" ref={refWrapper9}>
                <ArticlesSection ref8={ref8} />
            </div>
        </main>
    )
}

export default Main
