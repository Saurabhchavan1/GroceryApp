import React from 'react'
import Baneer from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgseaFood from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
      <CategoryPage  title= "SeaFood" bgimage={BgseaFood} categories={["Meat " , "Seafood"]}/>
    </div>
  )
}

export default Seafood