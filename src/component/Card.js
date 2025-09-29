


const Card=(props)=>{
    const {id,name,cloudinaryImageId}=props.resData;
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
            </div>
           
        </div>
    </div>
)}


//higher order component

export const withPromotedLabel=(Card)=>{
return(props)=>{
    return(
        <div>
        <label className="bg-black absolute m-2 p-2 text-white font-medium rounded-md">veg</label>
        <Card {...props}/>
        </div>
    )
}
}

export default Card;