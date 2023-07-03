import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

function SimpleCounter(props) {
  return (
    <div className="theCounter">
      <div className="clock">
        <i className="fas fa-clock"></i>
      </div>
      <div className="hours">{props.digitHours}</div>
      <div className="minutes">{props.digitMinutes}</div>
      <div className="tenSeconds">{props.digitTensSeconds}</div>
      <div className="seconds">{props.digitSeconds}</div>
    </div>
  );
}

let counter = 0;
setInterval(function () {
  const hours = Math.floor(counter / 3600);
  const minutes = Math.floor((counter % 3600) / 60);
  const tenSeconds = Math.floor((counter % 60) / 10);
  const seconds = counter % 10;
  console.log(seconds, tenSeconds, minutes, hours);
  counter++;
  ReactDOM.render(
    <SimpleCounter
      digitSeconds={seconds}
      digitTensSeconds={tenSeconds}
      digitMinutes={minutes}
      digitHours={hours}
    />,
    document.querySelector("#app")
  );
}, 1000);
