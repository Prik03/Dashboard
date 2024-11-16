import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

const DashboardStartsGrid = () => {
    return (
        <div className="flex gap-4 w-full p-3">
            <BoxWrapper>
                <div className="p-3 bg-green-700 rounded-3xl">
                    <IoBagHandle fontSize={22} color="white" />
                </div>
                <div className="flex flex-col px-3">
                    <span className="font-thin text-neutral-700 text-base">Total Sales</span>
                    <div>
                        <span className="font-medium text-2xl text-neutral-700">$30932</span>{' '}
                        <span className="text-green-600">+343</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="p-3 bg-orange-700 rounded-3xl">
                    <IoPieChart fontSize={22} color="white" />
                </div>{' '}
                <div className="flex flex-col px-3">
                    <span className="font-thin text-neutral-700 text-base">Total Expenses</span>
                    <div>
                        <span className="font-medium text-2xl text-neutral-700">$3092</span>{' '}
                        <span className="text-red-600">-343</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="p-3 bg-red-700 rounded-3xl">
                    <IoPeople fontSize={22} color="white" />
                </div>{' '}
                <div className="flex flex-col px-3">
                    <span className="font-thin text-neutral-700 text-base">Total Customers</span>
                    <div>
                        <span className="font-medium text-2xl text-neutral-700">30932</span>{' '}
                        <span className="text-red-600">-33</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="p-3 bg-blue-700 rounded-3xl">
                    <IoCart fontSize={22} color="white" />
                </div>{' '}
                <div className="flex flex-col px-3">
                    <span className="font-thin text-neutral-700 text-base">Total Orders</span>
                    <div>
                        <span className="font-medium text-2xl text-neutral-700">302</span>{' '}
                        <span className="text-red-600">-43</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

export default DashboardStartsGrid

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
