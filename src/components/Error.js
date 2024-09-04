import React from "react";
import image from "../utils/error.png"
import { Link } from "react-router-dom";


const Error=()=>{
    return(
        <div className="flex items-center justify-center h-[100vh] text-white">
           

         <div className="h-[80%] w-8/12  flex items-center justify-center flex-col">
         <Link to={"/"} className="text-2xl font-bold">Home</Link>
        <img src={image} alt=""  className="h-[80%] w-[80%] mt-10"/>
        </div>
        </div>
      
    )
}

export default Error;