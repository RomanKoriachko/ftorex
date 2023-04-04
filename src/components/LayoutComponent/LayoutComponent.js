import React from 'react'
import Header from '../../container/Header/Header'
import Footer from '../../container/Footer/Footer'
import { Outlet } from 'react-router-dom'

const LayoutComponent = ({ submitRef, messageRef }) => {
    return (
        <>
            <Header submitRef={submitRef} />
            {/* <Outlet />
            <Footer messageRef={messageRef} /> */}
        </>
    )
}

export default LayoutComponent
