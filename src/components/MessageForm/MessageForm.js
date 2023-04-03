import React from 'react'
import './MessageForm.scss'

const MessageForm = () => {
    return (
        <section className="message-section">
            <p className="message-header">Send us a Message​</p>
            <form
                className="message-form"
                action="https://formsubmit.co/mazaxaka.tyt@gmail.com"
                method="POST"
            >
                <div className="row input-row">
                    <input
                        className="message-input"
                        type="text"
                        name="Name"
                        placeholder="Enter your name .."
                    />
                    <input
                        className="message-input"
                        placeholder="*Enter your mail .."
                        name="Email"
                        type="email"
                        required
                    />
                </div>
                <div className="row input-row">
                    <input
                        className="message-input"
                        name="Adress"
                        type="text"
                        placeholder="Enter Adress .."
                    />
                    <input
                        className="message-input"
                        placeholder="Enter Subject .."
                        name="Subject"
                        type="text"
                    />
                </div>
                <textarea
                    className="message-textarea"
                    name="Message"
                    placeholder="*Enter you massage .."
                    required
                ></textarea>
                <button className="message-btn" type="submit">
                    <div className="row btn-content-row">
                        <p>send a letter</p>
                        <div className="btn-arrow"></div>
                    </div>
                </button>
            </form>
        </section>
    )
}

export default MessageForm
