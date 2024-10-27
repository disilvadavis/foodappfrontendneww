// RestaurantCard.jsx

import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={restaurant.imageUrl || 'download.jpg'} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.description}</p>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
};

export default RestaurantCard;
