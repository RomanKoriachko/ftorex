import React from 'react'
import './ProductsSection.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ProductsSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1330,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <section className="products-section">
            <div className="container">
                <AnimationOnScroll
                    animateIn="animate__backInUp"
                    duration={1.5}
                    animateOnce={true}
                >
                    <p className="section-name small-header">Our Products</p>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="animate__backInUp"
                    duration={1.5}
                    animateOnce={true}
                >
                    <p className="products-header big-header">
                        What We can offer
                    </p>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="animate__backInUp"
                    duration={1.5}
                    animateOnce={true}
                >
                    <p className="products-subtitle subtitle">
                        Our company offers a comprehensive range of services
                        including coal and fertilizer supplies, logistics
                        solutions, customs clearance, ocean freight, and
                        consulting to meet the diverse needs of our customers.
                    </p>
                </AnimationOnScroll>
                <Slider {...settings}>
                    <div className="product-item">
                        <div className="product-box">
                            <p>Coking coal</p>
                            <p>
                                Coking coal is a type of coal that is used in
                                the production of steel. Also known as
                                metallurgical coal, it is a high-quality coal
                                that is valued for...
                            </p>
                            <div>
                                <Link to="/products">
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
                    <div className="product-item">
                        <div className="product-box">
                            <p>Thermal coal</p>
                            <p>
                                Thermal coal is a type of coal that is primarily
                                used for generating electricity. It is a
                                combustible black or brownish-black
                                sedimentary...
                            </p>
                            <div>
                                <Link to="/products">
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
                    <div className="product-item">
                        <div className="product-box">
                            <p>Anthracite</p>
                            <p>
                                Anthracite is a type of coal that is known for
                                its high carbon content, low impurities, and
                                superior heating properties. Anthracite coal...
                            </p>
                            <div>
                                <Link to="/products">
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
                    <div className="product-item">
                        <div className="product-box">
                            <p>PCI Coal</p>
                            <p>
                                PCI (Pulverized Coal Injection) coal is a type
                                of coal used in steelmaking that has been
                                pulverized into a fine powder and injected into
                                a blast...
                            </p>
                            <div>
                                <Link to="/products">
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
                    <div className="product-item">
                        <div className="product-box">
                            <p>fertilizer</p>
                            <p>
                                Our management consulting services focus on our
                                clients' most critical issues and opportunities:
                                strategy, marketing, organization...{' '}
                            </p>
                            <div>
                                <Link to="/products">
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
                    <div className="product-item">
                        <div className="product-box">
                            <p className="long-header">oil & gas equipment</p>
                            <p>
                                Our management consulting services focus on our
                                clients' most critical issues and opportunities:
                                strategy, marketing, organization...{' '}
                            </p>
                            <div>
                                <Link to="/products">
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
                    <div className="product-item">
                        <div className="product-box">
                            <p>mining equipment</p>
                            <p>
                                Our management consulting services focus on our
                                clients' most critical issues and opportunities:
                                strategy, marketing, organization...{' '}
                            </p>
                            <div>
                                <Link to="/products">
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
                </Slider>
                <Link to="/products">
                    <button className="products-btn">
                        <div className="row btn-content-row">
                            <p>more products</p>
                            <div className="btn-arrow"></div>
                        </div>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default ProductsSection
