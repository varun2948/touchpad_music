import React from "react";
import PropTypes from "prop-types";
import "./Cell.css";

function Cell(props) {
  return (
    <div className="gridItem" style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );
}

Cell.propTypes = {
  color: PropTypes.string,
};

export default Cell;
