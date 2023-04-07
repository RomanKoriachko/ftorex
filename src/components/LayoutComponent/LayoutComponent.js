import React from "react"
import Header from "../../container/Header/Header"
import Footer from "../../container/Footer/Footer"
import { Outlet } from "react-router-dom"
import { Helmet } from "react-helmet"

const LayoutComponent = ({ submitRef, messageRef }) => {
    return (
        <>
            <Helmet>
                <title>Ftorex</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Header submitRef={submitRef} />
            <Outlet />
            <Footer messageRef={messageRef} />
        </>
    )
}

export default LayoutComponent
