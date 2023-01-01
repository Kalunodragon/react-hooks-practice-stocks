import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, removeStock }) {
  const portfolioList = stocks.map(stock => {
    return (
      <Stock
        key={stock.id}
        stock={stock}
        stockClick={removeStock}
      />
    )
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
