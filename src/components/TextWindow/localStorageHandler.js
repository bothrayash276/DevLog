import uniqid from "uniqid"
let storage = JSON.parse(localStorage.getItem("userLog")) || []

export const save = (props) => {
    // Getting the Data
    const createEntry = {
        _id : uniqid(),
        title: props.title,
        body: props.body
    }
    // Pushing the data into array
    storage.push(createEntry)
    // Uploading the data to Local Storage
    localStorage.setItem("userLog", JSON.stringify(storage))
}