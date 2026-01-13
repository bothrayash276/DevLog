import React from "react";
import { Link } from "react-router-dom";
import "./CustomFonts.css";

const Navbar = () => {
  return (
    <>
    {/* Container of the Navbar */}
      <div className="container flex bg-[#0F172A] h-17 items-center px-4 justify-evenly border-b-2 border-slate-800">

        {/* Container that stores Name and Logo of the Website in Navbar */}
        <div className="flex flex-2 items-center gap-4">
            <div className="bg-[#135BEC] p-2 rounded-lg">
          <img src="asset/images/logo.svg" className="w-6" />
            </div>
          <span className="text-white text-xl font-[JetBrainsBold]">DevLog</span>
        </div>

        {/* Container that stores Link Routes to Home and MyLog in Navbar */}
        <div className="container flex-1 flex justify-center gap-10">
            <Link to="/" className="text-white text-[14px] font-[JetBrains]">Home</Link>
            <Link to="/mylogs" className="text-white text-[14px] font-[JetBrains]">MyLogs</Link>
        </div>

        {/* Container that stores the Create a Log Button in Navbar */}
        <div className="container flex-10 flex justify-end">
            <button className="text-white font-[JetBrainsBold] text-[14px] bg-[#135BEC] px-6 py-[6px] rounded-lg">Start Your Log</button>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
