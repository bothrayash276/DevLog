import React from 'react'
import Sidebar_MyLogs from './MyLog/Sidebar.MyLogs'
import FileDisplay_MyLogs from './MyLog/FileDisplay.MyLogs'

const MyLogs = () => {
  return (
    <>
    <Sidebar_MyLogs/>
    <FileDisplay_MyLogs title={"ladle"} body={"this is a test body"} dateTime={"01fdf+"}/>
    </>
  )
}

export default MyLogs
