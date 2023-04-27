import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { name, source, description, abv, ph, firstBrewed } = props;

  console.log(source);
  return (
    <div class="beer-card">
      <img src={`${source}`} />
      <h1 className="beer-card__name">{name}</h1>
      <p className="beer-card__description"> {description}</p>
      <p>{abv}</p>
      <p>{ph}</p>
      <p>{firstBrewed}</p>
    </div>
  );
};

export default Card;
