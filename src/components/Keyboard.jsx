import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";
import "./Keyboard.css";

const cells = Array.from({ length: 64 }, () => ({
  color: "#000000",
}));

function Keyboard(props) {
  return (
    <div className="keyboardGrid">
      {cells.map((c) => (
        <Cell color={c.color} />
      ))}
    </div>
  );
}

Keyboard.propTypes = {};

export default Keyboard;
