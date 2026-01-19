import "../CustomFonts.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { save } from "../TextWindow/localStorageHandler";
import SaveLocalStorage from "../TextWindow/SaveLocalStorage";
import { useState } from "react";

const EditWindow_MyLogs = () => {
  const { id } = useParams();
  let props;
  let storage = JSON.parse(localStorage.getItem("userLog"));
  for (let i = 0; i < storage.length; i++) {
    if (storage[i]._id === id) {
      props = storage[i];
    }
  }

  const { register, handleSubmit } = useForm({
    defaultValues: { title: props.title, body: props.body },
  });
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  const formSubmission = (e) => {
    storage = storage.filter(obj => obj._id !== id)
   const createEntry = {
        _id : id,
        title: e.title,
        body: e.body
    }
    // Pushing the data into array
    storage.push(createEntry)
    // Uploading the data to Local Storage
    localStorage.setItem("userLog", JSON.stringify(storage))
}

  const saveAnimation = () => {
    setTimeout(() => {
      setIsSaved(false);
      navigate("/mylogs");
    }, 500);
  };

  return (
    <>
      {/* Header */}
      <div className=" flex bg-[#0F172A] h-17 items-center px-4 justify-evenly border-b-2 border-slate-800">
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
          <button
            onClick={() => navigate(-1)}
            className="text-[#94A3B8] flex gap-2 items-center font-[JetBrainsBold] text-[13px] px-6 py-1.5 mr-5 rounded-lg"
          >
            <img src="/asset/images/return.svg" alt="" className="w-4 h-4" />
            RETURN
          </button>
          {/* Save Button */}
          <Link
            to="/mylogs"
            className="text-white flex items-center gap-3 font-[JetBrainsBold] text-[14px] bg-[#135BEC] px-3 py-1.5 rounded-lg"
          >
            <img src="/asset/images/mylogs.svg" alt="" className="w-4 h-4" />
            MY LOGS
          </Link>
        </div>
      </div>

      <div className={isSaved ? "position: fixed right-5 mt-3" : "hidden"}>
        <SaveLocalStorage />
      </div>
      {/* Stores Form */}
      <div className="flex flex-col w-1/1 items-center relative">
        <form
          onSubmit={handleSubmit((data) => formSubmission(data))}
          className="flex flex-col gap-10 w-8/10 items-center justify-center"
        >
          {/* Title Input */}
          <input
            type="text"
            className="text-white font-[JetBrainsBold] w-1/1 h-auto text-5xl border-b-2 border-[#1A45A6] p-3 placeholder:text-slate-800 focus:outline-none"
            placeholder="Untitled Entry"
            // value={props.title}
            {...register("title")}
          />
          {/* Paragraph Input */}
          <textarea
            className="text-white font-[JetBrains] w-1/1 min-h-100 p-3 field-sizing-content resize-none  placeholder:text-slate-800 focus:outline-none"
            placeholder="Start writing your developer's log..."
            // value={props.body}
            {...register("body")}
          ></textarea>
          {/* Submit Button */}
          <input
            type="submit"
            value="SAVE"
            onClick={() => {
              setIsSaved(true);
              saveAnimation();
            }}
            className="text-white bg-[#2563EB] font-[JetBrainsBold] rounded-lg px-4 py-2"
          />
        </form>
      </div>
    </>
  );
};

export default EditWindow_MyLogs;
