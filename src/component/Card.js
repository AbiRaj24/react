import {useContext} from "react";
import UserContext from "../../utils/UseContext";


const Card=(props)=>{
    const {id,name,cloudinaryImageId}=props.resData;

    const {loggedUser}=useContext(UserContext);
    return(
    <div className="card-box">
        <div className="res-img">
           {<img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt=""/>} 
        </div>
        <div className="details">
            <h1>{name}</h1>
            <div className="dis-rate">
                 <h2></h2>
            <h2>{id}</h2>
            <h2>name:{loggedUser}</h2>
            </div>
           
        </div>
    </div>
)}


//higher order component
//get the card as a input => make some changes => return the card
export const withPromotedLabel=(Card)=>{
return(props)=>{//return function by higher order(enhance)
    return(//return jsx
        <div>
        <label className="bg-black absolute m-2 p-2 px-4 text-white font-medium rounded-md">veg</label>
        <Card {...props}/>
        </div>
    )
}
}

export default Card;