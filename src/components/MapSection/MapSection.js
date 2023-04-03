import React, { useState } from 'react'
import './MapSection.scss'

const MapSection = () => {
    const [showMapState, setShowMapState] = useState('')

    const showMap = () => {
        if (showMapState === '') {
            setShowMapState('active')
        } else {
            setShowMapState('')
        }
    }

    return (
        <section className="map-section">
            <div className={`map-wrapper ${showMapState}`}>
                <div className="map-content">
                    <div className="map-text">
                        <p className="big-header">Deposit</p>
                        <p className="big-header">map</p>
                        <p className="subtitle">
                            For athletes, high altitude produces two
                            contradictory effects on performance. For explosive
                            events (sprints up to 400 metres, long jump, triple
                            jump) the reduction in atmospheric pressure means
                            there is less resistance fro
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
