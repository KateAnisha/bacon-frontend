import Chart from 'react-apexcharts'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'


export default function PieChart({type, transactions}) {
    const { categories } = useContext(stateContext)
    const [options, setOptions] = useState({labels: []})
    const [series, setSeries] = useState([])

    useEffect(() => {
        const filtered_categories = categories.filter(category => category.type === type)
        let labels = []
        for (let i=0; i<filtered_categories.length; i++) {
            labels.push(filtered_categories[i].description)
        }
        setOptions({labels: labels})

        const filtered_transactions = transactions.filter(transaction => transaction.type === type)
        let totals = []
        for (let i=0; i<labels.length; i++) {
            let category_total = 0
            for (let j=0; j<filtered_transactions.length; j++) {
                if (filtered_transactions[j].category === labels[i]) {
                    category_total += Number(filtered_transactions[j].amount)
                }
            }
            totals.push(category_total)
        }
        setSeries(totals)
    }, [transactions])

    return (
        <div>
            <Chart
              options={options}
              series={series}
              type="donut"
              width="400"
            />
        </div>
    )
}