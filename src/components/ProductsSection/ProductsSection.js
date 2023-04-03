import React from 'react'
import './ProductsSection.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const ProductsSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    }
    return (
        <section className="products-section">
            <div className="container">
                <p className="section-name small-header">Our Products</p>
                <p className="products-header big-header">We can offer</p>
                <p className="products-subtitle subtitle">
                    Ftorex is a global coal industry company designed to
                    establish and develop a Coal Business, Engineering & General
                    Purpose
                </p>
                <Slider {...settings}>
                    <div className="product-item">
                        <div className="product-box">
                            <p>Coking coal</p>
                            <p>
                                Our specialists search for the goods and
                                suppliers you need all over the
                                world.Verification of the creditworthiness of
                                the supplier...{' '}
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
                                Flexible shipping solutions. Technology combined
                                with expertise. You can trust us to deliver as
                                promised: Leveraging state...{' '}
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
                                We work with top Carriers around the world to
                                offer the most competitive rates and secure
                                space...{' '}
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
