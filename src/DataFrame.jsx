/** @format */

import React, { useState } from "react";

const DataFrame = (props) => {
  const [data, setData] = useState([]);

  const process = () => {
    props.getSlotData(data[props.index].available);
  };

  let date = new Date(props.date);

  fetch(
    "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json"
  )
    .then((res) => res.json())
    .then((json) => {
      setData(json);
    });

  const onClX = () => {
    document.getElementById(props.index).style.backgroundColor = "#41862c";
    document.getElementById(props.index).style.color = "white";
    for (var i = 0; i < props.array.length; i++) {
      if (i !== props.index) {
        document.getElementById(i).style.backgroundColor = "white";
        document.getElementById(i).style.color = "black";
      }
    }
  };

  let dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <button
        id={props.index}
        className="Home-date"
        onClick={() => {
          process();
          onClX();
        }}
      >
        <div className="Home-date-day">{dayName[date.getDay()]}</div>
        <div className="Home-date-date">{date.getDate()}</div>
        <div className="Home-date-month">{monthName[date.getMonth()]}</div>
      </button>
    </>
  );
};

export default DataFrame;
