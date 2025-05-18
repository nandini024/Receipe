
import React, { useEffect, useState } from 'react'
import {Routes,Route} from "react-router-dom"
import Navbarr from './Components/Navbarr/Navbarr'

import Receipes from './Components/receipes/Receipes'
import AddToCart from './Components/AddToCart/AddToCart'
import Favorite from './Components/Favorite/Favorite'
import ReceipeDataInformation from './Components/ReceipeDataInformation/ReceipeDataInformation'
import Home from './Components/Home/Home'
import axios from "axios"

const App = () => {
  const [recipes,setReceipes]=useState([])

  useEffect(()=>{
    axios.get("https://dummyjson.com/recipes").then((res)=>{
      console.log(res.data.recipes)
      setReceipes(res.data.recipes)
    })
  },[])

  return (
    <div>
      
      <Navbarr/>

      <Routes>
       <Route path='/' element={<Home/>}/>
        <Route  path='/receipes' element={<Receipes receipesData={recipes}/>}/> 
        <Route path='/fav' element={<Favorite/>}/>
         <Route path='/cart' element={<AddToCart/>}/>
         <Route path='/receipes/:id' element={<ReceipeDataInformation recipeInfo={recipes}/>}/>
      </Routes>


    </div>
  )
}

export default App