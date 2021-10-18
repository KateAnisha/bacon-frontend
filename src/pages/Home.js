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
            <h3 id="home-welcome" className="text-black-50">Hi, {name ? name : ""}</h3>
            <h3 id="home-recent-transcation" className="mt-2 text-black-50">Recent transactions</h3>
            <div id="home-income" className="">
                <h4 class="text-black-50 mb-2">Income</h4>
                <Transactions type={"Income"} limit={4} />
            </div>
            <div id="home-expense" className="">
                <h4 class="text-black-50 mb-2">Expense</h4>
                <Transactions type={"Expense"} limit={4} />
            </div>
            <h3 id="home-overview" className="mt-2 text-black-50">Current month overview</h3>
            <div id="home-income-barchart" className="text-black-50">
                <h4 className="">Income</h4>
                <BarChart type={"Income"}/>
            </div>
            <div id="home-expense-barchart" className="text-black-50">
                <h4 className="">Expense</h4>
                <BarChart type={"Expense"}/>
            </div>
        </body>
    )
}
