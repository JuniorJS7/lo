import React from "react";
import './App.scss';
import ParentPage from '../src/components/ParentPage/ParentPage'
import Product_card_main from "./Product_card_main";
import SearchBlock from "./SearchBlock";

function App() {
  return (
    <div className="App">
       <ParentPage />
      <SearchBlock />
      <Product_card_main />
    </div>
  );
}

export default App;
