import React from "react";
import { Link } from "react-router-dom";

// SCRIPT
function Start() {
  return (
    <div className="StartContainer bg-[#2B292A] w-screen h-screen flex flex-col justify-between">
      <img src="/269.png" className="backgroundImage1 w-full h-1/2" />
      <div className="text-center text-6xl font-bold my-4"> 
        <span className="text-[#93D8A2]">Eat </span> 
        <span className="text-white">Well,</span>
        <br />
        <span className="text-[#93D8A2]">Fell </span>
        <span className="text-white">Well,</span>
        <br />
        <span className="text-[#93D8A2]">Live </span>
        <span className="text-white">Well.</span>
      </div> 
      <div className="buttonContainer flex justify-between w-screen">
        <button className="px-5 bg-[#2B292A] border-none z-[1] flex items-center">
          <img src="/options.png" alt="options" />
        </button>
        <button className="bg-[#2B292A] border-none z-[1] flex items-center">
          <Link to="/Login">
            <img src="/continue.png" alt="Continue" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Start;