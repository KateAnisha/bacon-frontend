import React from 'react'
// import '../components/assets/css/home.css';
import CategoryForm from '../components/CategoryForm'
import { Link } from "react-router-dom"

import Transactions from '../components/Transactions'
import BarChart from '../components/BarChart'

import '../components/assets/css/style.css'
// import '../components/assets/css/main.css'


export default function Home() {
    return (
        <>
            <h1> App home page </h1>
            
                <div className="recent-income">
                    <Transactions type={"income"} limit={5} />
                </div>
                
                <div className="recent-expense">
                    <Transactions type={"expense"} limit={5} />
                </div>

                <CategoryForm />

                <div className="charts">
                    <BarChart />
                </div>
            
        </>
    )
}
