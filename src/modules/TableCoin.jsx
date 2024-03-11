// import ChrtUp from "../assets/chart-up.svg";
// import ChrtDwn from "../assets/chart-down.svg";
// import { ThreeDots } from "react-loader-spinner";

// import styles from "../modules/TableCoin.module.css";
// function TableCoin({ coins, isLoading }) {
// return (
//   <div className={styles.container}>
//   {isLoading ? (
//     <p>
//       <ThreeDots color="#fff" />
//     </p>
//   ) : (
//     <table className={styles.table}>
//       <thead>
//         <tr>
//           <th>Coin</th>
//           <th>Name</th>
//           <th>Price</th>
//           <th>24hr</th>
//           <th>Total Volume</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {coins.map((coin) => (
//           <TableRow coin={coin} key={coin.id} />
//         ))}
//       </tbody>
//     </table>
//   )}
// </div>;
// )

// }

// const TableRow = ({
//   coin: {
//     name,
//     image,
//     symbol,
//     total_volume,
//     current_price,
//     price_change_percentage_24h: price_change,
//   },
// }) => {
//   return(
//     <tr>
//     <td>
//       <div className={styles.symbol}>
//         <img src={image} alt={`${symbol.toUpperCase()} logo`} />
//         <span>{symbol.toUpperCase()}</span>
//       </div>
//     </td>
//     <td>{name}</td>
//     <td className={price_change > 0 ? styles.success : styles.error}>
//       {price_change.toFixed(2)}%
//     </td>
//     <td>
//       {Number.isFinite(current_price) ? current_price.toLocaleString() : "N/A"}
//     </td>
//     <td>
//       {Number.isFinite(total_volume) ? total_volume.toLocaleString() : "N/A"}
//     </td>
//     <td>
//       <img
//         className={styles.chartSvg}
//         src={price_change > 0 ? ChrtUp : ChrtDwn}
//         alt={price_change>0 ? "profit sign" : "loss sign"}
//         style={price_change > 0 ? " " : { transform: "scaleY(-1)" }}
//       />
//     </td>
//   </tr>
//   )
  
// };

// export default TableCoin;



import ChrtUp from "../assets/chart-up.svg";
import ChrtDwn from "../assets/chart-down.svg";
import { ThreeDots } from "react-loader-spinner";

import styles from "../modules/TableCoin.module.css";

function TableCoin({ coins, isLoading }) {
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
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

const TableRow = ({
  coin: {
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  },
}) => (
  <tr>
    <td>
      <div className={styles.symbol}>
        <img src={image} alt={`${symbol.toUpperCase()} logo`} />
        <span>{symbol.toUpperCase()}</span>
      </div>
    </td>
    <td>{name}</td>
    <td className={price_change > 0 ? styles.success : styles.error}>
      {price_change.toFixed(2)}%
    </td>
    <td>
      {Number.isFinite(current_price) ? current_price.toLocaleString() : "N/A"}
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

export default TableCoin;
