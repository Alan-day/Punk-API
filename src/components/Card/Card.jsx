import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, source, description } = props;

  return (
    <div class="beer-card">
      <img src={`${source}`} />
      <h1>{name}</h1>
      <p> {description}</p>
    </div>
  );
};

export default Card;
