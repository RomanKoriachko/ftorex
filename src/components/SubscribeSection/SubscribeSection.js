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
                            <form
                                action="https://formsubmit.co/mazaxaka.tyt@gmail.com"
                                method="POST"
                            >
                                <input
                                    className="email-input"
                                    placeholder="Enter your email"
                                    type="email"
                                    name="email"
                                    required
                                />
                                <button className="email-btn" type="submit">
                                    Submit
                                </button>
                            </form>
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
