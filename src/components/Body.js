import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../hooks/useRestaurants";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const restaurantsList = useRestaurant();
  const isOnline = useOnline();
  
  if (restaurantsList.length === 0) return <Shimmer />;
  if(!isOnline) return <h1>🛑Looks like your offline, please check after sometime!!</h1>
  return (
    <div className="restaurant-list flex">
      {restaurantsList.map((restaurant, index) => {
        return (
          <Link
            to={"/restaurant/" + restaurant.data.id}
            key={index}
            style={{ "textDecoration": "none" }}
          >
            <RestaurantCard {...restaurant.data} />
          </Link>
        );
      })}
    </div>
  );
};

export default Body;
