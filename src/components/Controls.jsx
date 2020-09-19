import React from "react";
import PropTypes from "prop-types";
import "./Controls.css";
import Cell from "./Cell";

const controlList = [
  {
    className: "leftControl y-control",
    controls: [{ icon: "up", value: "up" }],
  },
  {
    className: "rightControl y-control",
    controls: [{ icon: "down", value: "down" }],
  },
  {
    className: "upControl x-control",
    controls: [{ icon: "play", value: "play" }],
  },
];

function Controls(props) {
  return (
    <>
      {controlList.map((cl) => {
        return (
          <div className={cl.className}>
            {cl.controls.map((c) => {
              return <Cell color="#ccc">{c.icon}</Cell>;
            })}
          </div>
        );
      })}
    </>
  );
}

Controls.propTypes = {};

export default Controls;
