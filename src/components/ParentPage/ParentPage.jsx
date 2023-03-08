import React from "react";
import NavBar from "../NavBar/NavBar";
import Selectors from "../Selectors/Selectors";
import FirstCont from "../firstCont/FirstCont";
import SecondCont from "../secondCont/SecondCont";

function ParentPage(props) {
  return (
    <div>
      <NavBar />
      <Selectors />
      <FirstCont />
      <SecondCont />
    </div>
  );
}

export default ParentPage;
