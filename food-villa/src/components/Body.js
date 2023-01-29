import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    const restaurants = response.data?.cards[2]?.data?.data?.cards;
    setRestaurantsList(response.data?.cards[2]?.data?.data?.cards);
    console.log(restaurants);
  }
  if (restaurantsList.length === 0) return <Shimmer />;
  return (
    <div className="restaurant-list flex">
      {restaurantsList.map((restaurant, index) => {
        return <RestaurantCard key={index} {...restaurant.data} />;
      })}
    </div>
  );
};

export default Body;
