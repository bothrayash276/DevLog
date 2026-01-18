import React from 'react'
import "../CustomFonts.css"
import { deleteFn } from './EntryFunctions'


const EntryCard_MyLogs = ({props}) => {
    

    const truncate = (str) => {
        let strTrunc = ""
        if(str.length < 200) {
            return str
        }
        for(let i = 0; i < 200; i++){
            strTrunc += str[i]
        }
        return strTrunc + "......"
    }


    const editEntry = () => {
        console.log(props._id)
    }
    const deleteEntry = () => {
        deleteFn(props._id)
        this.render()
    }
  return (
    <>
    {/* Container of Entry Card */}
    <div className="flex flex-col rounded-lg border border-slate-800 bg-[#162033] p-4">
        {/* 3 dots Container */}
        <div className='flex justify-end gap-8'>
            <img src="/asset/images/edit.svg" onClick={editEntry} alt="" className='w-4' />
            <img src="/asset/images/delete.svg" onClick={deleteEntry}  alt="" className='w-4' />
        </div>
        {/* Title */}
        <div className="text-white font-[JetBrainsBold] text-3xl">{props.title}</div>
        {/* Body */}
        <div className="text-[#646F7D] font-[JetBrains] mt-5">{truncate(props.body)}</div>
    </div>
    </>
  )
}

export default EntryCard_MyLogs
