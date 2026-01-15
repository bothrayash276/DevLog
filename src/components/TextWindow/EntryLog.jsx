import "../CustomFonts.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const EntryLog = () => {
    const {register, handleSubmit} = useForm()

    const formSubmission = (e)=>{
        console.log(e)
    }

  return (
    <>
      {/* Header */}
      <div className="container flex bg-[#0F172A] h-17 items-center px-4 justify-evenly border-b-2 border-slate-800">
        {/* Container that stores Name and Logo of the Website in Navbar */}
        <div className="flex flex-1 justify-center items-center gap-4">
          <img src="/asset/images/devlog.svg" className="w-9" />

          <span className="text-white text-xl font-[JetBrainsBold]">
            DevLog
          </span>
        </div>


        {/* Container that stores the Return and Save Button in Navbar */}
        <div className="container flex-1 flex justify-center">
            {/* Return Button */}
            <Link
            to="/mylogs/"
            className="text-[#94A3B8] flex gap-2 items-center font-[JetBrainsBold] text-[13px] px-6 py-1.5 mr-5 rounded-lg"
          >
            <img src="/asset/images/return.svg" alt="" className="w-4 h-4"/>
            RETURN
          </Link>
          {/* Save Button */}
          <Link
            to="/mylogs/newlog"
            className="text-white flex gap-1 font-[JetBrainsBold] text-[14px] bg-[#135BEC] px-3 py-1.5 rounded-lg"
          >
            <img src="/asset/images/save.png" alt="" className="w-5 h-5"/>
            SAVE
          </Link>
        </div>
      </div>

    {/* Stores Form */}
    <div className="flex flex-col">
        <form onSubmit={formSubmission()}>
            <input type="text" className=""/>
        </form>
    </div>
    </>
  );
};

export default EntryLog;
