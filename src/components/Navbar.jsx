import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container flex bg-[#0F172A] h-17 items-center px-4 justify-evenly border-b-2 border-slate-800">
        <div className="flex flex-2 items-center gap-4">
            <div className="bg-[#135BEC] p-2 rounded-lg">
          <img src="asset/images/logo.svg" className="w-6" />
            </div>
          <span className="text-white text-xl font-[JetBrainsBold]">DevLog</span>
        </div>
        <div className="container flex-1 flex justify-center gap-10">
            <Link to="/" className="text-white text-[14px] font-[JetBrains]">Home</Link>
            <Link to="/mylogs" className="text-white text-[14px] font-[JetBrains]">MyLogs</Link>
        </div>
        <div className="container flex-10 flex justify-end">
            <button className="text-white font-[JetBrainsBold] text-[14px] bg-[#135BEC] px-6 py-[6px] rounded-lg">Start Your Log</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
