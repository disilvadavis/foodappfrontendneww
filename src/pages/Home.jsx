// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container">
      <h1>Welcome to Food Delivery App</h1>
      <p>Discover a wide variety of delicious meals from restaurants near you.</p>
      <Link to="/restaurants">
        <button>Explore Restaurants</button>
      </Link>
    </div>
  );
};

export default Home;
