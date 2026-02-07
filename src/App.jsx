import './App.css'
import Navbar from './components/Navbar'
import HomeMainPage from './components/HomeMainPage'
import MyLogs from './components/MyLogs'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import EntryLog from './components/TextWindow/EntryLog'
import EditWindow_MyLogs from './components/MyLog/EditWindow.MyLogs'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomeMainPage/>} />
      <Route path="/mylogs" element={<><Navbar/><MyLogs/><Footer/></>} />
      <Route path="/mylogs/newlog" element={<><EntryLog/></>} />
      <Route path="/mylogs/editlog/:id" element={<><EditWindow_MyLogs/></>} />
      <Route path="/dev" element={<><Dev/></>} />
    </Routes>
    </>
  )
}

export default App
