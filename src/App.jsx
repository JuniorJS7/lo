import React from "react";
import './App.scss';
import HeaderParent from "./components/Header/header";
import Myselect from "./components/Selection/Myselect";
import Finish from "./components/footer/finish";


function App() {
  return (
    <div className="App">
       <HeaderParent/>
       <Myselect/>
       <Finish/>
    </div>
  );
}

export default App;
