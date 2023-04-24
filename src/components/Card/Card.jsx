import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, source, description } = props;

  console.log(source);
  return (
    <div class="beer-card">
      <img src={`${source}`} />
      <h1>{name}</h1>
      <p> {description}</p>
    </div>
  );
};

export default Card;
