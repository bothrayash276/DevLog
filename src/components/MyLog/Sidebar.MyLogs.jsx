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
        <Link to="/mylogs" className="flex gap-4 px-2 bg-[#135BEC] py-2 rounded-lg w-9/10 mx-2">
            <img src="asset/images/all_entries.svg" alt="" />
            <span className="text-white font-[JetBrains]">All Entries</span>
        </Link>
        <Link to="/mylogs/folders" className="flex gap-4 px-2 hidden:bg-[#135BEC] py-2 rounded-lg w-9/10 mx-2 my-2">
            <img src="asset/images/folder.svg" alt="" />
            <span className="text-white font-[JetBrains]">Folders</span>
        </Link>
      </div>
    </>
  );
};

export default Sidebar_MyLogs;
