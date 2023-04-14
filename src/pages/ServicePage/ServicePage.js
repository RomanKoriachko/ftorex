import React from "react"
import "./ServicePage.scss"
import PageHeader from "../../components/PageHeader/PageHeader"
import MessageForm from "../../components/MessageForm/MessageForm"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../redux/hooks"
import { openCallbackForm } from "redux/callbackFormReducer"
import { Helmet } from "react-helmet"

const ServicePage = ({ messageRef }) => {
    const dispatch = useAppDispatch()

    const openForm = () => {
        dispatch(openCallbackForm())
    }
    return (
        <div className="service-page">
            <Helmet>
                <title>Service</title>
                <meta
                    name="description"
                    content="FTOREX International trading company focused in procurement of coking, thermal, anthracite, PCI coals, as well as fertilizer worldwide. The major goal is to provide the price directly from manufacturers."
                />
            </Helmet>
            <PageHeader
                name={"Services"}
                subtitle={
                    "Ftorex is a global coal industry company designed to establish and develop a Coal Business, Engineering & General Purpose"
                }
            />
            <section className="service-section">
                <div className="container">
                    <div className="service-wrapper">
                        <div className="service-item">
                            <div className="service-box">
                                <p>Coal supplies</p>
                                <p>
                                    Our company offers coal supplies for various
                                    industries that require this fossil fuel as
                                    an energy source We provide both thermal...
                                </p>
                                <div>
                                    <Link to={`/services/coal_supplies`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-box">
                                <p>Fertilizer supplies</p>
                                <p>
                                    Ftorex provides various types of fertilizers
                                    to meet the needs of agriculture and other
                                    related industries. We offer a range...
                                </p>
                                <div>
                                    <Link to={`/services/fertilizer_supplies`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-box">
                                <p>Logistic Solutions</p>
                                <p>
                                    We offer logistic solutions to facilitate
                                    the movement of goods from one place to
                                    another. Our logistic solutions include ...
                                </p>
                                <div>
                                    <Link to={`/services/logistic_solutions`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-box">
                                <p>Customs Clearance</p>
                                <p>
                                    Our company provides customs clearance
                                    services to facilitate the import and export
                                    of goods. We have a team of experts...
                                </p>
                                <div>
                                    <Link to={`/services/customs_clearance`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-box">
                                <p>Ocean freight</p>
                                <p>
                                    Our company offers ocean freight services to
                                    facilitate the movement of goods via sea. We
                                    provide end-to-end ocean freight service...
                                </p>
                                <div>
                                    <Link to={`/services/ocean_freight`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-box">
                                <p className="long-header">Consulting</p>
                                <p>
                                    We provide consulting services to help our
                                    clients make informed decisions related to
                                    their businesses. Our consulting...
                                </p>
                                <div>
                                    <Link to={`/services/consulting`}>
                                        <button className="info-btn">
                                            <div className="row btn-content-row">
                                                <p>View info</p>
                                                <div className="btn-arrow"></div>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-item service-item-contact">
                            <div className="service-box">
                                <p>
                                    Contact us and we will offer you the best
                                    cooperation option
                                </p>
                                <div>
                                    <button
                                        className="contact-btn"
                                        onClick={() => openForm()}
                                    >
                                        <div className="row btn-content-row">
                                            <p>CALL NOW</p>
                                            <div className="btn-arrow"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MessageForm />
                </div>
            </section>
        </div>
    )
}

export default ServicePage
