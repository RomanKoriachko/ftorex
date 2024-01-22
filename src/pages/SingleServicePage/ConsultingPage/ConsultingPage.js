import React from "react"
import "./ConsultingPage.scss"
import PageHeader from "components/PageHeader/PageHeader"
import { NavLink } from "react-router-dom"
import StickyBox from "react-sticky-box"

const ConsultingPage = () => {
    return (
        <div className="single-service-page consulting-page">
            <PageHeader
                name="Consulting"
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
                            <p className="service-content-header">Consulting</p>
                            <p className="service-content-text">
                                If you are looking for the best consulting
                                services to help you make an informed decision
                                about your business, then you are in the right
                                place at the right time. Our services cover
                                areas that include market research, feasibility
                                studies, strategy development, and business
                                planning. At Ftorex, we know the importance of
                                every decision to either your company's growth
                                or downfall. This awareness makes us go as far
                                as making available teams of experts who can
                                individualize solutions for your particular
                                needs and stipulations. Now is the time for you
                                to learn more about these services.
                            </p>
                            <p className="service-content-subtitle">
                                What do these consulting services mean?
                            </p>
                            <p className="service-content-text">
                                Consulting firms offer their clients expert
                                advice on organizational issues. Typically,
                                clients hire business consulting firms on a
                                contractual basis so that the firm can assist
                                the client in improving the client's business
                                operations. Some companies that offer business
                                consulting services focus on a narrow niche,
                                while others provide more comprehensive
                                solutions. A business consulting firm can have
                                as few as one employee working locally or as
                                many as thousands working around the world. The
                                client should think about the firm's size and
                                specializations when making a decision on which
                                business consulting firm to hire.
                            </p>
                            <p className="service-content-subtitle">
                                Range of consulting services
                            </p>
                            <p className="service-content-text">
                                Fortunately, Ftorex offers a comprehensive range
                                of consulting services that cover various areas,
                                including market research, feasibility studies,
                                strategy development, and business planning.
                            </p>
                            <ul className="service-content-list">
                                <li>Market Research:</li>
                            </ul>
                            <p className="service-content-text">
                                The market research services offered by Ftorex
                                are intended to assist customers in acquiring a
                                more in-depth comprehension of the competitive
                                landscape of their respective industries,
                                including the most important trends,
                                opportunities, and problems. Ftorex is able to
                                provide clients with useful insights by doing
                                in-depth research and analysis, which can help
                                clients make better decisions and stay ahead of
                                the competition.
                            </p>
                            <ul className="service-content-list">
                                <li>Feasibility Studies:</li>
                            </ul>
                            <p className="service-content-text">
                                When beginning any form of business or activity,
                                it is vital to first do feasibility studies
                                using Ftorex. Ftorex is able to assist clients
                                in determining whether or not a new endeavor or
                                project will be successful by conducting
                                research on the market, the competitors, and the
                                regulatory environment.
                            </p>
                            <ul className="service-content-list">
                                <li>Strategy Development:</li>
                            </ul>
                            <p className="service-content-text">
                                The strategy development services offered by
                                Ftorex are intended to assist clients in
                                developing successful plans that are adapted to
                                meet their specific requirements and objectives.
                                Ftorex is able to assist clients in developing a
                                comprehensive plan that is tailored to
                                accomplish the results that they are looking
                                for, regardless of whether they are wanting to
                                enter a new market, expand their existing
                                business, or increase the efficiency of their
                                operating processes.
                            </p>
                            <ul className="service-content-list">
                                <li>Business Planning:</li>
                            </ul>
                            <p className="service-content-text">
                                The business planning services offered by Ftorex
                                are intended to assist clients in the
                                development of an all-encompassing business plan
                                that details their objectives, approaches, and
                                procedures. Ftorex is able to assist clients in
                                determining their primary strengths and
                                weaknesses, developing a comprehensive financial
                                plan, and developing a strategy for achieving
                                their goals because of the close collaboration
                                that occurs between the client and the company.
                            </p>
                            <p className="service-content-subtitle">
                                Quality of good consulting services
                            </p>
                            <p className="service-content-text">
                                When it comes to consulting, Ftorex Consulting
                                takes a different strategy than its rivals. We
                                recognize that every business is different,
                                which is why we personalize our solutions for
                                each of our customers. In order to better serve
                                our clients, our experienced team collaborates
                                directly with them to learn about their
                                operations, difficulties, and desired outcomes.
                                We then create individualized answers that are
                                viable, efficient, and simple to apply.
                            </p>
                            <p className="service-content-text">
                                So, what exactly are the qualities of good
                                consulting services? Let's examine some of the
                                defining features of the Ftorex.
                            </p>
                            <ul className="service-content-list">
                                <li>Expertise and Experience</li>
                            </ul>
                            <p className="service-content-text">
                                In the first place, in order to provide
                                excellent consulting services, competence and
                                experience are required. Our team of consultants
                                at Ftorex brings a variety of knowledge and
                                industry experience to each engagement. This
                                enables us to give our customers the insights
                                and direction they require to make well-informed
                                decisions and accomplish their objectives.
                            </p>
                            <ul className="service-content-list">
                                <li>Collaboration and Partnership</li>
                            </ul>
                            <p className="service-content-text">
                                Consulting is a team effort, and a successful
                                consultant understands how to collaborate with
                                their clients to find solutions to their
                                problems and realize their visions. At Ftorex,
                                we take a collaborative approach to consulting.
                                This means that we work closely with our
                                customers to understand the specific
                                difficulties they face, and then we build
                                individualized solutions that are tailored to
                                meet their requirements.
                            </p>
                            <ul className="service-content-list">
                                <li>Innovation and creativity</li>
                            </ul>
                            <p className="service-content-text">
                                In the continually shifting economic climate of
                                today, innovation and creativity are essential
                                components of a successful corporate strategy.
                                It is essential for a successful consulting firm
                                to be able to provide clients with novel,
                                inventive ideas as well as solutions that can
                                assist them in remaining one step ahead of the
                                competition. At Ftorex, we are constantly
                                looking into new methods of thinking and
                                approaching problems in order to better assist
                                our customers in accomplishing their goals.
                            </p>
                            <ul className="service-content-list">
                                <li>Results-Oriented Approach</li>
                            </ul>
                            <p className="service-content-text">
                                The results that a consulting project produces
                                ultimately determine its success. If you're
                                looking for a consulting firm, be sure they put
                                an emphasis on producing results that matter to
                                their clients. When you work with Ftorex, you
                                can anticipate outcomes that go above and beyond
                                your expectations and help you reach your goals.
                            </p>
                            <ul className="service-content-list">
                                <li>Planned Advancement</li>
                            </ul>
                            <p className="service-content-text">
                                A clearly articulated vision for the future is
                                essential to the success of any professional
                                consulting service. The consultants' clients'
                                industries and markets should be thoroughly
                                familiar to them, and they should be able to
                                steer their clients in the appropriate
                                direction. Ftorex's consultants collaborate
                                closely with clients to develop individualized
                                strategies that are tailored to each
                                individual's needs and goals, and Ftorex's
                                clients benefit from these strategies.
                            </p>
                            <p className="service-content-subtitle">
                                Table: Ftorex Consulting Industry Expertise
                            </p>
                            <table className="service-content-table">
                                <thead>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell table-header">
                                            Industry
                                        </td>
                                        <td className="service-content-table-cell table-header">
                                            Description
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Retail
                                        </td>
                                        <td className="service-content-table-cell">
                                            Inventory management, supply chain
                                            optimization
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Technology
                                        </td>
                                        <td className="service-content-table-cell">
                                            IT strategy, software development
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Healthcare
                                        </td>
                                        <td className="service-content-table-cell">
                                            Medical practice management, patient
                                            experience
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Manufacturing
                                        </td>
                                        <td className="service-content-table-cell">
                                            Lean manufacturing, process
                                            improvement
                                        </td>
                                    </tr>
                                    <tr className="service-content-table-row">
                                        <td className="service-content-table-cell">
                                            Finance
                                        </td>
                                        <td className="service-content-table-cell">
                                            Financial planning, wealth
                                            management
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="service-content-subtitle">
                                Conclusion
                            </p>
                            <p className="service-content-text">
                                To summarize, the consulting services offered by
                                Ftorex are essential for any business expert who
                                is interested in the global currency market.
                                Clients are able to rely on Ftorex to provide
                                the expertise and assistance they require to
                                either start a new business or improve an
                                existing one. Ftorex is the perfect choice for
                                anyone who wants to take their currency trading
                                business to the next level due to their
                                established track record and commitment to
                                quality.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="download-button-wrapper">
                    <div className="left-side-space"></div>
                    {/* <div>
                        <button className="download-btn">
                            <div className="row btn-content-row">
                                <a
                                    href="/files//FTOREX COAL OFFER.docx"
                                    download
                                >
                                    download document
                                </a>
                                <div className="btn-arrow"></div>
                            </div>
                        </button>
                    </div> */}
                </div>
                <div className="margin-bottom"></div>
            </div>
        </div>
    )
}

export default ConsultingPage
