import React from "react";
import "../NavItems/NavItems.css";

function Li(props) {
  return (
    <li>
      <a href="#">{props.value}</a>
    </li>
  );
}

function NavItems() {
  return (
    <div className="NavItemsDiv">
      <ul>
        <Li value="Компания" />
        <Li value="Продукция" />
        <Li value="Подержка" />
        <Li value="Где купить" />
      </ul>
    </div>
  );
}

export default NavItems;
