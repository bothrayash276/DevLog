import React from 'react'
import { Link } from 'react-router-dom'

const RecentLogs_Homepage = () => {
  return (
    <>
      <div className="w-screen px-5 flex">
        <span className="text-white text-xl font-[JetBrainsBold] flex-1">Recent Logs</span>
        <Link to="/mylogs" className='text-blue-700 hover:underline'>Visit Here</Link>
      </div>
    </>
  )
}

export default RecentLogs_Homepage
