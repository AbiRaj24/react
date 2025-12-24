import { useState,useEffect, useContext } from "react";
import {useNavigate,Link} from "react-router-dom";
import useCheckOnlineStatus from "../../utils/useCheckOnlineStatus";
import UserContext from "../../utils/UseContext";



const Header = () => {

 
//How use Effect render in difference uses

//1. dependency array is not present in useeffect => useeffect will call every single time in whle rendering.
//eg: useEffect(()=>{}) -> there is one call back function only with no dependency array

//2. dependency array is empty => useeffect wil call on initial render only. just one time
// eg: useEffect(()=>{},[])

//3. if dependecny array is btnName (state variable)=> useEffect called everytime while btnName is called
//eg: useEffect(()=>{},[btnName])

const navigate=useNavigate();

//usecontext

const sampleContext=useContext(UserContext);
console.log(sampleContext);

useEffect(()=>{console.log("useEffect render")},[])
const onlineStatus=useCheckOnlineStatus();

  const [btnName, setBtnName] = useState("login");
  return (
    <header>
      <div className="logo-container">
        <img alt="website logo" />
      </div>
      <nav>
        <ul className="">
          <li><Link to="/">Home</Link></li>
          <li>online Status :{onlineStatus ? "green" : "red"} </li>
          <li>links</li>
          <li>Search</li>
          <li>Order</li>
          <li className="font-bold">{sampleContext.loggedUser}</li>
          
          <li><Link to="/Contact">Contact us</Link></li>
          <li onClick={() => navigate("/EventLanding")}>event</li>
          <button
            onClick={() => {
              btnName === "login" ? setBtnName("Logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
