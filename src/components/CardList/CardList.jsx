import React from "react";
import Card from "../Card/Card";

import "./CardList.scss";

const CardList = (props) => {
  const { beerCards } = props;

  const cardList = beerCards.map((card) => {
    return (
      <Card
        source={card.image_url}
        name={card.name}
        description={card.description}
        abv={card.abv}
        ph={card.ph}
        firstBrewed={card.first_brewed}
      />
    );
  });

  return <div className="card-container">{cardList}</div>;
};

export default CardList;
