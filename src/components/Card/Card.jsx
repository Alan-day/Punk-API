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
      <p className="beer-card__parameters">Alcohol volume: {abv}%</p>
      <p className="beer-card__parameters">Acidity: {ph}</p>
      <p className="beer-card__parameters">Released in: {firstBrewed}</p>
    </div>
  );
};

export default Card;
