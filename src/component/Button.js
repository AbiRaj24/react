import { useState } from "react";


const Button = () => {
    const [visible, setVisible] = useState(true);
  return (
    <>
      <button onClick={()=>setVisible(!visible)} className="bg-[#ccc] text-black p-4 m-4 rounded-md ">
        Press Me
      </button>
      {visible ? (
        <div className="m-4 bg-red-500 w-[200px] h-[200px]"></div>
      ) : (
        <div className="m-4 bg-blue-500 w-[200px] h-[200px]"></div>
      )}
    </>
  );
};

export default Button;
