import React from "react"
import "./FertilizerSuppliesPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const FertilizerSuppliesPage = () => {
    return (
        <div className="single-service-page fertilizer-supplies-page">
            <PageHeader
                name="Fertilizer supplies"
                subtitle="Ftorex is a global coal industry company designed to establish and develop a Coal Business, Engineering & General Purpose"
            />
            <div className="content-wrapper"></div>
            <div className="container">
                <div className="links-tablet-wrapper">
                    <div className="links-tablet">
                        <NavLink
                            to="/services/coal_supplies"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Coal supplies</div>
                        </NavLink>
                        <NavLink
                            to="/services/fertilizer_supplies"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Fertilizer supplies</div>
                        </NavLink>
                        <NavLink
                            to="/services/logistic_solutions"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Logistic Solutions</div>
                        </NavLink>
                        <NavLink
                            to="/services/customs_clearance"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Customs Clearance</div>
                        </NavLink>
                        <NavLink
                            to="/services/ocean_freight"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Ocean freight</div>
                        </NavLink>
                        <NavLink
                            to="/services/consulting"
                            className={({ isActive }) =>
                                isActive ? "active" : "notActive"
                            }
                        >
                            <div>Consulting</div>
                        </NavLink>
                    </div>
                </div>
                <div className="links-row">
                    <StickyBox offsetTop={150} offsetBottom={20}>
                        <div className="links-desktop">
                            <NavLink
                                to="/services/coal_supplies"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Coal supplies
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/fertilizer_supplies"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Fertilizer supplies
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/logistic_solutions"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Logistic Solutions
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/customs_clearance"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Customs Clearance
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/ocean_freight"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">
                                    Ocean freight
                                </div>
                            </NavLink>
                            <NavLink
                                to="/services/consulting"
                                className={({ isActive }) =>
                                    isActive ? "active" : "notActive"
                                }
                            >
                                <div className="service-link">Consulting</div>
                            </NavLink>
                        </div>
                    </StickyBox>
                    <div className="service-container">
                        <div>
                            <p className="service-content-header">
                                Fertilizer supplies
                            </p>
                            <p className="service-content-text">
                                Are you ready to take your crops to the next
                                level? Look no further than Ftorex's fertilizer
                                supplies! Fertilizer is like a superfood for
                                plants, providing the essential nutrients they
                                need to thrive and produce impressive yields. At
                                Ftorex, we understand the critical role that
                                fertilizer plays in agriculture and related
                                industries, which is why we provide a wide range
                                of high-quality fertilizers.
                            </p>
                            <p className="service-content-subtitle">
                                What type of fertilizers do we supply?
                            </p>
                            <p className="service-content-text">
                                Ftorex provides a wide range of fertilizers that
                                are tailored to meet the specific needs of
                                different crops. The types of fertilizers
                                offered by Ftorex include nitrogen, phosphate,
                                and potash-based fertilizers, as well as
                                micronutrients.
                            </p>
                            <table className="service-content-table">
                                <thead>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell table-header">
                                            Fertile
                                        </td>
                                        <td className="service-content-table-cell table-header">
                                            Target Crops
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Nitrogen fertilizers
                                        </td>
                                        <td className="service-content-table-cell">
                                            Corn, wheat, vegetables, fruits ,
                                            grains, blueberries, potatoes,
                                            tomatoes
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Phosphate fertilizers
                                        </td>
                                        <td className="service-content-table-cell">
                                            Vegetables, fruits, grains, corn,
                                            soybeans, wheat, sugar beets
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Potash Fertilizers
                                        </td>
                                        <td className="service-content-table-cell">
                                            Corn, cotton, soybeans, fruits,
                                            vegetables, tobacco, flowers
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Mironutrient
                                        </td>
                                        <td className="service-content-table-cell">
                                            Citrus fruits, grapes, corn, wheat,
                                            soybeans
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul className="service-content-list">
                                <li>Nitrogen Fertilizers</li>
                            </ul>
                            <p className="service-content-text">
                                Nitrogen is essential for plant growth as it is
                                a component of chlorophyll, which is necessary
                                for photosynthesis. Nitrogen fertilizers are
                                used to provide plants with the necessary
                                nitrogen for healthy growth. There are different
                                types of nitrogen fertilizers, including
                                ammonium nitrate, urea, and ammonium sulfate.
                            </p>
                            <p className="service-content-text">
                                Ammonium nitrate is a popular nitrogen
                                fertilizer that is used for crops such as corn
                                and wheat. Urea is another common nitrogen
                                fertilizer that is used for a wide range of
                                crops, including vegetables, fruits, and grains.
                                Ammonium sulfate is often used for crops that
                                require acid soils, such as blueberries,
                                potatoes, and tomatoes. All these are available
                                at Ftorex
                            </p>
                            <ul className="service-content-list">
                                <li>Phosphate Fertilizers</li>
                            </ul>
                            <p className="service-content-text">
                                Phosphorus is essential for root development and
                                seedling growth. Phosphate fertilizers are used
                                to provide plants with the necessary phosphorus
                                for healthy growth. There are different types of
                                phosphate fertilizers supplied by Ftorex. They
                                include monoammonium phosphate, diammonium
                                phosphate, and triple superphosphate.
                            </p>
                            <p className="service-content-text">
                                Monoammonium phosphate is a popular phosphate
                                fertilizer that is used for a wide range of
                                crops, including vegetables, fruits, and grains.
                                Diammonium phosphate is often used for crops
                                such as corn, soybeans, and wheat. Triple
                                superphosphate is a high-phosphate fertilizer
                                that is used for crops that require a lot of
                                phosphorus, such as citrus fruits and sugar
                                beets.
                            </p>
                            <ul className="service-content-list">
                                <li>Potash Fertilizers</li>
                            </ul>
                            <p className="service-content-text">
                                Potassium is essential for plant stress
                                tolerance and fruit quality. Potash fertilizers
                                are used to provide plants with the necessary
                                potassium for healthy growth. There are
                                different types of potash fertilizers, including
                                potassium chloride, potassium sulfate, and
                                potassium nitrate.
                            </p>
                            <p className="service-content-text">
                                Potassium chloride is a common potash fertilizer
                                that is used for a wide range of crops,
                                including corn, cotton, and soybeans. Potassium
                                sulfate is often used for crops such as fruits,
                                vegetables, and tobacco. Potassium nitrate is a
                                high-potassium fertilizer that is used for crops
                                such as fruits, vegetables, and flowers.
                                Fortunately, Ftorex supplies all this at a
                                competitive price.
                            </p>
                            <ul className="service-content-list">
                                <li>Micronutrient Fertilizers</li>
                            </ul>
                            <p className="service-content-text">
                                Micronutrients are trace elements that are
                                required in small quantities, but they are
                                essential for plant growth and development.
                                Micronutrient fertilizers supplied by Ftorex ca
                                used to provide plants with the necessary
                                micronutrients for healthy growth. There are
                                different types of micronutrient fertilizers,
                                including iron, zinc, and copper.
                            </p>
                            <p className="service-content-text">
                                Iron is essential for plant growth as it is a
                                component of chlorophyll. Iron fertilizers are
                                used for crops such as citrus fruits and grapes.
                                Zinc is necessary for plant growth as it is
                                involved in enzyme activity. Zinc fertilizers
                                are used for crops such as corn, wheat, and
                                soybeans. Copper is necessary for plant growth
                                as it is involved in photosynthesis. Copper
                                fertilizers are used for crops such as citrus
                                fruits and grapes
                            </p>
                            <p className="service-content-subtitle">
                                Why should you buy Ftorex Fertilizers?
                            </p>
                            <ul className="service-content-list">
                                <li>Quality Assurance</li>
                            </ul>
                            <p className="service-content-text">
                                At Ftorex, quality assurance is a top priority.
                                We ensure that the fertilizers supplied are of
                                the highest quality and are sourced from trusted
                                suppliers. The fertilizers undergo rigorous
                                testing to ensure that they meet the required
                                standards and are free from impurities. The
                                quality assurance team at Ftorex ensures that
                                the fertilizers are properly labeled, and the
                                information provided is accurate. This ensures
                                that farmers can trust the fertilizers they
                                purchase from Ftorex to provide the necessary
                                nutrients required for plant growth and
                                development.
                            </p>
                            <ul className="service-content-list">
                                <li>Flexible Delivery Options</li>
                            </ul>
                            <p className="service-content-text">
                                Ftorex offers flexible delivery options to
                                ensure that farmers can access the fertilizers
                                they need when they need them. We have a
                                well-established distribution network that
                                ensures that the fertilizers are delivered to
                                the farmers promptly. Ftorex also provides
                                customized delivery options to meet the specific
                                needs of different customers. This ensures that
                                farmers can access fertilizers even in remote
                                locations or areas that are difficult to access.
                            </p>
                            <ul className="service-content-list">
                                <li>Competitive Pricing</li>
                            </ul>
                            <p className="service-content-text">
                                Ftorex provides competitive pricing for the
                                fertilizers it supplies. We work closely with
                                our suppliers to ensure that we can offer the
                                fertilizers at competitive prices without
                                compromising on quality. This ensures that
                                farmers can access high-quality fertilizers at
                                affordable prices, which is critical to their
                                success. We also provide discounts for bulk
                                purchases, which further reduces the cost of
                                purchasing fertilizers for farmers.
                            </p>
                            <ul className="service-content-list">
                                <li>Environmental Sustainability</li>
                            </ul>
                            <p className="service-content-text">
                                At Ftorex, environmental sustainability is a
                                critical consideration in the production and
                                supply of fertilizers. We are committed to
                                reducing the environmental impact of fertilizer
                                production and use. Ftorex works closely with
                                its suppliers to ensure that the fertilizers are
                                produced using sustainable practices. We also
                                provide guidance to farmers on the proper use of
                                fertilizers to minimize the environmental
                                impact. This ensures that farmers can produce
                                healthy crops without negatively impacting the
                                environment.
                            </p>
                            <p className="service-content-subtitle">
                                Bottomline
                            </p>
                            <p className="service-content-text">
                                Ftorex is a reliable supplier of fertilizers
                                that farmers can count on to provide
                                high-quality fertilizers tailored to meet their
                                specific needs. Our commitment to quality
                                assurance, flexible delivery options,
                                competitive pricing, and environmental
                                sustainability sets us apart from other
                                fertilizer suppliers.
                            </p>
                            <p className="service-content-text">
                                By working closely with our suppliers and
                                customers, Ftorex ensures that the use of
                                fertilizers is sustainable and has a minimal
                                impact on the environment. Choosing Ftorex for
                                your fertilizer needs is not only a smart
                                business decision but also an environmentally
                                conscious choice. So, next time you need
                                fertilizers, choose Ftorex and take a step
                                towards sustainable farming practices.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="download-button-wrapper">
                    <div className="left-side-space"></div>
                    <div>
                        <button className="download-btn">
                            <div className="row btn-content-row">
                                <a href="/files/FTOREX FERTILIZER.pdf" download>
                                    download document
                                </a>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="margin-bottom"></div>
            </div>
        </div>
    )
}

export default FertilizerSuppliesPage
