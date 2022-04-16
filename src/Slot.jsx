/** @format */

import React from "react";

const Slot = ({ hour, min, index, array }) => {
  const onClY = () => {
    document.getElementById(`Sl${index}`).style.backgroundColor = "#41862c";
    document.getElementById(`Sl${index}`).style.color = "white";
    for (var i = 0; i < array.length; i++) {
      if (i !== index) {
        document.getElementById(`Sl${i}`).style.backgroundColor = "white";
        document.getElementById(`Sl${i}`).style.color = "black";
      }
    }
  };

  return (
    <>
      <button id={`Sl${index}`} onClick={onClY} className="Home-slot">
        <div className="Home-slot-data">{`${hour}${
          min === 0 ? "" : `:${min}`
        } PM - ${hour + 1}${min === 0 ? "" : `:${min}`} PM`}</div>
      </button>
    </>
  );
};

export default Slot;
