import React from "react";
import Menu from "../../data/menu.json";

const menuVar = Menu;

const Scroller = () => {
  const outObject = menuVar.map((key, i) => (
    <div>
      {
        <p key={i}>
          item {i}: {key}
          value: {menuVar[key]}
        </p>
      }
    </div>
  ));

  return outObject;
};

export default Scroller;
