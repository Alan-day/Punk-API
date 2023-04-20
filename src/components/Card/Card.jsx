import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div class="beer-card">
      <img src={props.source} />
      <h1>{props.name}</h1>
      <p> {props.description}</p>
    </div>
  );
};

export default Card;
