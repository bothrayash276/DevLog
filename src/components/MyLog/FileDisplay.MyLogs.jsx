import React from 'react'
import uniqid from 'uniqid'

const FileDisplay_MyLogs = (props) => {
    const newEntry = {
        _id : uniqid(),
        title: props.title,
        body: props.body,
        dateTime: props.dateTime
    }

    // Either gets the JSON Array from LocalStorage and parse it or assign an empty array if not found
    let allJournals = JSON.parse(localStorage.getItem("userEntry")) || []

    // Function to save an entry
    const saveEntry = (entry) => {
        // Adds the extra entry to the array
        allJournals.push(entry)
        // Parse the array into stringJSON and save it in localStorage
        localStorage.setItem("userEntry", JSON.stringify(allJournals))
    }

  return (
    <></>

  )
}

export default FileDisplay_MyLogs
