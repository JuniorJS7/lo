import React from "react";
import './App.scss';
import ParentPage from '../src/components/ParentPage/ParentPage'
import HeaderParent from "./components/Header/header";
import Myselect from "./components/Selection/Myselect";
import Finish from "./components/footer/finish";

function App() {
  return (
    <div className="App">
       <ParentPage />
       <HeaderParent/>
       <Myselect/>
       <Finish/>
    </div>
  );
}

export default App;
