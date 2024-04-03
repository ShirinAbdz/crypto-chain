import React from "react";
import ChrtUp from "../../assets/chart-up.svg";
import ChrtDwn from "../../assets/chart-down.svg";
import { ThreeDots } from "react-loader-spinner";

import styles from "../modules/TableCoin.module.css";
import { marketChart } from "../../services/cryptoApi";

const coinsPerPage = 60; // Number of coins per page

function TableCoin({ coins, isLoading, setChart, currentPage = 1 }) {
  console.log(`Current Page: ${currentPage}`);
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
              <th>Number</th>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24hr</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => {
              // Calculate the starting number for the current page
              const startNumber = (currentPage - 1) * coinsPerPage + 1;
              console.log(`Start Number: ${startNumber}`);
              // Calculate the row number for the current coin
              const rowNumber = startNumber + index;
              console.log(`Row Number: ${rowNumber}`);
              return (
                <TableRow
                  coin={coin}
                  key={coin.id}
                  setChart={setChart}
                  rowNumber={rowNumber}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

const TableRow = ({ coin, setChart, rowNumber }) => {
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
      <td>{rowNumber}</td>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={`${symbol.toUpperCase()} logo`} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
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
