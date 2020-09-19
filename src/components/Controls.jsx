import React from "react";
import PropTypes from "prop-types";
import "./Controls.css";
import Cell from "./Cell";

const controlList = [
  {
    className: "leftControl y-control",
    key: "left",
    controls: [{ icon: "up", key: "up" }],
  },
  {
    className: "rightControl y-control",
    key: "right",
    controls: [{ icon: "down", key: "down" }],
  },
  {
    className: "upControl x-control",
    key: "up",
    controls: [{ icon: "play", key: "play" }],
  },
];

function Controls(props) {
  return (
    <>
      {controlList.map((cl) => {
        return (
          <div key={cl.key} className={cl.className}>
            {cl.controls.map((c) => {
              return (
                <Cell color="#ccc" key={c.key}>
                  {c.icon}
                </Cell>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

Controls.propTypes = {};

export default Controls;
