import React from "react"
import "./PressSection.scss"
import PressArticle from "./PressArticle"
import Marquee from "react-fast-marquee"

const PressSection = ({ ref6 }) => {
    return (
        <section className="press-section">
            <div className="section-anker-element" ref={ref6}></div>
            <div className="container">
                <p className="press-section-title">the press says about us</p>
                <div className="row press-section-row">
                    <a
                        href="https://www.khaleejtimes.com/kt-network/fueling-the-future-how-anthracite-is-taking-over-the-energy-industry"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="press-row-item press-row-item-1"></div>
                    </a>
                    <a
                        href="https://www.benzinga.com/23/07/33137165/chinas-rising-coal-consumption-consequences-for-global-markets"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="press-row-item press-row-item-2"></div>
                    </a>
                    <a
                        href="https://www.forexlive.com/Education/coal-goes-digital-harnessing-online-technologies-to-streamline-trading-20230613/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="press-row-item press-row-item-3"></div>
                    </a>
                    <a
                        href="https://www.nasdaq.com/articles/ais-potential-role-in-the-coal-industry"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="press-row-item press-row-item-4"></div>
                    </a>
                </div>
            </div>
            <div className="press-articles-wrapper">
                <Marquee
                    pauseOnHover={true}
                    speed={20}
                    gradient={false}
                    autoFill={true}
                >
                    <a
                        href="https://www.khaleejtimes.com/kt-network/fueling-the-future-how-anthracite-is-taking-over-the-energy-industry"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <PressArticle
                            image="press-article-img-1.png"
                            title="Fuelling the future: How anthracite is taking over the energy industry"
                            subtitle="Despite a swelling focus on green energy, global coal use continues to grow."
                        />
                    </a>
                    <a
                        href="https://www.benzinga.com/23/07/33137165/chinas-rising-coal-consumption-consequences-for-global-markets"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <PressArticle
                            image="press-article-img-2.png"
                            title="China's Rising Coal Consumption: Consequences For Global Markets"
                            subtitle="If there is a single country that greatly influences the global coal industry, it’s China."
                        />
                    </a>
                    <a
                        href="https://www.benzinga.com/author/adam-kokorkhoev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <PressArticle
                            image="press-article-img-3.png"
                            title="Adam Kokorkhoev is a co-founder of FTOREX"
                            subtitle="A company that specializes in commercial brokerage, and commodities supplies"
                        />
                    </a>
                    <a
                        href="https://www.nasdaq.com/articles/ais-potential-role-in-the-coal-industry"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <PressArticle
                            image="press-article-img-4.png"
                            title="AI's Potential Role in the Coal Industry"
                            subtitle="This thought-provoking interview, we delve into the intriguing realm of artificial"
                        />
                    </a>
                    <a
                        href="https://www.forexlive.com/Education/coal-goes-digital-harnessing-online-technologies-to-streamline-trading-20230613/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <PressArticle
                            image="press-article-img-5.png"
                            title="Coal Goes Digital: Harnessing Online Technologies to Streamline Trading"
                            subtitle="Over the last 25 years, the ten largest mining companies have seen a cumulative growth in productivity of 1%"
                        />
                    </a>
                </Marquee>
            </div>
        </section>
    )
}

export default PressSection
