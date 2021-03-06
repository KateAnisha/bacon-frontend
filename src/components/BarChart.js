import Chart from 'react-apexcharts'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { stateContext } from '../stateReducer'


export default function BarChart({type}) {
  const { transactions, categories } = useContext(stateContext)
  // const categoryType = categories.filter(category => category.type === type)
  // const xaisColors = Array(categoryType.length).fill('#969696')
  const [options, setOptions] = useState({
    chart: {id: "basic-bar"},
    xaxis: {
      categories: [], 
      axisBorder: {
        color: '#969696', height: 2
      },
      // labels: {
      //   style: {
      //     fontSize: '16px',
      //     colors: xaisColors
      //   }
      // }
    },
    yaxis: [
      {
        labels: {
          formatter: function(val) {
            return val.toFixed(0);
          },
          // style: {
          //   colors: ['#32B2A7'],
          //   fontSize: '14px'
          // }
        }
      }
    ],
    fill: {colors: ['#32B2A7']},
    dataLabels: {
      style: {
        colors: ['white'],
        fontSize: '16px'
      }
    }
  })
  const [series, setSeries] = useState([
    {name: "series-1", data: []}
  ])
  
  useEffect(() => {
      const current_year = new Date().getFullYear()
      const current_month_index = new Date().getMonth()
      const current_month_transactions = transactions.filter(transaction => transaction.date.split("-")[0] == current_year && transaction.date.split("-")[1] == current_month_index + 1)
      let current_month_categories = []
      for (let i=0; i<current_month_transactions.length; i++) {
        if (current_month_transactions[i].type == type && !current_month_categories.includes(current_month_transactions[i].category)) {
          current_month_categories.push(current_month_transactions[i].category)
        }
      }
      let current_month_category_totals = []
      for (let i=0; i<current_month_categories.length; i++) {
        let category_total = 0
        for (let j=0; j<current_month_transactions.length; j++) {
          if (current_month_transactions[j].category === current_month_categories[i]) {
              category_total += Number(current_month_transactions[j].amount)
          }
        }
        current_month_category_totals.push(category_total)
      }
      setOptions({
        ...options,
        xaxis: {
          ...options.xaxis, 
          categories: current_month_categories
        }
      })
      setSeries([
        {name: "series-1", data: current_month_category_totals}
      ])  
  }, [transactions])
    
  return (
    <div className="barChart">
      <Chart
        options={options}
        series={series}
        type="bar"
        width="600"
        height="200"
      />
    </div>
  )
}
