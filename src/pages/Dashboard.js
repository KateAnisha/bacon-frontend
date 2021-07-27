import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";


export default function Dashboard() {
    return (
        <div>
            <div>
                <h2>Income</h2>
                <LineChart type="Income" lineColor="#32B2A7" />
                <PieChart type="Income" />
            </div>
            <div>
                <h2>Expense</h2>
                <LineChart type="Expense" lineColor="#707070" />
                <PieChart type="Expense" />
            </div>
        </div>
        
    )
}