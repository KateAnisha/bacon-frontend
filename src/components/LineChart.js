import Chart from 'react-apexcharts'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'


export default function LineChart({type, lineColor, transactions}) {
  // const { transactions } = useContext(stateContext)
  const [options, setOptions] = useState({
    chart: {id: "basic-bar"},
    xaxis: {categories: []},
    yaxis: [
        {
          labels: {
            formatter: function(val) {
              return val.toFixed(0);
            }
          }
        }
      ],
    colors: [lineColor],
    stroke: {
      curve: 'smooth'
    }
  })
  const [series, setSeries] = useState([
    {name: type, data: []}
  ])

  useEffect(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const transactions_sort_by_date = transactions.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    const categories = []
    for (let i=0; i<transactions_sort_by_date.length; i++) {
      let transaction_date_split = transactions_sort_by_date[i].date.split("-")
      let category_element = months[transaction_date_split[1]-1] + " " + transaction_date_split[0]
      if (!categories.includes(category_element)) {
          categories.push(category_element)
      }
    }
    setOptions({
      ...options,
      xaxis: {categories: categories.slice(-12)}
    })
    
    const data = []
    for (let i=0; i<categories.length; i++) {
      let monthly_total = 0
      let category_split = categories[i].split(" ")
      for (let j=0; j<transactions_sort_by_date.length; j++) {
        let transaction_date_split = transactions_sort_by_date[j].date.split("-")
        if (transactions_sort_by_date[j].type === type && 
        Number(transaction_date_split[1])+transaction_date_split[0] == months.indexOf(category_split[0])+1+category_split[1]) {
            monthly_total += Number(transactions_sort_by_date[j].amount)
        }
      }
      data.push(monthly_total)
    }
    setSeries([
      {name: type, data: data.slice(-12)}
    ])
  }, [transactions])

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        width="600"
        height="250"
      />
    </div>
  )
}