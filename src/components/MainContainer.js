import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech");

  const API = "http://localhost:3001/stocks"

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setStocks);
  }, []);

  function addStock(stockToAdd) {
    const stockAdded = portfolio.find(
      (stock) => stock.id === stockToAdd.id
    );
    if (!stockAdded) {
      setPortfolio([...portfolio, stockToAdd]);
    }
  }

  function removeStock(stockToRemove) {
    setPortfolio((portfolio) =>
      portfolio.filter((stock) => stock.id !== stockToRemove.id)
    );
  }

  const sorted = [...stocks].sort((first, second) => {
    if (sortBy === "Alphabetically") {
      return first.name.localeCompare(second.name);
    } else {
      return first.price - second.price;
    }
  });

  const filtered = sorted.filter(
    (stock) => stock.type === filterBy
  );

  return (
    <div>
      <SearchBar
        sortBy={sortBy}
        handleChange={setSortBy}
        filterBy={filterBy}
        handleFilter={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filtered} addStock={addStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={portfolio}
            removeStock={removeStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;