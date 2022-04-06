import React from 'react'
import Navbar from '../Navbar/Navbar'
import Announcement from '../Announcements/Announcement'
import Slider from '../Slider/Slider'
import styled from 'styled-components'




const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  )
}

export default Home