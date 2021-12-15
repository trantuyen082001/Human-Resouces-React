import Chart from "../../chart/Chart"
import FeaturedInfo from "../../featuredInfo/featuredInfo"
import "./home.css"
import { userData } from "../../chartData"

export default function Home() {
    return (
        <div className="home">
           <FeaturedInfo/>
           <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            
        </div>
    )
}
