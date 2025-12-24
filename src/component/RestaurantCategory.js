import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    console.log(data)
   //const[isOpen,setIsOpen]=useState(null);

    const handleClick=()=>{
     ///  console.log("clicked");
      
        setShowIndex()
    }
return(
    <div>
        
        <div className="w-8/12 py-6  mx-auto my-4  bg-white rounded-lg shadow-lg cursor-default  " onClick={handleClick}>
            <div className="flex justify-between items-center">
            <span className="px-6 py-4 text-2xl font-medium">{data.title} ({data.itemCards.length})</span>
            <span className="px-6 py-4 text-2xl font-medium" ><i className="bi bi-chevron-down" ></i></span>
            </div>
           {showItems && <ItemList key={data.itemsCards?.id} items={data.itemCards}/>}   
        </div>
      
    </div>
)
}
export default RestaurantCategory;