import './App.css'
import Navbar from './components/Navbar'
import HomeMainPage from './components/HomeMainPage'
import MyLogs from './components/MyLogs'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<><Navbar/><HomeMainPage/></>} />
      <Route path="/mylogs" element={<><Navbar/><MyLogs/></>} />
    </Routes>
    </>
  )
}

export default App
