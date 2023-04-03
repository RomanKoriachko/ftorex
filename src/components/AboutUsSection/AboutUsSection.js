import React from 'react'
import './AboutUsSection.scss'

const AboutUsSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <p className="small-header">About Us</p>
                <p className="big-header">our team's experience</p>
                <p className="subtitle">
                    Our company specializes in the supply of coking coal to
                    customers worldwide, with a focus on Southeast Asia and the
                    Middle East regions.{' '}
                </p>
                <div className="about-text-wrapper">
                    <div className="about-text">
                        <p className="about-text-paragraph">
                            FTOREX Commercial Broker LLC is a rapidly growing
                            international company with headquarters in both
                            Houston, TX, USA, and Dubai, UAE. Our goal is to
                            provide our customers with direct contracts and
                            competitive pricing directly from the manufacturers.
                        </p>
                        <p>
                            We understand that coal is a crucial raw material
                            for steel production, and as such, we strive to
                            maintain long-term partnerships with reputable
                            manufacturers to ensure a consistent and reliable
                            supply for our clients. Our experienced team is
                            committed to providing exceptional customer service,
                            and we work closely with our clients to meet their
                            specific needs and requirements.
                        </p>
                    </div>
                    <div className="about-text">
                        <p className="about-text-paragraph">
                            At FTOREX, we prioritize quality and sustainability,
                            and we work with manufacturers who share our
                            commitment to these values. We believe that
                            responsible sourcing and ethical business practices
                            are essential for building long-term relationships
                            with our customers and ensuring the continued
                            success of our business.
                        </p>
                        <p>
                            Overall, FTOREX Commercial Broker LLC is a reliable
                            and reputable supplier of coal to customers
                            worldwide. Our dedication to quality,
                            sustainability, and customer service sets us apart
                            from the competition, and we are committed to
                            providing our clients with the best possible
                            experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection
