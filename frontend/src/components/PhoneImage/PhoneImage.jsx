// Poner si es card o es en details y renderizar unos styles u otros
import React from "react";
import './PhoneImage.css'

const PhoneImage = ({ imageFileName = '', name, isCard = false }) => {
  if(!imageFileName) {
    return;
  }
  return (
    <>
      <img
        src={`${process.env.REACT_APP_BACKEND_URI}/${imageFileName}`}
        alt={name}
        className={isCard ? "card-item-img" : "phone-detail-img"}
      />
    </>
  );
};

export default PhoneImage;
