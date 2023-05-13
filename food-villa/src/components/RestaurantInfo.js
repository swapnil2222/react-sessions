import { useParams } from "react-router";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../hooks/useRestaurantInfo";

const RestaurantInfo = () => {

  const { id } = useParams();
  const restaurant = useRestaurantInfo(id);

  if(!restaurant) return <Shimmer />;

  return (
    <div className="restaurant-info flex">
      <div className="">
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}></img>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="restaurant-menu">
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
