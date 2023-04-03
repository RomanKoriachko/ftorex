import React from 'react'
import './ServicesSection.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setWidth } from '../../redux/widthReducer'

const ServicesSection = () => {
    const widthState = useAppSelector((state) => state.widthState)
    const dispatch = useAppDispatch()

    window.addEventListener('resize', function () {
        dispatch(setWidth((window.innerWidth - 1330) / 2 + 1300))
    })

    return (
        <section className="services-section">
            <div
                className="services-container"
                style={{
                    width: widthState,
                }}
            >
                <div className="services-row">
                    <div>
                        <p className="small-header">Our Services</p>
                        <p className="big-header">what services we provide</p>
                        <button className="sevices-btn">
                            <div className="row btn-content-row">
                                <p>View info</p>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </div>
                    <div className="services-items">
                        <div>Coal supplies</div>
                        <div>Fertilizer supplies </div>
                        <div>Ocean freight</div>
                        <div>Logistic Solutions</div>
                        <div>Customs Clearance</div>
                        <div>Consulting</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
