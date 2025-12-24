const ItemList = ({ items }) => {
  console.log("items", items);
  console.log("item card", items[0].card);
  return (
    <>
      {items.map((item) => (
        <div key={item.card.id} className="m-2 p-4 flex justify-between items-start border-b-2 border-gray-200">
          <div className="mt-6" key={item.card.id}>
            <h2 key={item.card.id} className="text-stone-800 font-medium text-lg">
              {item.card.info.name}
            </h2>
            <p key={item.card.id}> <i className="bi bi-currency-rupee"></i>{item.card.info.price?item.card.info.price / 100:item.card.info.defaultPrice/100}</p>
            {/* <p key={item.card.id}>{item.card.info.ratings.aggre}</p> */}
          </div>
          <div key={item.card.id} className="relative rounded-lg m-6">
            <div className="w-40 h-40">
            
            <img key={item.card.id} className="rounded-lg w-full h-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item.card.info.imageId} />
         </div>
         <button className="absolute left-6 bottom-5 bg-red-500 rounded-md px-4 py-2 text-white  text-2xl font-bold">ADD +</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
