import React, { useState } from 'react'
import "../CustomFonts.css"
import { useNavigate } from 'react-router-dom'
import EditWindow_MyLogs from './EditWindow.MyLogs'

const EntryCard_MyLogs = ({props}) => {
    
    const navigate = useNavigate()
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("userLog")))

    const truncate = (str) => {
        let strTrunc = ""
        if(str.length < 200) return str;
        for(let i = 0; i < 200; i++){
            strTrunc += str[i]
        }
        return strTrunc + "......"
    }

    const deleteFn = () => {
        
        let newUserData = storage.filter( obj => obj._id != props._id)
        setStorage(newUserData)
        localStorage.setItem("userLog", JSON.stringify(newUserData))  
        navigate(0)  
    }

    const editFn = () => {
        navigate(`/mylogs/editlog/${props._id}`)
    }

  return (
    <>
    {/* Container of Entry Card */}
    <div className="flex flex-col rounded-lg border border-slate-800 bg-[#162033] p-4">
        <div className="text-white font-[JetBrainsBold] text-3xl">{props.title}</div>
        <div className="text-[#646F7D] font-[JetBrains] mt-5">{truncate(props.body)}</div>
        
        {/* Edit and Delete */}
        <div className='flex justify-end'>
            <button className="bg-red-500 text-white font-[JetBrains] py-1 px-4 mr-2 rounded-lg" onClick={editFn}>Edit</button>
            <button className="bg-green-500 text-white font-[JetBrains] py-1 px-4 ml-2 rounded-lg" onClick={deleteFn}>Delete</button>
        </div>
    </div>
    </>
  )
}

export default EntryCard_MyLogs
