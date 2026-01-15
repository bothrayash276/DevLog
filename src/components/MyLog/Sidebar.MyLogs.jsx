import React from "react";
import { Link } from "react-router-dom";



const Sidebar_MyLogs = () => {

  return (
    <>
      <div className="h-[90vh] w-[17vw] border border-slate-800 flex flex-col">
        {/* DevJournal heading */}
        <span className="text-white text-xl font-[JetBrainsBold] my-4 mx-2">
          DevJournal
        </span>
        {/* Tab Container */}
        <Link to="/mylogs" id="allEnt" className="flex gap-4 px-2 py-2 bg-[#135BEC] rounded-lg w-9/10 mx-2">
            <img src="asset/images/all_entries.svg" alt="" />
            <span className="text-white font-[JetBrains]">All Entries</span>
        </Link>
        
      </div>
      {console.log(isFolder)}
    </>
  );
};

export default Sidebar_MyLogs;
