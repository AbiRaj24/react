import { useEffect, useState } from "react";
import { Menu_URL } from "./constraint";

const useRestaurantMenu = (resId) => {
  const [ResMenu, setResMenu] = useState(null);
  // const [DishList, setDishList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  const data = await fetch(`${Menu_URL}234875`);
  const json = await data.json();
  setResMenu(
    json?.data?.cards?.find((c) => c.card?.card?.info).card?.card?.info
  );
  console.log(json?.data);
  return ResMenu;
};
};



export default useRestaurantMenu;

//  useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       Menu_URL + resId
//     );
//     const json = await data.json();
//     //setResMenu(json?.data?.cards[2]?.card?.card?.info);
//     setResMenu(json?.data?.cards?.find((c)=>c.card?.card?.info).card?.card?.info)
//    console.log(json?.data?.cards?.find((c)=>c.card?.card?.info).card?.card?.info)
//     console.log(
//      json?.data?.cards?.find((c)=>c.groupedCard?.cardGroupMap?.REGULAR.cards.find(
//       (item) => item.card?.card?.title?.includes("Biryani")
//   ).card?.card?.itemCards).groupedCard?.cardGroupMap?.REGULAR.cards.find(
//        (item) => item.card?.card?.title?.includes("Biryani")
//     ).card?.card?.itemCards
//    );
//     setDishList(
//       json?.data?.cards?.find((c)=>c.groupedCard).groupedCard?.cardGroupMap?.REGULAR.cards.find(
//         (item) => item.card?.card?.title?.includes("Biryani")
//       ).card?.card?.itemCards
//     );
//   };
