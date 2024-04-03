import { useState } from "react";
import { convertData } from "../../helpers/convertData";
import styles from "../modules/Chart.module.css";
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  Line,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";
function Chart({ chart, setChart }) {
  console.log(chart);
  const [type, setType] = useState("prices");

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      console.log(type);
      setType(type);
    }
  };
  console.log("tag name : ");
  console.log(convertData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt="coin image" />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types} onClick={typeHandler}>
          <button
            id="prices"
            className={type === "prices" ? styles.selected : null}
          >
            Prices
          </button>
          <button
            id="market_caps"
            
            className={type === "market_caps" ? styles.selected : null}
          >
            Market Caps
          </button>
          <button
            id="total_volume"
            className={type === "total_volumes" ? styles.selected : null}
          >
            Total Volumes
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices: </p>
            <span>${chart.coin.current_price}</span>
          </div>
          <div>
            <p>ATH: </p>
            <span>${chart.coin.ath}</span>
          </div>
          <div className={styles.marketCap}>
            <p>Market Cap: </p>
            <span>${chart.coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <Line
          type="monotone"
          dataKey={type}
          stroke=" #00C4F4"
          strokeWidth="2px"
        />
        <CartesianGrid stroke="#40404276" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
