import LineChart from "../components/LineChart";

export default function Dashboard() {
    return (
        <div>
            <div>
                <h2>Income</h2>
                <LineChart type="Income" lineColor="#32B2A7" />
            </div>
            <div>
                <h2>Expense</h2>
                <LineChart type="Expense" lineColor="#707070" />
            </div>
        </div>
        
    )
}