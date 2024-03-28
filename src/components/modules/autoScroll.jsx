import React, { useState, useEffect } from "react";
import "./autoScroll.module.css";

function App() {
  const [watchedCoins, setWatchedCoins] = useState([]);

  useEffect(() => {
    // Fetch data for watched cryptocurrencies from an API
    fetchWatchedCoins();
  }, []);

  const fetchWatchedCoins = async () => {
    try {
      // Example API endpoint for fetching watched coins
      const response = await fetch(
        "https://pro-api.coinmarketcap.com/v1/community/trending/token"
      );
      const data = await response.json();
      setWatchedCoins(data.coins);
    } catch (error) {
      console.error("Error fetching watched coins:", error);
    }
  };

  return (
    <div className="App">
      <h1>Watched Cryptocurrencies</h1>
      <div className="watched-coins-container">
        <ul>
          {watchedCoins.map((coin, index) => (
            <li key={index}>{coin.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
