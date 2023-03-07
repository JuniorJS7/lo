import React from "react";
import NavBar from "../NavBar/NavBar";
import Selectors from "../Selectors/Selectors";
import FirstCont from "../firstCont/FirstCont";

function ParentPage(props) {
  return (
    <div>
      <NavBar />
      <Selectors />
      <FirstCont />
    </div>
  );
}

export default ParentPage;
