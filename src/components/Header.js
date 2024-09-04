import React from "react";
import { Link } from "react-router-dom";
import image from "../utils/logo.png"
import Nav from "./Navbar";



const Header = () => {
  return (
    <div className="flex text-white items-center justify-between h-[14vh]  px-8 bg-black border border-white border-solid"style={{ zIndex: 2 }}>
      <div className="logo">
        <Link to="/"><img
          src={image}
          alt="logo"
          className="h-16 rounded-full mx-2"
        /></Link>
        
      </div>

      {/* <div className="header-items flex ">
        <ul className="flex space-x-16">
          <li className="cursor-pointer hover:underline  hover:underline-offset-8 "><Link to="/">Home</Link></li>
          <li className="cursor-pointer hover:underline  hover:underline-offset-8 "><Link to="/Project">Projects</Link></li>
          <li className="cursor-pointer hover:underline  hover:underline-offset-8 "><Link to="/Contact">Contact</Link></li>
        </ul>
        
      </div> */}
         
      <Nav/>
      {/* <Curve/> */}
      
      
    </div>
  );
};

export default Header;

