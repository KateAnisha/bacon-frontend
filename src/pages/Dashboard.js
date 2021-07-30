import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";


export default function Dashboard() {
    return (
        <body id="dashboard" className="ps-4">
            <h3 id="income-title" className="ps-4 text-black-50">Income</h3>
            <div id="income-line-chart">
                <LineChart type="Income" lineColor="#32B2A7" />
            </div>
            <div id="income-pie-chart">
                <PieChart type="Income" />
            </div>
            <h3 id="expense-title" className="ps-4 text-black-50">Expense</h3>
            <div id="expense-line-chart">
                <LineChart type="Expense" lineColor="#707070" />
            </div>
            <div id="expense-pie-chart">
                <PieChart type="Expense" />
            </div>
        </body>
        
    )
}