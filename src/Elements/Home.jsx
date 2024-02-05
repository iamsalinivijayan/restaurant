import React from 'react'
import Header from '../Components/Header'
import BannerTop from '../Components/BannerTop'
import MenuCard from '../Components/MenuCard'
import Story from '../Components/Story'
import Specialdish from '../Components/Specialdish'
import Highlights from '../Components/Highlights'
import Chef from '../Components/Chef'



const Home = () => {
  return (
    <div>
      <Header/>
      <BannerTop/>
      <MenuCard/>
      <Story/>
      <Specialdish/>
      <Highlights/>
      <Chef/>
    </div>
  )
}

export default Home