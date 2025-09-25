import {useState} from "react";

const Sample=()=>{
const [Name,setName]=useState("");

return(



  <div>
<input className="p-4 bg-blue-300" type="text" placeholder="enter the name" value={Name} onChange={(e)=>setName(e.target.value)} />

<p>Hello,{Name}</p>
  </div>
)
};

export default Sample;