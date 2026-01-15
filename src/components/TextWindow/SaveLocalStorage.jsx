import React from 'react'
import "../CustomFonts.css"

const SaveLocalStorage = () => {
  return (
    <>
    <div className="border border-green-400 h-10 w-75 flex items-center px-4 gap-4 rounded-xl inset-ring-2  inset-ring-green-400/20">
        <img src="/asset/images/local_storage.svg" alt="" className='h-6'/>
        <span className="text-green-400 font-[JetBrains]">Saved to Local Storage</span>
    </div>
    </>
  )
}

export default SaveLocalStorage
