

import React from 'react'
import Receipe from './Receipe'

const Receipes = ({receipesData}) => {
    console.log(receipesData)
  return (
    <>
    
    <Receipe singleReceipe={receipesData} />
    </>
  )
}

export default Receipes
