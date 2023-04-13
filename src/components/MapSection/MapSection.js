import React, { useState } from "react"
import "./MapSection.scss"

const MapSection = ({ ref5 }) => {
    const [showMapState, setShowMapState] = useState("")

    const showMap = () => {
        if (showMapState === "" && window.innerWidth > 992) {
            setShowMapState("active")
        } else if (showMapState === "" && window.innerWidth <= 992) {
            setShowMapState("tablet-active")
        } else {
            setShowMapState("")
        }
    }

    return (
        <section className="map-section">
            <div className="section-anker-element" ref={ref5}></div>
            <div className={`map-wrapper ${showMapState}`}>
                <div className="map-content">
                    <div className="map-text">
                        <div className="tablet-row">
                            <p className="big-header">Deposit</p>
                            <p className="big-header">map</p>
                        </div>
                        <p className="subtitle">
                            Welcome to Deposit Map section! Here, you can
                            explore all the deposits of our planet. Every
                            deposit is marked, making it easier for you to find
                            the resources you need. Whether you're a researcher,
                            a miner, or an investor, this map is a valuable tool
                            for anyone interested in understanding the Earth's
                            resources. Start exploring today!
                        </p>
                        <button className="map-btn" onClick={() => showMap()}>
                            <div className="row btn-content-row">
                                <p>click and explore</p>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="map-overlap">
                    <iframe
                        className="map"
                        src="https://greeninfo-network.github.io/mine-tracker/"
                        title="https://greeninfo-network.github.io/mine-tracker/"
                        frameborder="0"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default MapSection
