import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import BannerTop from '../Components/BannerTop'
import MenuCard from '../Components/MenuCard'
import Story from '../Components/Story'
import Specialdish from '../Components/Specialdish'
import Highlights from '../Components/Highlights'



const Home = () => {
  return (
    <div>
      <Header/>
      <BannerTop/>
      <MenuCard/>
      <Story/>
      <Specialdish/>
      <Highlights/>
      <Footer/> 
    </div>
  )
}

export default Home