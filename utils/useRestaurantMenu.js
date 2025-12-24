import { useEffect, useState } from "react";
import { Menu_URL } from "./constraint";

const useRestaurantMenu = (resId) => {
  const [ResMenu, setResMenu] = useState(null);
 // const [ItemList, setItemList] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(Menu_URL + resId);

    const json = await data.json();
    setResMenu(
    json?.data
      // json?.data?.cards?.find((c) => c.card?.card?.info).card?.card?.info
    );
    console.log("resMenu", json);
    

   // setItemList(json?.data?.cards?.find((c) => c.groupedCard).groupedCard);
    console.log("useRestaurantMenu item list",
      json?.data?.cards
        ?.find((c) => c.groupedCard)

        .groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ).card?.card
    );
  };

  return { ResMenu };
};

export default useRestaurantMenu;
