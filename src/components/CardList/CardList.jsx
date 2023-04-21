import React from "react";
import Card from "../Card/Card";
import beers from "../../data/beers";
import "./CardList.scss";

const CardList = () => {
  const cardList = beers.map((card) => {
    return (
      <Card
        source= {card.source}
        name={card.name}
        description={card.description}
      />
    );
  });

  return <div className="card-container">{cardList}</div>;
};

export default CardList;
