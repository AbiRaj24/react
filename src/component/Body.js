import useCheckOnlineStatus from "../../utils/useCheckOnlineStatus";
import Card, { withPromotedLabel } from "./Card";
import Shimmer from "./shimmer";
//import ResObj from "../../utils/constraint";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  //restaurant card dynamic
  const [Restaurants, setRestaurants] = useState([]);
  //search box
  const [searchText, setSearchText] = useState("");

  //higher order function
  const RestaurantCardPromoted = withPromotedLabel(Card);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //const data = await fetch(
    // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.9584554&lng=79.38850269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //);
    //https://swiggy-api-4c740.web.app/swiggy-api.json
    const data = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    // const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=11.1017705&lng=79.6525686&carousel=true&third_party_vendor=1");
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const json = await data.json();
    console.log(
      json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("restaurant_grid_listing_v2")
      ).card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const restaurantData = json?.data?.cards?.find((item) =>
      item?.card?.card?.id?.includes("restaurant_grid_listing_v2")
    ).card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurants(restaurantData);
  };

  //this is conditional rendering --> render based on condition is called conditional rendering
  // if(Restaurants.length === 0){
  //   return <Shimmer/>
  // }
  //ternary operator

  const OnlineStatus = useCheckOnlineStatus();

  if (OnlineStatus === false) {
    console.log("offline");
    return (
      <h1 className="text-[50px] text-center">seems like you're offline</h1>
    );
  }

  return Restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="search-bar">
        <div className="search-input">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filter = Restaurants.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setRestaurants(filter);
              console.log(filter);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filterRes = Restaurants.filter(
              (res) => res?.info?.avgRating >= 4.5
            );
            setRestaurants(filterRes);
            console.log("filter restaurants", filterRes);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res-container">
        {Restaurants.map((res) => (
          <Link to={"restaurants/" + res?.info?.id} key={res?.info?.id}>
            {" "}
            {res?.info?.veg?
            (<RestaurantCardPromoted resData={res?.info} />)
             :
            (<Card resData={res?.info} />)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
