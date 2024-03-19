import ChrtUp from "../../assets/chart-up.svg";
import ChrtDwn from "../../assets/chart-down.svg";
import { ThreeDots } from "react-loader-spinner";

import styles from "../modules/TableCoin.module.css";
import { marketChart } from "../../services/cryptoApi";

function TableCoin({ coins, isLoading, setChart }) {
  return (
    <>
      {isLoading ? (
        <p>
          <ThreeDots color="#fff" />
        </p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24hr</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

const TableRow = ({ coin, setChart }) => {
  const {
    id,
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      console.log(json);
      setChart({ ...json, coin });
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={`${symbol.toUpperCase()} logo`} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td >{name}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>
        {Number.isFinite(current_price)
          ? current_price.toLocaleString()
          : "N/A"}
      </td>
      <td>
        {Number.isFinite(total_volume) ? total_volume.toLocaleString() : "N/A"}
      </td>
      <td>
        <img
          className={styles.chartSvg}
          src={price_change > 0 ? ChrtUp : ChrtDwn}
          alt={price_change > 0 ? "Profit Indicator" : "Loss Indicator"}
          style={price_change > 0 ? {} : { transform: "scaleY(-1)" }}
        />
      </td>
    </tr>
  );
};

export default TableCoin;
