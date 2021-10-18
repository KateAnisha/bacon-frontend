import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'

import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";


export default function Dashboard() {
    const monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const [years, setYears] = useState([])
    const [months, setMonths] = useState([])
    const [filterYear, setfilterYear] = useState([])
    const [filterMonth, setfilterMonth] = useState([])
    const [filterResults, setFilterResults] = useState([])
    const { transactions } = useContext(stateContext)

    function filterOptions(transactionsArray, type) {
        const options = []
            for (let i=0; i<transactionsArray.length; i++) {
                let option = transactionsArray[i].date.split("-")[type]
                if (options.includes(option) === false) {
                    options.push(option)
                }
            }
        return options.sort((a, b) => a - b)
    }

    function filterBy(transactionArray, filter, type) {
        const results = []
            for (let i=0; i<filter.length; i++) {
                let filtered_transactions = transactionArray.filter(transaction => transaction.date.split("-")[type] === filter[i])
                results.push(...filtered_transactions)
            }
        return results
    }

    useEffect(() => {
        if (filterYear.length === 0 && filterMonth.length === 0) {
            setYears(filterOptions(transactions, 0))
            setMonths(filterOptions(transactions, 1))
        } else if (filterYear.length > 0 && filterMonth.length === 0) {
            setYears(filterOptions(transactions, 0))
            const transactions_after_filter_by_year = filterBy(transactions, filterYear, 0)
            setMonths(filterOptions(transactions_after_filter_by_year, 1))
        } else if (filterYear.length === 0 && filterMonth.length > 0) {
            setMonths(filterOptions(transactions, 1))
            const transactions_after_filter_by_month = filterBy(transactions, filterMonth, 1)
            setYears(filterOptions(transactions_after_filter_by_month, 0))
        }
    }, [transactions, filterYear, filterMonth])

    useEffect(() => {
        setFilterResults([])
        if (filterYear.length === 0 && filterMonth.length === 0) {
            setFilterResults([...transactions])
        } else if (filterYear.length > 0 && filterMonth.length === 0) {
            setFilterResults(filterBy(transactions, filterYear, 0))
        } else if (filterYear.length === 0 && filterMonth.length > 0) {
            setFilterResults(filterBy(transactions, filterMonth, 1))
        } else if (filterYear.length > 0 && filterMonth.length > 0) {
            const transactions_after_filter_by_year = filterBy(transactions, filterYear, 0)
            const transactions_after_filter_by_year_and_month = filterBy(transactions_after_filter_by_year, filterMonth, 1)
            setFilterResults(transactions_after_filter_by_year_and_month)
        }
    }, [filterYear, years, filterMonth, months])

    function setUpfilterYear(year) {
        if (filterYear.includes(year) === false) {
            setfilterYear([...filterYear, year])    
        } else {
            const filter_year_copy = [...filterYear]
            const index = filter_year_copy.indexOf(year)
            filter_year_copy.splice(index, 1)
            setfilterYear(filter_year_copy)
        }
    }

    function setUpfilterMonth(month) {
        if (filterMonth.includes(month) === false) {
            setfilterMonth([...filterMonth, month])    
        } else {
            const filter_month_copy = [...filterMonth]
            const index = filter_month_copy.indexOf(month)
            filter_month_copy.splice(index, 1)
            setfilterMonth(filter_month_copy)
        }
    }

    function clearAll() {
        setfilterYear([])
    }

    const filter_years = years.map(year => 
        <div key={year}>
            <label className="ms-1 text-black-50">
                <input 
                    type="checkbox" 
                    className="ms-1"
                    value={year} 
                    onChange={(e) => setUpfilterYear(e.target.value)}
                /> {year}
            </label>
        </div>
    )

    const filter_months = months.map(month => 
        <div key={month}>
            <label className="ms-1 text-black-50">
                <input
                    type="checkbox" 
                    className="ms-1"
                    value={month} 
                    onChange={(e) => setUpfilterMonth(e.target.value)}
                /> {monthsArray[Number(month) - 1]}
            </label>
        </div>
    )

    return (
        <section id="dashboard" className="ps-2">
            {/* {console.log("year" + filterYear)} */}
            <h3 id="income-title" className="ps-3 text-black-50">Income</h3>
            <div id="income-line-chart">
                <LineChart type="Income" lineColor="#32B2A7" transactions={filterResults} />
            </div>
            <div id="income-pie-chart">
                <PieChart type="Income" transactions={filterResults} />
            </div>
            <h3 id="expense-title" className="ps-3 text-black-50">Expense</h3>
            <div id="expense-line-chart">
                <LineChart type="Expense" lineColor="#707070" transactions={filterResults} />
            </div>
            <div id="expense-pie-chart">
                <PieChart type="Expense" transactions={filterResults} />
            </div>
            <h3 id="dashboard-filters-title" className="text-black-50">Filters</h3>
            <div id="dashboard-filters">
                <div id="filter-title-year">
                    <h4 className="ms-2 mb-1 text-black-50">Year</h4>
                </div>
                <div id="year-filters-container">
                    {filter_years}
                </div>
                <br/>
                <h4 id="filter-title-month" className="ms-2 mb-1 text-black-50">Month</h4>
                <div id="month-filters-container">
                    {filter_months}
                </div>
            </div>
        </section>
    )
}