import React from "react";
import "../CustomFonts.css";
import { Link } from "react-router-dom";

const Banner_Homepage = () => {
  return (
    <>
      {/*Container for two sides of banner*/}
      <div className="flex h-[80vh]">
        {/* Container of left side*/}
        <div className="flex-1 flex flex-col justify-center items-center gap-4">
          {/* Shows "Document your" text */}
          <span className="text-white font-[JetBrainsBold] text-6xl">
            Document your
          </span>

          {/* Shows "code journey." text */}
          <span className="text-[#135BEC] font-[JetBrainsBold] text-6xl">
            code journey.
          </span>

          {/* Shows the paragraph written in the left container */}
          
          {/* Container for left side buttons */}
          <div className="mt-10">

            {/* Button on Banner to create a new log */}
            <Link to="/mylogs/newlog" className="text-white bg-[#135BEC] font-[JetBrainsBold] py-4 px-8 rounded-lg mr-4">Create a New Log</Link>
            <Link to="/mylogs" className="text-white bg-[#1E293B] font-[JetBrainsBold] py-4 px-8 rounded-lg border border-slate-700">My Logs</Link>
          </div>

        </div>

        {/* Container for right side of the banner*/}
        <div className="flex flex-col items-center justify-center flex-1 p-4">

          {/* Header of the window of the journal */}
          <div className="bg-slate-800 h-13 w-8/10 flex items-center p-2 rounded-t-2xl border border-slate-700">
            <span className="h-3 w-3 rounded-full bg-red-500 ml-3 mr-1"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-300 mx-1"></span>
            <span className="h-3 w-3 rounded-full bg-green-500 mx-1"></span>
            <div className="flex-1 flex justify-center">
              <span className="text-slate-400 font-[JetBrains] ">
                ~user/logs/mylogs/recent.log
              </span>
            </div>
            <img src="asset/images/settings.svg" className="mr-3" />
          </div>

          {/* The acutal window of the journal */}
          <div className="bg-slate-800 h-110 w-8/10 flex flex-col p-2 px-4 gap-5 rounded-b-2xl border border-slate-700">
            {/* The Timing */}
            <span className="text-slate-500 font-[JetBrains] mt-3 ">
              # 29 Feb : Created a Sum Code in C++
            </span>

            {/* The journal entry */}
            <span className="text-stone-100 font-[JetBrains]">
              I am currently at the library. This is the winter season and my
              hands are freezing
            </span>

            {/* Container for the code inside the journal */}
            <div className="flex justify-center flex-1 pt-2">
              {/* Code inside the journal */}
              <div className="container bg-[#0F172A] w-8/10 h-8/10 min-h-52.5 max-h-60 rounded-lg p-2">
                {/* Shows #include <iostream>; */}
                <p className="mb-5">
                  <span className="text-pink-500 font-[JetBrains] mr-2">
                    #include
                  </span>
                  <span className="text-blue-400">&#60;iostream&#62;</span>
                  <span className="text-white font-[JetBrains]">;</span>
                </p>

                {/* Shows int main() { */}
                <p>
                  <span className="text-pink-500 font-[JetBrains] mr-2">
                    int
                  </span>
                  <span className="text-blue-400 font-[JetBrains] mr-2">
                    main&#40;&#41;
                  </span>
                  <span className="text-yellow-500 font-[JetBrains]">
                    &#123;
                  </span>
                </p>

                {/* Shows declaration and initialization of a and b */}
                <p>
                  <span className="text-pink-500 font-[JetBrains] ml-10 mr-2">
                    int
                  </span>
                  <span className="text-orange-400 font-[JetBrains]">
                    a <span className="text-white font-[JetBrains]">=</span> 10,
                    b <span className="text-white font-[JetBrains]">=</span> 20
                  </span>
                  <span className="text-white font-[JetBrains]">;</span>
                </p>

                {/* Shows the cout function */}
                <p>
                  <span className="text-green-400 font-[JetBrains] ml-10 mr-2">
                    cout
                  </span>
                  <span className="text-pink-200 font-[JetBrains]">
                    &#60;&#60;
                  </span>
                  <span className="text-orange-400 font-[JetBrains] ml-2">
                    a<span className="text-white font-[JetBrains] mx-2">+</span>
                    b
                  </span>
                  <span className="text-white font-[JetBrains]">;</span>
                </p>

                {/* Ending the of the main() function */}
                <p>
                  <span className="text-yellow-400 font-[JetBrains]">
                    &#125;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner_Homepage;
