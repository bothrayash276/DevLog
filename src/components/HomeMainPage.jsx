import React from 'react'
import Banner_Homepage from './Homepage/Banner.Homepage.jsx'
import RecentLogs_Homepage from './Homepage/RecentLogs.Homepage.jsx'
import Navbar from "./Navbar.jsx"
import Footer from './Footer.jsx'

const HomeMainPage = () => {
  return (
    <div>
      <Navbar/>
      <Banner_Homepage />
      <RecentLogs_Homepage/>
      <Footer/>
    </div>
  )
}

export default HomeMainPage
