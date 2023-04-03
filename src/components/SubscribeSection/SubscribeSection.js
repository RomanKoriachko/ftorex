import React from 'react'
import './SubscribeSection.scss'

const SubscribeSection = () => {
    return (
        <section className="subscribe-section">
            <div className="container">
                <div className="row subscribe-row">
                    <p className="subscribe-header">
                        We encourage you to subscribe to us. We will send you
                        only up-to-date quotes
                    </p>
                    <div>
                        <div className="row input-email-row">
                            <input
                                className="email-input"
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button className="email-btn" id="email">
                                Submit
                            </button>
                        </div>
                        <p className="input-annotation">
                            We promise not to spam you
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection
