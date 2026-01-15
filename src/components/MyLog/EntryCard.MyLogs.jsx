import React from 'react'
import "../CustomFonts.css"

const EntryCard_MyLogs = ({props}) => {
    // const props = {
    //     _id: "tempID",
    //     title: "Heading 1",
    //     body: "The piano sat silently in the corner of the room. Nobody could remember the last time it had been played. The little girl walked up to it and hit a few of the keys. The sound of the piano rang throughout the house for the first time in years. In the upstairs room, confined to her bed, the owner of the house had tears in her eyes."
    // }

    const truncate = (str) => {
        let strTrunc = ""
        for(let i = 0; i < 200; i++){
            strTrunc += str[i]
        }
        return strTrunc + "......"
    }
  return (
    <>
    {/* Container of Entry Card */}
    <div className="flex flex-col rounded-lg border border-slate-800 bg-[#162033] p-4">
        {/* 3 dots Container */}
        <div className='flex justify-end'>
            <img src="/asset/images/three_dots.svg " alt="" className='w-6' />
        </div>
        <div className="text-white font-[JetBrainsBold] text-3xl">{props.title}</div>
        <div className="text-[#646F7D] font-[JetBrains] mt-5">{truncate(props.body)}</div>
    </div>
    </>
  )
}

export default EntryCard_MyLogs
