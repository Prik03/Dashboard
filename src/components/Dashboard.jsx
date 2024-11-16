import React from 'react'
import DashboardStartsGrid from './DashboardStartsGrid'
import TransactionsChart from './TransactionsChart'

const Dashboard = () => {
    return (
        <>
            <div className="flex gap-4">
                <DashboardStartsGrid />
            </div>
            <div>
                <TransactionsChart />
            </div>
        </>
    )
}

export default Dashboard
