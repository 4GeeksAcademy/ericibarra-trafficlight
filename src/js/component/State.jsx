import React, { useEffect, useState } from "react";
import Trafficlight from "./Trafficlight.jsx";

function State() {
    const [color, setColor] = useState("red");
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);

        if ( (counter === 10 && (color === "green" || color === "red")) || (counter === 3 && color === "yellow")) {
            changeColor();
            setCounter(0);
        }

        return () => clearInterval(intervalId);
    }, [counter]);

    const changeColor = () => {
        if (color === "red") {
            setColor("green");
        }else if (color === "green") {
            setColor("yellow");
        }
        else if (color === "yellow") {
            setColor("red");
        }
    };
  
    return (
      <div className="container">
        <Trafficlight activeColor={color} />
        <div className="contador">Counter: {counter}</div>
      </div>
    );
  }

export default State;