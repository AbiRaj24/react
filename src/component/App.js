import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Error from "./Error";
import Sample from "./Sample";
import RestaurantMenu from "./RestaurantMenu";
import Contact from "./Contact";
import Button from "./Button";
import UserContext from "../../utils/UseContext";

const App = () => {

const[Username,setUserName]=useState();

useEffect(()=>{

const data={
  name:"abinaya"
}
console.log(data);

setUserName(data.name)
},[])


  return (
    <UserContext.Provider value={{loggedUser : Username}}>
        <div className="App">
          <UserContext.Provider value={{loggedUser : "Master"}}>
      <Header />
      </UserContext.Provider>
     <Outlet/>
    </div>
    </UserContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },

      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/button",
        element:<Button/>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
       {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
