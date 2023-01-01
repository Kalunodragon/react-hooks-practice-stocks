import React from "react";
import Stock from "./Stock";

// StockContainer is parent to Stock

function StockContainer({ stocks, addStock }) {
  const saleList = stocks.map(stock => {
    return (
      <Stock
        key={stock.name}
        stock={stock}
        stockClick={addStock}
      />
    )
  })

  return (
    <div>
      <h2>Stocks</h2>
      {saleList}
    </div>
  );
}

export default StockContainer;
