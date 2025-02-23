import React from 'react'
import DashboardStartsGrid from './DashboardStartsGrid'
import TransactionsChart from './TransactionsChart'
import PieCharts from './PieCharts'

const Dashboard = () => {
    return (
        <>
            <div className="flex gap-4">
                <DashboardStartsGrid />
            </div>
            <div>
                <TransactionsChart />
            </div>
            <div>
            <PieCharts/>
            </div>
        </>
    )
}

export default Dashboard
