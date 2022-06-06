// Poner si es card o es en details y renderizar unos styles u otros
import React from "react";
import './PhoneImage.css'

const PhoneImage = ({ imageFileName = '', name, isCard = false }) => {
  if(!imageFileName) {
    return;
  }
  const serverRootPath = process.env.REACT_APP_BACKEND_URI || 'http://localhost:3030';
  return (
    <>
      <img
        src={`${serverRootPath}/${imageFileName}`}
        alt={name}
        className={isCard ? "card-item-img" : "phone-detail-img"}
      />
    </>
  );
};

export default PhoneImage;
