import React from "react";

const Footer = () => {
  return (
    <>
      {/* Black Strip Container - All content is in this */}
      <div className="bg-black flex justify-center items-center gap-15 mt-12 overflow-hidden">
        {/* Contains the Logo and name of the website with website's description */}
        <div className="flex flex-col w-[20vw] not-md:w-1/2 gap-4 py-3">
          {/* Contains Image and Website Name */}
          <div className="container flex gap-4 items-center">
            <img src="asset/images/devlog.svg" className="w-9" alt="" />
            <span className="text-white font-[JetBrainsBold] text-xl">
              DevLog
            </span>
          </div>
          {/* Description of the website */}
          <span className="text-[#94A3B8] text-xs font-[JetBrains]">
            A Daily Journal Website for Programmers who can write their all day
            longs struggles.
          </span>
        </div>
        {/* Contains the Links and Redirects to my social handles */}
        <div className="flex flex-col gap-4 h-1/1 py-6 ">
          {/* Heading */}
          <span className="text-xs font-[JetBrains] text-[#94A3B8]">
            HANDLES
          </span>
          {/* GitHub */}
          <div className="flex gap-2">
            <img src="asset/images/github.svg" alt="" />
            <a href="https://github.com/bothrayash276/" target="_blank" className="text-white font-[JetBrains] text-xs hover:underline underline-offset-4">
              GitHub
            </a>
          </div>
          {/* LinkedIn */}
          <div className="flex gap-2">
            <img src="asset/images/linkedin.svg" alt="" />
            <a href="https://www.linkedin.com/in/yashbothra1" target="_blank" className="text-white font-[JetBrains] text-xs hover:underline underline-offset-4">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
