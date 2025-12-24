import React,{useState} from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
//use params give us a id of the page

const RestaurantMenu = () => {
  //control the restuarant category

  const [showIndex, setShowIndex] = useState(3);

  //this is how useparams use
  const { resId } = useParams();

  const { ResMenu } = useRestaurantMenu(resId);
  //the custom hooks
  // we ca manage our fetch and display the UI in seperate file of function also
  // const resMenu = useRestaurentMenu(resId) => we can create a custom hook to handle the useEffect a d statevariable in sperate file
  // on that tim ethe RestaurantMenu.js only focus on to display the UI only.

  const mainData = ResMenu?.cards?.find((c) => c.card?.card?.info).card?.card
    ?.info;

  const subCategory = ResMenu?.cards
    ?.find((c) => c.groupedCard)
    ?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("mainData", mainData);
  console.log("subcategory", subCategory);
  const {
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    sla,
  } = mainData || {};

  return ResMenu === null ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-16">
      <div className=" p-6">
        <i className="bi bi-arrow-left-short text-4xl p-2 m-2 bg-[#eb3d5aff]  rounded-xl"></i>
      </div>
      <div className="text-start text-2xl font-bold m-2 mt-6">
        <h1>{mainData.name}</h1>
      </div>
      <div className="rounded-xl border">
        <div className="flex justify-start items-center font-bold text-xl">
          <p className="p-6">
            <i className="bi bi-star-fill text-green-500"></i> {avgRatingString}{" "}
            <br></br>
            <span className="text-base">{totalRatingsString}</span>
          </p>
          <p>{costForTwoMessage}</p>
        </div>
        <div className="">
          <p className="text-base font-semibold text-[#daa520] ml-6">
            {cuisines.join(", ")}
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold  ml-6 m-4">{sla.slaString}</h3>
        </div>
      </div>
      {/*menu list */}
      <div className="mt-4">
        <div>
          <h1 className="text-center font-bold text-3xl">Recommemed</h1>
          <div className="p-6 m-2">
            {}
            <h1>
              {subCategory.map((category,index) => (
                //it is controlled component
                <RestaurantCategory
                  key={category.card?.card?.id}
                  data={category?.card?.card}
                  //based on index child will be react
                  showItems={index===showIndex?true:false}
                  setShowIndex={()=>setShowIndex(prev => (prev === index ? null : index))}
                />
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
