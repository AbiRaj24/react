import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
constructor(props){
    super(props);
    console.log("parent conctructor");
}

componentDidMount(){
    console.log("parent did mount");
}
render(){
    console.log("parent render")
    return (
        <>
        <h1>About us page</h1>
        <User name="Abinaya(function)"/>
        <UserClass name={"First"} location="Chennai-Class"/>
        </>
    )
}


}


// const About=()=>{
//     return (
//         <>
//         <h1>About us page</h1>
//         <User name="Abinaya(function)"/>
//         <UserClass name="Abinaya(class Component)" location="Chennai-Class"/>
//         </>
//     )
// }


export default About;