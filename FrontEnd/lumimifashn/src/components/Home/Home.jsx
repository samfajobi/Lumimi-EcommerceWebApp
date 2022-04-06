import React from 'react'
import Navbar from '../Navbar/Navbar'
import Announcement from '../Announcements/Announcement'
import Slider from '../Slider/Slider'
import ItemCategories from '../ItemCategories/ItemCategories'
import styled from 'styled-components'




const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <ItemCategories />
    </div>
  )
}

export default Home