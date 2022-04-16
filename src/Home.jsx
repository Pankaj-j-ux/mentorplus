/** @format */

import React, { useState } from "react";

import DataFrame from "./DataFrame";
import Slot from "./Slot";

const Home = () => {
  const [data, setData] = useState([]);
  const [slot, setSlot] = useState([]);

  const getSlotData = (data) => {
    setSlot(data);
  };

  // API FETCH
  fetch(
    "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json"
  )
    .then((res) => res.json())
    .then((json) => {
      setData(json);
    });

  return (
    <>
      <div className="Home">
        <i id="Home-back" className="fa-solid fa-arrow-left"></i>

        <h1>Book Demo session Slot</h1>

        <div className="Home-design">
          <div className="Home-design-1"></div>
          <div className="Home-design-2"></div>
        </div>

        <h2>Select Date</h2>

        <div className="Home-dates">
          {data.map(({ date }, i, arr) => {
            return (
              <DataFrame
                date={date}
                index={i}
                key={i}
                array={arr}
                getSlotData={getSlotData}
              />
            );
          })}
        </div>

        <h2 className="Home-slot-title">Select Slot</h2>

        <div className="Home-slots">
          {slot.map(({ hour, min }, index, arr) => {
            return (
              <Slot
                array={arr}
                index={index}
                key={index}
                hour={hour}
                min={min}
              />
            );
          })}
        </div>
        <button className="Home-pay-btn">Proceed to Pay</button>
      </div>
    </>
  );
};

export default Home;
