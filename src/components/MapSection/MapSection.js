import React, { useState } from "react"
import "./MapSection.scss"

const MapSection = ({ ref7 }) => {
    const [showMapState, setShowMapState] = useState("not-active")

    const showMap = () => {
        if (showMapState === "not-active" && window.innerWidth > 992) {
            setShowMapState("active")
        } else {
            setShowMapState("not-active")
        }
    }

    const closeMap = () => {
        setShowMapState("not-active")
    }

    const [tabletMapState, setTabletMapState] = useState("hide-map")

    const showTabletMap = () => {
        if (tabletMapState === "hide-map") {
            setTabletMapState("show-map")
        } else {
            setTabletMapState("hide-map")
        }
    }

    const closeTabletMap = () => {
        setTabletMapState("hide-map")
    }

    return (
        <section className="map-section">
            <div className="section-anker-element" ref={ref7}></div>
            <button
                className={`close-map-btn ${showMapState}`}
                onClick={() => closeMap()}
            >
                <div className="row btn-content-row">
                    <p>show less</p>
                    <div className="btn-arrow"></div>
                </div>
            </button>
            <button
                className={`tablet-close-map-btn ${tabletMapState}`}
                onClick={() => closeTabletMap()}
            >
                <div className="row btn-content-row">
                    <p>show less</p>
                    <div className="btn-arrow"></div>
                </div>
            </button>
            <div className={`desktop-map-wrapper map-wrapper ${showMapState}`}>
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
            <div className={`tablet-map-wrapper map-wrapper ${tabletMapState}`}>
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
                        <button
                            className="map-btn"
                            onClick={() => showTabletMap()}
                        >
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
