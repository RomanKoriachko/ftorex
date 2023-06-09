import React from "react"
import "./SubscribeSection.scss"

const SubscribeSection = ({ submitRef, closeSubmitForm }) => {
    return (
        <section className="subscribe-section" ref={submitRef}>
            <div
                className="close-popup-btn"
                onClick={() => closeSubmitForm()}
            ></div>
            <div className="container">
                <div className="row subscribe-row">
                    <p className="subscribe-header">
                        We encourage you to subscribe to us. We will send you
                        only up-to-date quotes
                    </p>
                    <div>
                        <form
                            action="https://formsubmit.co/sales@ftorex.ae"
                            method="POST"
                        >
                            <div className="row input-email-row">
                                <div>
                                    <input
                                        className="email-input"
                                        placeholder="Enter your email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                    <p className="input-annotation">
                                        We promise not to spam you
                                    </p>
                                </div>
                                <button className="email-btn" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection
