import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <h2>Nvabar</h2>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout
