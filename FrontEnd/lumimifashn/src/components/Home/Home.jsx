import React from 'react'
import Navbar from '../Navbar/Navbar'
import Announcement from '../Announcements/Announcement'
import Slider from '../Slider/Slider'
import ItemCategories from '../ItemCategories/ItemCategories'
import Products from '../Products/Products'
import InfoSeciton from '../InfoSection/InfoSeciton'
import Footer from '../../Footer/Footer'





const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <ItemCategories />
      <Products />
      <InfoSeciton />
      <Footer />
    </div>
  )
}

export default Home