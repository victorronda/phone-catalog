import React from "react";

const SpecsPhone = ({ specs }) => {
  const { color, manufacturer, processor, screen, ram, name, price } = specs;
  return (
    <>
      <h1>
        {manufacturer} {name}
      </h1>
      <hr />
      <h2>{price}€</h2>
      <p>
        <b>Color: </b>
        {color}
      </p>
      <p>
        <b>Screen: </b>
        {screen}
      </p>
      <p>
        <b>Processor: </b>
        {processor}
      </p>
      <p>
        <b>Ram: </b>
        {ram}
      </p>
    </>
  );
};

export default SpecsPhone;
