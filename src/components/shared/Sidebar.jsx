import React from 'react'
import { FcAreaChart } from 'react-icons/fc'
import { Link, useLocation } from 'react-router-dom'
import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentReport,
    HiOutlineAnnotation,
    HiOutlineCog,
    HiOutlineQuestionMarkCircle,
    HiOutlineLogout
} from 'react-icons/hi'

const listClass =
    'flex items-center gap-2 gap-col-1 hover:bg-neutral-700 active:bg-neutral-600 rounded-sm text-base px-3 py-2 font-light'

const listClasssecond =
    'flex items-center gap-2 hover:bg-neutral-700 bg-neutral-600 rounded-sm text-base px-3 py-2 font-light'

const Sidebar = () => {
    const { pathname } = useLocation()

    return (
        <div className="flex flex-col bg-neutral-950 w-60 text-white p-4">
            <div className="flex items-center">
                <FcAreaChart fontSize={24} />
                <span>OpenShop</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                <ul className="gap-x-1">
                    <li>
                        <Link to="/" className={pathname === '/' ? listClasssecond : listClass}>
                            <HiOutlineViewGrid /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/Products" className={pathname === '/Products' ? listClasssecond : listClass}>
                            <HiOutlineCube /> Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders" className={pathname === '/orders' ? listClasssecond : listClass}>
                            <HiOutlineShoppingCart /> Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/customers" className={pathname === '/customers' ? listClasssecond : listClass}>
                            <HiOutlineUsers /> Customers
                        </Link>
                    </li>
                    <li>
                        <Link to="/transactions" className={pathname === '/transactions' ? listClasssecond : listClass}>
                            <HiOutlineDocumentReport /> Transaction
                        </Link>
                    </li>
                    <li>
                        <Link to="/messages" className={pathname === '/messages' ? listClasssecond : listClass}>
                            <HiOutlineAnnotation /> Messages
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="border-t border-neutral-700">
                <ul>
                    <li>
                        <Link to="/setting" className={pathname === '/setting' ? listClasssecond : listClass}>
                            <HiOutlineCog /> Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/support" className={pathname === '/support' ? listClasssecond : listClass}>
                            <HiOutlineQuestionMarkCircle /> Help & Support
                        </Link>
                    </li>
                    <li>
                        <Link className={[`${listClass} text-red-600`]}>
                            <HiOutlineLogout />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
