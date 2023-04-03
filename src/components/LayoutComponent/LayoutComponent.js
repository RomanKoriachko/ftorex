import React from 'react'
import Header from '../../container/Header/Header'
import Footer from '../../container/Footer/Footer'
import { Outlet } from 'react-router-dom'

const LayoutComponent = ({ submitRef }) => {
    return (
        <>
            <Header submitRef={submitRef} />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutComponent
