import React from "react";
import { Link } from "react-router-dom";
import { getSlug } from "../../../../utils/utilsStrings";
import PhoneImage from "../../../PhoneImage/PhoneImage";
import "./CardItem.css";

const CardItem = ({ phone }) => {
  const { manufacturer, name, price, imageFileName, id } = phone;
  const slug = getSlug(name);
  return (
    <Link to={`/phones/${id}/${slug}`} className="card-item-link">
      <div className="card-item">
        {imageFileName && <PhoneImage name={name} imageFileName={imageFileName} isCard />}
        <div className="card-item-container">
          <p>
            {manufacturer} {name}
          </p>
          <p>
            <strong>{price}€</strong>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
