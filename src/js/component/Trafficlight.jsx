import React from "react";

function Trafficlight({ activeColor }) {
  return (
    <div className="traffic">
      <div className={`red light ${activeColor === "red" ? "active" : ""}`}></div>
      <div className={`yellow light ${activeColor === "yellow" ? "active" : ""}`}></div>
      <div className={`green light ${activeColor === "green" ? "active" : ""}`}></div>
    </div>
  );
}

export default Trafficlight;