import React, { useState } from "react";
import Sidebar_MyLogs from "./MyLog/Sidebar.MyLogs";
import EntryCard_MyLogs from "./MyLog/EntryCard.MyLogs";

const MyLogs = () => {
  const storage = JSON.parse(localStorage.getItem("userLog")) || [];
  const [render, setRender] = useState(0)

  return (
    <>
      <div className="flex justify-center">
        <div id="sidebar">
          <Sidebar_MyLogs />
        </div>
        <div className="flex-1 flex justify-center pt-10">
          {/* A container for all the entry cards */}
          <div id="entryContainer" className="w-18/20 flex flex-col gap-5">
            {storage.map((item) => {
              return <EntryCard_MyLogs key={item._id} props={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLogs;
