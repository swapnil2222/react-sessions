import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  avgRating,
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
  costForTwoString,
}) => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={IMG_CDN_URL + cloudinaryImageId}
      ></img>
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <div className="sub-info">
          <div className="rating">
            <span>&#9734;</span>
            <span>{avgRating} </span>
          </div>
          <div className="lastMile">
            <span>{lastMileTravelString} away</span> 
          </div>
          <div className="costForTwoString">
            <span>{costForTwoString}</span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
