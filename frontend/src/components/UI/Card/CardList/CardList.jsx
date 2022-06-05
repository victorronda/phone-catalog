import React, { useContext } from "react";
import PhoneContext from "../../../../context/phones-context";
import CardItem from "../CardItem/CardItem";
import './CardList.css';

const CardList = () => {
  const { phones } = useContext(PhoneContext);
  return (
    <div className="card-list">
      {phones.map((phone) => (
        <CardItem key={phone.id} phone={phone} />
      ))}
    </div>
  );
};

export default CardList;
