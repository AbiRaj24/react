import  {useRouteError} from "react-router-dom"

const Error=()=>{
   const err=useRouteError();
    console.log(err)
return(
    <>
    <h1>OOPS......</h1>
    <h2>Somethong went wrong...</h2>
    <h3>{err.status}</h3>
    <h3>{err.statusText}</h3>
    </>
)
}

export default Error;