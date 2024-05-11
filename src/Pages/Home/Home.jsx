import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExportMenu from '../../Components/ExportMenu/ExportMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Appdownload from '../../Components/Appdownload/Appdownload'


function Home() {

  const [category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExportMenu category={category} setCategory={setCategory}/>
      <FoodDisplay  category={category}/>
      <Appdownload/>
      
    </div>
  )
}

export default Home
