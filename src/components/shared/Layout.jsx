import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="w-full">
                <div className="bg-slate-200">
                    <Header />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
