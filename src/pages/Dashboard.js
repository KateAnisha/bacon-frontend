import LineChart from "../components/LineChart";

export default function Dashboard() {
    return (
        <div>
            <div>
                <LineChart type="income" lineColor="#32B2A7" />
            </div>
            <div>
                <LineChart type="expense" lineColor="#707070" />
            </div>
        </div>
        
    )
}