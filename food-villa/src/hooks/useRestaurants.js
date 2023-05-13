import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "../constants";

const useRestaurant = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANT_LIST_URL);
    const response = await data.json();
    const restaurants = response.data?.cards[2]?.data?.data?.cards;
    setRestaurantsList(response.data?.cards[2]?.data?.data?.cards);
    console.log(restaurants);
  }
  return restaurantsList;
};
export default useRestaurant;
