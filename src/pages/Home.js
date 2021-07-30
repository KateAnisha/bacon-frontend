import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'

import Transactions from '../components/Transactions'
import BarChart from '../components/BarChart'

import '../components/assets/css/style.css'


export default function Home() {
    const { name } = useContext(stateContext)

    return (
        <body id="home" className="ps-4">
            <h3 id="home-welcome" className="ps-4 text-black-50">Hi, {name ? name : ""}</h3>
            <h3 id="home-recent-transcation" className="ps-4 mt-2 text-black-50">Recent transactions</h3>
            <div id="home-income" className="ps-4">
                <h4 class="text-black-50 mb-2">Income</h4>
                <Transactions type={"Income"} limit={5} />
            </div>
            <div id="home-expense" className="ps-4">
                <h4 class="text-black-50 mb-2">Expense</h4>
                <Transactions type={"Expense"} limit={5} />
            </div>
            <h3 id="home-overview" className="ps-4 mt-2 text-black-50">Current month overview</h3>
            <div id="home-income-barchart" className="ps-4 text-black-50">
                <h4 className="">Income</h4>
                <BarChart type={"Income"}/>
            </div>
            <div id="home-expense-barchart" className="ps-4 text-black-50">
                <h4 className="">Expense</h4>
                <BarChart type={"Expense"}/>
            </div>
        </body>
    )
}
