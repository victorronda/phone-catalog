import React, { useContext } from "react";
import PhoneContext from "../../../../context/phones-context";
import CardItem from "../CardItem/CardItem";

const CardList = () => {
  const { phones } = useContext(PhoneContext);
  return (
    <div>
      {phones && phones.map((phone) => (
        <CardItem phone={phone} />
      ))}
    </div>
  );
};

export default CardList;
