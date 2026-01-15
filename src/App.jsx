import './App.css'
import Navbar from './components/Navbar'
import HomeMainPage from './components/HomeMainPage'
import MyLogs from './components/MyLogs'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Dev from './components/dev'
import EntryLog from './components/TextWindow/EntryLog'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<><Navbar/><HomeMainPage/><Footer/></>} />
      <Route path="/mylogs" element={<><Navbar/><MyLogs/><Footer/></>} />
      <Route path="/mylogs/newlog" element={<><EntryLog/></>} />
      <Route path="/dev" element={<><Dev/></>} />
    </Routes>
    </>
  )
}

export default App
