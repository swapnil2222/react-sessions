import { useEffect, useState } from "react";
import { RESTAURANT_INFO_URL } from "../constants";

const useRestaurantInfo = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo(x) {
    const data = await fetch(RESTAURANT_INFO_URL + id);
    const response = await data.json();
    setRestaurant(response.data);
  }
  return restaurant;
};
export default useRestaurantInfo;
