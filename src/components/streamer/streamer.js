import React from "react";
import "./streamer.css";
const Streamer = (props) => {
  return (
    <div className="scoreboard">
      <div>{props.index}</div>
      <div>
        <img src={props.picture} alt={props.displayName}></img>
      </div>
      <div>{props.displayName}</div>
      <div>{props.score}pt</div>
    </div>
  );
};

export default Streamer;
