import React from 'react'

import IncomeTransactions from '../components/IncomeTransactions'
import ExpenseTransactions from '../components/ExpenseTransactions'

import '../components/assets/css/home.css'


function Home() {
    return (
        <>
            <h1> App home page </h1>
            <div className="home-wrapper">
                <div className="home-content">
                    <IncomeTransactions />
                </div>
                
                <div className="home-content">
                    <ExpenseTransactions />
                </div>

                <div className="home-content">
                    <div className="nested">
                        <div className="sub-menu">Manage Budget</div>
                        <div className="sub-menu">Manage Accounts</div>
                        <div className="sub-menu">User Settings</div>
                    </div>
                </div>

                <div className="charts">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ab dolores? Asperiores ipsam dolorem exercitationem quidem fugiat, expedita deleniti ex aperiam deserunt saepe minus, maxime optio atque tempora beatae ducimus?
                </div>
            </div>
        </>
    )
}

export default Home
