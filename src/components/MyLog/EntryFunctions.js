let storage = JSON.parse(localStorage.getItem("userLog"))

export const deleteFn = (id) => {
    const newDataLog = storage.filter((obj) => {obj._id !== id})
    localStorage.setItem("userLog", JSON.stringify(newDataLog))
}