import React from 'react'

const CardItem = ({phone}) => {
    const { manufacturer, name, price, imageFileName } = phone;
  return (
    <div>
    {console.log(imageFileName)}
        <img src={`http://localhost:3030/${imageFileName}`} alt={name} />
        <p>{manufacturer}</p>
        <p>{name}</p>
        <p>{price}€</p>
    </div>
  )
}

export default CardItem