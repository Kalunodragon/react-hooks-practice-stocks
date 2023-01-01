import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

// App is parent to Header, MainContainer
  // MainContainer (MC) is parent to SearchBar (SB), StockContainer (SC), PortfolioContainer (PC)
    // PortfolioContainer is parent to its own Stock 
    // StockContainer is parent to its own Stock 
/*
  -Render all the stocks onto the page. The styling of how a Stock should look is already in the Stock component.
  -Allow a user to buy a stock by clicking on it and when it is bought, it should be added to MyPortfolio.
  -Allow a user to sell a stock in their Portfolio by clicking on the stock and it should be removed from their Portfolio.
  -Allow a user to sort the list of stocks alphabetically by the ticker name as well as by ascending price.
  -Allow a user to filter stocks based on the type of the stock.

  MC - Location for useEffect( Main Fetch setState )
     - [Stock State for lists to pass to PC & SC]
     - [Bought state] true : false (if true render in portfolio, if false render in stocks)
     - function for handeling both clicks?
    PC - {onClick for selling (could be same function)}
    SC - {onClick for buying (could be same function)}

    id:
    name:
    price:
    ticker:
    type:
*/


function App() {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
