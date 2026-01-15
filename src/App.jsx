import './App.css'
import Navbar from './components/Navbar'
import HomeMainPage from './components/HomeMainPage'
import MyLogs from './components/MyLogs'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import EntryLog from './components/TextWindow/EntryLog'
import EntryCard_MyLogs from './components/MyLog/EntryCard.MyLogs'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<><Navbar/><HomeMainPage/><Footer/></>} />
      <Route path="/mylogs" element={<><Navbar/><MyLogs/><Footer/></>} />
      <Route path="/mylogs/newlog" element={<><EntryLog/></>} />
      <Route path="/dev" element={<><EntryCard_MyLogs/></>} />
    </Routes>
    </>
  )
}

export default App
